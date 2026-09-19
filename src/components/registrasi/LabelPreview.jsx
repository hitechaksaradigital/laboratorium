import { BARCODE_BARS, LABEL_DEFAULTS } from '../../data/registrasi'

export default function LabelPreview({ form }) {
  const id = LABEL_DEFAULTS.sampleId
  const name = form.sampleName || LABEL_DEFAULTS.sampleId
  const company = form.company || '-'
  return (
    <section className="relative flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-[24px] text-primary">qr_code_scanner</span>
          <div>
            <h2 className="font-headline-sm text-headline-sm leading-tight text-on-surface">Live Preview Label Barcode / QR</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Label cryogenic &amp; solvent-resistant</p>
          </div>
        </div>
        <span className="rounded bg-primary/10 px-space-xs py-0.5 font-label-sm text-label-sm font-bold uppercase text-primary">50x30mm</span>
      </div>
      <div className="relative flex flex-col gap-space-sm overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-inner">
        <div className="flex min-h-[220px] flex-col justify-between rounded-lg bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex items-start justify-between pb-1">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-semibold tracking-wider">{id}</span>
                <span className="rounded bg-surface-container-high px-1.5 py-0.5 text-[9px] font-bold uppercase text-on-surface-variant">R-01</span>
              </div>
              <p className="max-w-[240px] truncate text-[11px] font-semibold text-on-surface">{name}</p>
              <p className="text-[10px] text-on-surface-variant">{company}</p>
            </div>
            <div className="text-right">
              <span className="block text-[9px] font-bold text-primary">SYNTHESIS LAB</span>
              <span className="text-[9px] text-on-surface-variant">ISO 17025 LP-128</span>
            </div>
          </div>
          <div className="grid grid-cols-12 items-center gap-space-sm py-2">
            <div className="col-span-8 flex flex-col gap-1">
              <svg className="h-12 w-full text-on-surface" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 240 50">
                {BARCODE_BARS.map(([x, w]) => (<rect key={x} x={x} y="0" width={w} height="42" />))}
              </svg>
              <div className="text-center font-mono text-[10px] leading-none tracking-widest">*{id}*</div>
            </div>
            <div className="col-span-4 flex justify-end">
              <div className="flex h-16 w-16 items-center justify-center rounded bg-surface-container-lowest p-1 shadow-sm">
                <svg className="h-full w-full text-on-surface" fill="currentColor" viewBox="0 0 25 25">
                  <path d="M1 1h7v7H1zm2 2v3h3V3zm6-2h1v1H9zm2 0h2v1h-2zm3 0h1v1h-1zm2 0h7v7h-7zm2 2v3h3V3zM9 3h1v2H9zm2 0h1v1h-1zm1 1h1v1h-1zM9 5h1v1H9zm2 1h1v1h-1zm2-1h1v2h-1zm2 0h1v1h-1zm-9 3h2v1H8zm3 0h1v1h-1zm2 0h2v1h-2zm3 0h1v1h-1zm3 0h2v1h-2zm-14 2h1v2H1zm2 0h2v1H3zm3 0h1v1H6zm4 0h1v1h-1zm2 0h1v1h-1zm3 0h2v1h-2zm4 0h1v1h-1zm-15 2h1v1H2zm2 0h1v1H4zm3 0h1v1H7zm4 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm4 0h1v1h-1zm-18 2h7v7H1zm2 2v3h3v-3zm6-2h1v2H9zm2 0h2v1h-2zm3 0h1v1h-1zm2 0h1v1h-1zm1 1h2v1h-2zm-3 1h2v1h-2zm3 1h1v1h-1zm-7 1h1v2H9zm2 0h2v1h-2zm3 0h1v2h-1zm3 1h2v1h-2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 font-mono text-[11px]">
            <div>
              <span className="block leading-none text-on-surface-variant">LOKASI RAK:</span>
              <span className="font-bold text-primary">{LABEL_DEFAULTS.location}</span>
            </div>
            <div className="text-right">
              <span className="block leading-none text-on-surface-variant">TERIMA:</span>
              <span className="font-semibold">{LABEL_DEFAULTS.received}</span>
            </div>
          </div>
        </div>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-surface-tint" />
            <span>{LABEL_DEFAULTS.printer}</span>
          </div>
          <button className="flex items-center gap-1 rounded-lg bg-surface-container-highest px-space-md py-1.5 font-label-sm text-label-sm text-primary shadow-sm transition-all hover:bg-primary hover:text-on-primary" type="button">
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Cetak ke Zebra Label Printer</span>
          </button>
        </div>
      </div>
    </section>
  )
}
