import { TREND_DATA } from '../data/dashboard'

export default function TrendChart() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm xl:col-span-7">
      <div className="flex flex-col justify-between gap-space-xs pb-space-md sm:flex-row sm:items-center">
        <div className="flex flex-col">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Tren Volume Sampel &amp; Backlog Pengujian
          </h2>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Monitoring utilisasi instrumen &amp; status pengujian 7 hari terakhir
          </span>
        </div>
        <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" /> Received
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary-container" /> In-Testing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-surface-dim" /> Verified
          </span>
        </div>
      </div>

      <div className="relative flex h-64 w-full flex-col justify-end pt-4">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between font-label-sm text-[10px] text-on-surface-variant">
          {['120', '90', '60', '30', '0'].map((v) => (
            <div key={v} className="flex w-full justify-between opacity-40">
              <span>{v}</span>
              <span className="ml-4 h-px w-full bg-surface-container-high" />
            </div>
          ))}
        </div>
        <div className="relative z-10 grid h-48 grid-cols-7 items-end gap-space-sm pl-8 pr-2">
          {TREND_DATA.map((d) => (
            <div key={d.day} className="group flex h-full flex-col items-center justify-end gap-2">
              <div className="flex w-full max-w-[36px] flex-col overflow-hidden rounded-t-md transition-all group-hover:opacity-90">
                <div className="bg-surface-dim" style={{ height: d.bars.v }} title={`Verified: ${d.verified}`} />
                <div className="bg-secondary-container" style={{ height: d.bars.t }} title={`In-Testing: ${d.inTesting}`} />
                <div className="bg-primary" style={{ height: d.bars.r }} title={`Received: ${d.received}`} />
              </div>
              <span
                className={`font-label-sm text-label-sm text-on-surface-variant ${
                  d.day === 'Jum' ? 'font-bold text-primary' : ''
                }`}
              >
                {d.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
