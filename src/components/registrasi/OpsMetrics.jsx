export default function OpsMetrics() {
  return (
    <div className="grid grid-cols-2 gap-space-sm">
      <div className="flex flex-col gap-1 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Antrean Intake Hari Ini</span>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-headline-lg font-bold text-on-surface">28</span>
          <span className="text-[11px] font-semibold text-primary">+6 dari kemarin</span>
        </div>
        <span className="text-[11px] text-on-surface-variant">Kapasitas Prep: 82% Optimal</span>
      </div>
      <div className="flex flex-col gap-1 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Suhu Cold Storage</span>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-headline-lg font-bold text-primary">3.8C</span>
          <span className="text-[11px] font-medium text-on-surface-variant">Setpoint: 4.0C</span>
        </div>
        <span className="flex items-center gap-1 text-[11px] font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Semua Ruang Cold Aman
        </span>
      </div>
    </div>
  )
}
