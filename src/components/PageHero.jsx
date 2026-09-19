const RANGES = ['Hari Ini', '7 Hari', '30 Hari']

export default function PageHero({ range, onRange, division, onDivision }) {
  return (
    <section className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:flex-row lg:items-center">
      <div className="flex flex-col gap-space-xs">
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
            Modul 1 &amp; 7 • Lab Operations Control
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
          <span className="font-label-sm text-label-sm font-medium text-on-surface-variant">
            Compliance ISO/IEC 17025:2017
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
          Pusat Operasional &amp; Analitik Laboratorium
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="flex items-center rounded-lg bg-surface-container-low p-space-xs">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => onRange?.(r)}
              className={`rounded-lg px-space-md py-space-xs font-label-md text-label-md transition-colors ${
                range === r
                  ? 'bg-surface-container-lowest font-semibold text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              {r}
            </button>
          ))}
        </div>

        <div className="relative min-w-[190px]">
          <select
            value={division}
            onChange={(e) => onDivision?.(e.target.value)}
            className="h-9 w-full cursor-pointer appearance-none rounded-lg bg-surface-container-low pl-space-md pr-8 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="all">Semua Divisi Pengujian</option>
            <option value="food">Divisi Kimia Pangan</option>
            <option value="micro">Divisi Mikrobiologi</option>
            <option value="water">Divisi Lingkungan &amp; Air</option>
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">
            expand_more
          </span>
        </div>

        <button
          className="flex h-9 items-center gap-space-xs rounded-lg bg-surface-container-low px-space-md font-label-md text-label-md text-on-surface shadow-sm transition-colors hover:bg-surface-container"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
          <span>Export Laporan Mutu</span>
        </button>
        <button
          className="flex h-9 items-center gap-space-xs rounded-lg bg-primary px-space-md font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Registrasi Sampel Baru</span>
        </button>
      </div>
    </section>
  )
}
