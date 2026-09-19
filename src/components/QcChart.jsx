import { QC_POINTS } from '../data/dashboard'

const PATH = QC_POINTS.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

export default function QcChart() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm xl:col-span-5">
      <div>
        <div className="flex items-start justify-between pb-space-xs">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">ssid_chart</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">QC Shewhart Chart</h2>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Param: Logam Berat Timbal (Pb) • CRM-108A</span>
          </div>
          <span className="rounded-full bg-surface-container px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-primary">In-Control</span>
        </div>
        <div className="my-space-md grid grid-cols-3 gap-space-xs rounded-lg bg-surface-container-low px-space-sm py-space-xs text-center font-label-sm text-label-sm">
          <div><span className="text-on-surface-variant">UCL (+3σ):</span> <strong className="ml-1 text-error">0.054 mg/L</strong></div>
          <div><span className="text-on-surface-variant">CL (Mean):</span> <strong className="ml-1 text-primary">0.050 mg/L</strong></div>
          <div><span className="text-on-surface-variant">LCL (-3σ):</span> <strong className="ml-1 text-error">0.046 mg/L</strong></div>
        </div>
        <div className="flex h-44 w-full items-center overflow-hidden rounded-lg bg-surface-container-low/40 p-2">
          <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 140">
            <line stroke="#ba1a1a" strokeDasharray="4 4" strokeWidth="1.5" x1="0" x2="360" y1="20" y2="20" />
            <text fill="#ba1a1a" fontFamily="Inter" fontSize="9" fontWeight="600" x="315" y="16">UCL 0.054</text>
            <line stroke="#0058bd" strokeDasharray="2 2" strokeWidth="1.5" x1="0" x2="360" y1="70" y2="70" />
            <text fill="#0058bd" fontFamily="Inter" fontSize="9" fontWeight="600" x="315" y="66">CL 0.050</text>
            <line stroke="#ba1a1a" strokeDasharray="4 4" strokeWidth="1.5" x1="0" x2="360" y1="120" y2="120" />
            <text fill="#ba1a1a" fontFamily="Inter" fontSize="9" fontWeight="600" x="315" y="116">LCL 0.046</text>
            <path d={PATH} stroke="#0058bd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            {QC_POINTS.map((p) => (
              <circle key={p.x} cx={p.x} cy={p.y} r={p.last ? 4.5 : 3.5} strokeWidth="2"
                className={p.last ? 'fill-primary stroke-surface-container-lowest' : 'fill-surface-container-lowest stroke-primary'} />
            ))}
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-sm font-label-sm text-label-sm text-on-surface-variant">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px] text-primary">verified</span>Standar SNI ISO 7887:2012
        </span>
        <span>Run QC Batch: #B-20250228-Pb</span>
      </div>
    </div>
  )
}
