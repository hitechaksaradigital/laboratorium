export default function AuditBanner() {
  return (
    <section className="flex flex-col gap-3 rounded-xl border-l-4 border-l-primary bg-surface-container-lowest p-space-md shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-space-sm">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
          <span className="material-symbols-outlined text-[20px]">sync_saved_locally</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase text-primary">Log Audit Otomatis</span>
            <span className="text-[11px] text-on-surface-variant">14 mnt lalu</span>
          </div>
          <span className="text-[12px] text-on-surface">ICP-OES Batch #B-20250228-Pb terverifikasi otomatis LIMS.</span>
        </div>
      </div>
      <button className="flex items-center gap-1 self-end rounded-lg bg-surface-container-low px-3 py-1.5 text-[12px] sm:self-center" type="button">
        <span className="material-symbols-outlined text-[16px] text-secondary">history</span>
        <span>Lihat Audit Trail</span>
      </button>
    </section>
  )
}
