# Synthesis LIMS — React + Vite + Supabase Auth

Implementasi React + Vite + Tailwind CSS + React Router + Supabase dari folder design/.

## Rute

- `/login` → halaman masuk (Supabase Auth, publik)
- `/register` → halaman daftar akun lab (Supabase Auth, publik)
- `/` → Dashboard Operasional Lab (proteksi login)
- `/registrasi-sampel` → Penerimaan & Registrasi + CoC, tambah & lihat data sampel (proteksi login)

## 1. Setup Supabase (wajib untuk auth + data)

1. Buat project di Supabase Dashboard, lalu buka Project Settings → API, salin Project URL dan anon public key.
2. Isi `.env` (lihat `.env.example`):
   VITE_SUPABASE_URL=https://xyzcompany.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbG...
3. Authentication → Providers → Email: aktifkan. Untuk dev tanpa verifikasi email: matikan Confirm email (atau biarkan on — register menampilkan pesan cek email bila sesi belum langsung terbit).
4. SQL Editor → New query → paste seluruh isi `supabase/schema.sql` → Run (tabel samples, test_parameters + seed, sample_parameters, coc_events, trigger kode SMP-YYYY-NNNN, view samples_overview, RLS dev anon).
5. Restart dev server: `npm run dev` → buka http://localhost:5173/login → daftar → masuk otomatis ke `/`.

## 2. Jalankan

npm install, npm run dev, npm run build, npm run preview.

## 3. Alur auth

- src/context/AuthContext.jsx: AuthProvider (session, user, signIn/signUp/signOut, onAuthStateChange).
- src/components/ProtectedRoute.jsx: route `/` & `/registrasi-sampel` redirect ke `/login` bila belum login (dengan state.from untuk kembali setelah masuk).
- LoginPage: email + password (show/hide), error jelas, redirect ke halaman asal.
- RegisterPage: nama + email + password/konfirmasi (min 6, harus sama), nama disimpan ke user_metadata.full_name; bila email confirmation on → pesan cek email, bila off/auto-session → langsung ke `/`.
- Header: menampilkan nama/email user login + inisial avatar + tombol logout (signOut → /login).

## 4. Alur data /registrasi-sampel

- Tombol Konfirmasi & Terbitkan ID Unik → src/lib/samples.js createSample(): insert samples, sample_parameters, 1 coc_events awal → reset form kosong → reload daftar.
- Daftar Data Sampel Tersimpan → fetchSamples() dari view samples_overview (50 terbaru).
- Tanpa .env: halaman auth + pesan panduan tampil, build tetap lolos.

## 5. Skema database (ringkas)

- samples(id uuid, sample_code unique auto SMP-YYYY-NNNN, revision, company, contract_no, contact_person, coa_email, sample_name, matrix_category, volume, volume_unit, container, temp_celsius, check_seal/cold_chain/label/preservasi, sampled_at, received_at, sampling_location, subtotal_idr, param_count, accredited_count, status, storage_location, created/updated_at)
- test_parameters(id: pb/alt/ph/kurkuminoid, name, description, method_ref, instrument, price_idr, accredited)
- sample_parameters(sample_id cascade, parameter_id restrict, price_snapshot_idr, unique pair)
- coc_events(sample_id cascade, step_no, title, holder, detail, location, event_at)
- View samples_overview = samples + agregat JSON parameters + coc_count.
- Auth memakai skema bawaan Supabase (auth.users) — tidak perlu tabel tambahan.
