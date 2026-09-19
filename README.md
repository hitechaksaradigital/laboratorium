# Synthesis LIMS — React + Vite

Implementasi React + Vite + Tailwind CSS + React Router dari folder design/.

## Rute

- `/` → design/dashboard_operasional_lab/code.html (Dashboard Operasional Lab)
- `/registrasi-sampel` → design/penerimaan_rantai_sampel/code.html (Penerimaan & Registrasi + CoC)

## Jalankan

npm install, npm run dev (http://localhost:5173), npm run build, npm run preview.

## Struktur

- src/main.jsx: router / + /registrasi-sampel
- src/layouts/AppLayout.jsx: Sidebar + Header + Outlet (jam UTC+7 live)
- src/pages/DashboardPage.jsx: KPI, tren, QC chart, tabel sampel, audit
- src/pages/RegistrasiSampelPage.jsx: form intake + label + CoC + modal handover
- src/data/registrasi.js: defaults form, parameter uji, CoC, barcode, formatIDR
- src/components/registrasi/: IntakeHero, ClientInfo, SampleSpec, ParameterTable, LabelPreview, CocTimeline, OpsMetrics, HandoverModal, fields

## Fitur /registrasi-sampel

- Form klien + spesifikasi fisik terkontrol (nama sampel/perusahaan live ke preview label).
- Checklist integritas ISO 17025 sebagai chip toggle.
- Tabel parameter dengan select-all; subtotal IDR + jumlah terakreditasi otomatis.
- Preview label thermal (barcode SVG + QR, lokasi rak, timestamp).
- Timeline Chain of Custody 4 tahap + modal handover (penerima, alasan, PIN 6-digit) + toast.
- Sidebar nav Registrasi & Rantai Sampel mengarah ke /registrasi-sampel.
