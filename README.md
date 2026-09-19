# Synthesis LIMS — React + Vite + Supabase

Implementasi React + Vite + Tailwind CSS + React Router + Supabase dari folder design/.

## Rute

- `/` → design/dashboard_operasional_lab/code.html (Dashboard Operasional Lab)
- `/registrasi-sampel` → design/penerimaan_rantai_sampel/code.html (Penerimaan & Registrasi + CoC, tambah & lihat data sampel)

## 1. Setup Supabase (wajib untuk tambah/lihat data)

1. Buat project di Supabase Dashboard, lalu buka Project Settings → API, salin Project URL dan anon public key.
2. Isi `.env` (lihat `.env.example`):
   VITE_SUPABASE_URL=https://xyzcompany.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbG...
3. Buka SQL Editor → New query → paste seluruh isi `supabase/schema.sql` → Run. File ini membuat tabel samples, test_parameters (+ seed 4 parameter desain), sample_parameters, coc_events, trigger kode otomatis SMP-YYYY-NNNN, view samples_overview, dan RLS dev (anon full akses).
4. Restart dev server: `npm run dev` → buka http://localhost:5173/registrasi-sampel.

## 2. Jalankan

npm install, npm run dev, npm run build, npm run preview.

## 3. Alur data /registrasi-sampel

- Tombol Konfirmasi & Terbitkan ID Unik → src/lib/samples.js createSample(): insert samples (kode auto bila kosong), insert sample_parameters (snapshot harga), insert 3 coc_events awal → reload daftar.
- Daftar Data Sampel Tersimpan → fetchSamples() dari view samples_overview (50 terbaru): kode, nama/perusahaan, matriks, jumlah parameter, subtotal IDR, status, waktu buat.
- Tanpa .env: form tetap tampil + tombol nonaktif aman (pesan panduan + error jelas), build tetap lolos.
- Tombol Simpan Draft: info lokal saja. Cetak: window.print().

## 4. Skema database (ringkas)

- samples(id uuid, sample_code unique auto SMP-YYYY-NNNN, revision, company, contract_no, contact_person, coa_email, sample_name, matrix_category, volume, volume_unit, container, temp_celsius, check_seal/cold_chain/label/preservasi, sampled_at, received_at, sampling_location, subtotal_idr, param_count, accredited_count, status draft/registered/in_testing/verification/approved/oos, storage_location, created/updated_at)
- test_parameters(id text pk: pb/alt/ph/kurkuminoid, name, description, method_ref, instrument, price_idr, accredited)
- sample_parameters(sample_id → samples cascade, parameter_id → test_parameters restrict, price_snapshot_idr, unique pair)
- coc_events(sample_id → samples cascade, step_no, title, holder, detail, location, event_at)
- View samples_overview = samples + agregat JSON parameters + coc_count.

## 5. Struktur kode terkait

- src/lib/supabase.js: client + flag supabaseConfigured
- src/lib/samples.js: fetchSamples, createSample
- src/pages/RegistrasiSampelPage.jsx: form + load + simpan + toast
- src/components/registrasi/SampleHistory.jsx: tabel data dari database
- src/components/registrasi/IntakeHero.jsx: tombol terkoneksi (confirm/draft/print)
