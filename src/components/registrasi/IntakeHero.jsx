export default function IntakeHero() {
  return (
    <div className="mb-space-lg flex flex-col justify-between gap-space-md xl:flex-row xl:items-center">
      <div className="flex flex-col gap-space-xs">
        <div className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
          <a className="transition-colors hover:text-primary" href="/registrasi-sampel">Registrasi Sampel</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="font-semibold text-primary">Form Penerimaan Baru &amp; Log Rantai Pengawasan</span>
          <span className="ml-space-xs rounded-full bg-secondary-container/40 px-space-xs py-0.5 font-label-sm text-[10px] tracking-wide text-on-secondary-container">
            MODUL 01 // ISO 17025:2017 CL.7.4
          </span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-space-md">
          <h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
            Penerimaan &amp; Registrasi Sampel Analitik
          </h1>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-space-sm py-0.5 font-label-sm text-label-sm text-primary">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
            Direct Intake Mode
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm self-start xl:self-auto">
        <button className="flex h-9 items-center gap-space-xs rounded-lg bg-surface-container-lowest px-space-md font-label-lg text-label-lg text-on-surface shadow-sm transition-colors hover:bg-surface-container-high" type="button">
          <span className="material-symbols-outlined text-[18px] text-primary">print</span>
          <span>Cetak Label Barcode/QR</span>
        </button>
        <button className="flex h-9 items-center gap-space-xs rounded-lg bg-surface-container-lowest px-space-md font-label-lg text-label-lg text-on-surface-variant shadow-sm transition-colors hover:bg-surface-container-high hover:text-on-surface" type="button">
          <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
          <span>Simpan Draft</span>
        </button>
        <button className="flex h-9 items-center gap-space-xs rounded-lg bg-primary px-space-lg font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container" type="button">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>Konfirmasi &amp; Terbitkan ID Unik</span>
        </button>
      </div>
    </div>
  )
}
