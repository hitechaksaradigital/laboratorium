# Synthesis LIMS — Dashboard Operasional Lab (React + Vite)

Implementasi React + Vite + Tailwind CSS dari desain `design/dashboard_operasional_lab/code.html`.

## Jalankan

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # output ke dist/
npm run preview
```

## Struktur

```
index.html
vite.config.js
tailwind.config.js   # token warna/spasi/font dari desain (surface, primary, secondary, dll)
postcss.config.js
src/
  main.jsx
  index.css
  App.jsx            # layout + state (nav, range, divisi, search, filter, clock)
  data/dashboard.js  # NAV_ITEMS, TREND_DATA, SAMPLES, QC_POINTS
  components/
    Sidebar.jsx      # nav LIMS + status node + clock UTC+7 live
    Header.jsx       # lab switcher, badge ISO, search, notif OOS, user
    PageHero.jsx     # judul + filter Hari Ini/7/30 Hari + divisi + export + registrasi
    StatCards.jsx    # 4 kartu KPI (aktif, TAT, verifikasi, OOS)
    TrendChart.jsx   # stacked bar Sen–Min dari TREND_DATA
    QcChart.jsx      # QC Shewhart SVG (UCL/CL/LCL + 9 titik)
    SampleTable.jsx  # tabel antrean + filter + pagination
    StatusBadge.jsx  # badge In-Testing / OOS / Verification / Approved
    RowActions.jsx   # tombol aksi per status
    AuditBanner.jsx  # log audit otomatis
```

## Catatan

- Semua token Tailwind (`bg-surface`, `text-on-surface`, `px-gutter`, `font-headline-lg`, dst.) dipetakan 1:1 dari `tailwind.config` di HTML asli.
- Interaktif: navigasi sidebar, toggle rentang waktu, dropdown divisi, search header + filter tabel (client-side), jam sidebar live per detik.
- Gambar avatar/logo memakai URL asli dari desain; ganti dengan aset lokal bila perlu offline.
- Sidebar disembunyikan di bawah breakpoint `lg` (gunakan `lg:pl-72` di konten).
