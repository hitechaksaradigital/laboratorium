export default function StatCards() {
  return (
    <section className="grid grid-cols-1 gap-space-md sm:grid-cols-2 xl:grid-cols-4">
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Sampel Aktif</span>
            <div className="mt-space-xs flex items-baseline gap-space-xs">
              <span className="font-headline-xl text-headline-xl tracking-tight text-on-surface">142</span>
              <span className="font-label-md text-label-md font-medium text-on-surface-variant">Sampel</span>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary">
            <span className="material-symbols-outlined text-[22px]">science</span>
          </div>
        </div>
        <div className="mt-space-md flex flex-col gap-space-xs">
          <div className="flex items-center justify-between font-label-sm text-label-sm">
            <span className="flex items-center gap-0.5 font-semibold text-primary">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>+12% vs minggu lalu
            </span>
            <span className="font-medium text-on-surface-variant">Cap: 84%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
            <div className="h-full rounded-full bg-primary" style={{ width: '84%' }} />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Rata-rata Waktu Uji (TAT)</span>
            <div className="mt-space-xs flex items-baseline gap-space-xs">
              <span className="font-headline-xl text-headline-xl tracking-tight text-on-surface">2.4</span>
              <span className="font-label-md text-label-md font-medium text-on-surface-variant">Hari</span>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-fixed text-secondary">
            <span className="material-symbols-outlined text-[22px]">speed</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-xs">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Target: &lt; 3.0 Hari</span>
          <span className="flex items-center gap-1 rounded-full bg-surface-container px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Sesuai SLA
          </span>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Menunggu Verifikasi</span>
            <div className="mt-space-xs flex items-baseline gap-space-xs">
              <span className="font-headline-xl text-headline-xl tracking-tight text-on-surface">18</span>
              <span className="font-label-md text-label-md font-medium text-on-surface-variant">Parameter</span>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-container/40 text-on-secondary-container">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-xs">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Siap validasi SPV Lab</span>
          <span className="rounded-full bg-secondary-fixed px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-on-secondary-fixed">Prioritas Tinggi</span>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-tertiary-fixed/30 p-space-lg shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-error">Peringatan OOS</span>
            <div className="mt-space-xs flex items-baseline gap-space-xs">
              <span className="font-headline-xl text-headline-xl font-bold tracking-tight text-error">3</span>
              <span className="font-label-md text-label-md font-medium text-error">Sampel Kritis</span>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-error text-on-error shadow-sm">
            <span className="material-symbols-outlined text-[22px]">warning</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-xs">
          <span className="font-body-sm text-body-sm font-medium text-on-error-container">Perlu Tindakan Segera</span>
          <span className="animate-pulse rounded-full bg-error px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-on-error">INVESTIGASI</span>
        </div>
      </div>
    </section>
  )
}
