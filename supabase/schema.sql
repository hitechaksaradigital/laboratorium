-- Synthesis LIMS — Skema Supabase: Registrasi & Rantai Sampel
-- Modul 01 // ISO 17025:2017 CL.7.4
-- Pakai: Supabase Dashboard → SQL Editor → New query → paste → Run

create extension if not exists "pgcrypto";

create table if not exists public.samples (
  id uuid primary key default gen_random_uuid(),
  sample_code text not null unique,
  revision text not null default 'R-01',
  company text not null,
  contract_no text,
  contact_person text,
  coa_email text,
  sample_name text not null,
  matrix_category text,
  volume numeric,
  volume_unit text not null default 'mL',
  container text,
  temp_celsius numeric,
  check_seal boolean not null default false,
  check_cold_chain boolean not null default false,
  check_label boolean not null default false,
  check_preservasi boolean not null default false,
  sampled_at timestamptz,
  received_at timestamptz not null default now(),
  sampling_location text,
  subtotal_idr integer not null default 0,
  param_count integer not null default 0,
  accredited_count integer not null default 0,
  status text not null default 'registered'
    check (status in ('draft','registered','in_testing','verification','approved','oos')),
  storage_location text not null default 'COLD STORAGE A-03',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.test_parameters (
  id text primary key,
  name text not null,
  description text,
  method_ref text,
  instrument text,
  price_idr integer not null default 0,
  accredited boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.sample_parameters (
  id uuid primary key default gen_random_uuid(),
  sample_id uuid not null references public.samples(id) on delete cascade,
  parameter_id text not null references public.test_parameters(id) on delete restrict,
  price_snapshot_idr integer not null default 0,
  created_at timestamptz not null default now(),
  unique (sample_id, parameter_id)
);

create table if not exists public.coc_events (
  id uuid primary key default gen_random_uuid(),
  sample_id uuid not null references public.samples(id) on delete cascade,
  step_no integer not null,
  title text not null,
  holder text,
  detail text,
  location text,
  event_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index if not exists coc_events_sample_idx on public.coc_events (sample_id, step_no);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_samples_updated_at on public.samples;
create trigger trg_samples_updated_at
  before update on public.samples
  for each row execute function public.set_updated_at();

create sequence if not exists public.sample_code_seq;

create or replace function public.generate_sample_code()
returns trigger language plpgsql as $$
declare
  y text := to_char(now(), 'YYYY');
  n integer;
begin
  if new.sample_code is null or new.sample_code = '' then
    n := nextval('public.sample_code_seq');
    new.sample_code := 'SMP-' || y || '-' || lpad(n::text, 4, '0');
  end if;
  return new;
end $$;

drop trigger if exists trg_samples_code on public.samples;
create trigger trg_samples_code
  before insert on public.samples
  for each row execute function public.generate_sample_code();
insert into public.test_parameters (id, name, description, method_ref, instrument, price_idr, accredited)
values
  ('pb', 'Kadar Logam Berat Timbal (Pb)', 'Deteksi trace level <0.001 mg/kg', 'SNI 19-2896-1998', 'ICP-MS Agilent 7850', 350000, true),
  ('alt', 'Angka Lempeng Total (ALT Mikrobiologi)', 'Inkubasi 48 jam aerob 30C', 'ISO 4833-1:2013', 'Incubator Shaker Memmert', 225000, true),
  ('ph', 'Derajat Keasaman (pH Elektrometri)', 'Kompensasi suhu otomatis 25C', 'ASTM D1293-18', 'Mettler Toledo SevenDirect', 85000, true),
  ('kurkuminoid', 'Kadar Kurkuminoid Total (Spektrofotometri)', 'Assay kuantitatif 425 nm', 'FHI Edisi II:2017', 'UV-Vis Shimadzu UV-2600i', 420000, false)
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  method_ref = excluded.method_ref,
  instrument = excluded.instrument,
  price_idr = excluded.price_idr,
  accredited = excluded.accredited;

create or replace view public.samples_overview as
select
  s.*,
  coalesce(
    (select json_agg(json_build_object(
      'id', tp.id, 'name', tp.name, 'method', tp.method_ref,
      'instrument', tp.instrument, 'price', sp.price_snapshot_idr,
      'accredited', tp.accredited
    ) order by tp.id)
    from public.sample_parameters sp
    join public.test_parameters tp on tp.id = sp.parameter_id
    where sp.sample_id = s.id),
    '[]'::json
  ) as parameters,
  (select count(*) from public.coc_events c where c.sample_id = s.id) as coc_count
from public.samples s;

alter table public.samples enable row level security;
alter table public.test_parameters enable row level security;
alter table public.sample_parameters enable row level security;
alter table public.coc_events enable row level security;

drop policy if exists "anon_all_samples" on public.samples;
create policy "anon_all_samples" on public.samples
  for all to anon using (true) with check (true);

drop policy if exists "anon_read_params" on public.test_parameters;
create policy "anon_read_params" on public.test_parameters
  for select to anon using (true);

drop policy if exists "anon_all_sample_params" on public.sample_parameters;
create policy "anon_all_sample_params" on public.sample_parameters
  for all to anon using (true) with check (true);

drop policy if exists "anon_all_coc" on public.coc_events;
create policy "anon_all_coc" on public.coc_events
  for all to anon using (true) with check (true);
