export default function RowActions({ status }) {
  if (status === 'oos') {
    return (
      <div className="inline-flex items-center gap-space-xs">
        <button className="rounded-lg bg-error-container px-space-sm py-1 font-label-sm text-label-sm font-bold text-on-error-container transition-colors hover:bg-error hover:text-on-error" title="Input Hasil Retest" type="button">Investigasi OOS</button>
        <button className="rounded-lg bg-surface-container-low p-1.5 text-on-surface-variant transition-colors hover:text-on-surface" title="Detail Sampel" type="button">
          <span className="material-symbols-outlined text-[18px]">visibility</span>
        </button>
      </div>
    )
  }
  if (status === 'approved') {
    return (
      <div className="inline-flex items-center gap-space-xs">
        <button className="rounded-lg bg-surface-container-low p-1.5 text-primary transition-colors hover:bg-surface-container" title="Unduh Sertifikat LHU" type="button">
          <span className="material-symbols-outlined text-[18px]">download</span>
        </button>
        <button className="rounded-lg bg-surface-container-low p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container" title="Audit Trail" type="button">
          <span className="material-symbols-outlined text-[18px]">history_edu</span>
        </button>
        <button className="rounded-lg bg-primary p-1.5 text-on-primary transition-colors hover:bg-primary-container" title="Detail Sampel" type="button">
          <span className="material-symbols-outlined text-[18px]">visibility</span>
        </button>
      </div>
    )
  }
  const mid = status === 'verification' ? 'rate_review' : 'edit_note'
  const midTitle = status === 'verification' ? 'Verifikasi Hasil SPV' : 'Input Data Hasil'
  return (
    <div className="inline-flex items-center gap-space-xs">
      <button className="rounded-lg bg-surface-container-low p-1.5 text-primary transition-colors hover:bg-surface-container" title={midTitle} type="button">
        <span className="material-symbols-outlined text-[18px]">{mid}</span>
      </button>
      <button className="rounded-lg bg-surface-container-low p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container" title="Lacak Chain of Custody" type="button">
        <span className="material-symbols-outlined text-[18px]">timeline</span>
      </button>
      <button className="rounded-lg bg-primary p-1.5 text-on-primary transition-colors hover:bg-primary-container" title="Detail Sampel" type="button">
        <span className="material-symbols-outlined text-[18px]">visibility</span>
      </button>
    </div>
  )
}
