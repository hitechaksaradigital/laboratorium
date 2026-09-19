import { COC_STEPS } from '../../data/registrasi'

function Dot({ tone, icon }) {
  const cls =
    tone === 'active'
      ? 'bg-primary text-on-primary shadow-md animate-pulse'
      : tone === 'future'
        ? 'bg-surface-container-high text-on-surface-variant'
        : 'bg-surface-tint text-on-primary'
  return (
    <div className={`absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full ${cls}`}>
      <span className="material-symbols-outlined text-[14px]">{icon}</span>
    </div>
  )
}

export default function CocTimeline({ onHandover }) {
  return (
    <section className="relative flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-[24px] text-primary">route</span>
          <div>
            <h2 className="font-headline-sm text-headline-sm leading-tight text-on-surface">Rantai Pengawasan (Chain of Custody)</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Log keterlacakan 21 CFR Part 11</p>
          </div>
        </div>
        <span className="rounded bg-surface-container-high px-space-xs py-0.5 font-mono text-[11px] font-semibold">CoC ID: #COC-982</span>
      </div>
      <div className="relative flex flex-col gap-space-md pl-6 before:absolute before:bottom-2 before:left-2.5 before:top-2 before:w-0.5 before:bg-surface-container-high">
        {COC_STEPS.map((s) => (
          <div key={s.no} className={`relative flex flex-col gap-1 ${s.tone === 'future' ? 'opacity-60' : ''}`}>
            <Dot tone={s.tone} icon={s.icon} />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`font-label-lg text-label-lg font-semibold ${s.tone === 'active' ? 'font-bold text-primary' : 'text-on-surface'}`}>
                  {s.no}. {s.title}
                </span>
                {s.tone === 'active' && (
                  <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-on-primary">Aktif</span>
                )}
              </div>
              <span className={`font-mono text-label-sm ${s.tone === 'active' ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{s.time}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{s.holder}</p>
            {s.room && <p className="font-body-sm text-body-sm text-on-surface-variant">{s.room}</p>}
            {s.tone === 'done' && (
              <div className="mt-0.5 flex w-fit items-center gap-1.5 rounded bg-surface-container-low px-space-sm py-1 text-[11px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[14px] text-surface-tint">verified</span>
                <span>{s.note}</span>
              </div>
            )}
            {s.tone === 'active' && (
              <div className="mt-1 flex items-center justify-between rounded-lg bg-surface-container-low p-space-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-primary">fingerprint</span>
                  <span className="font-mono text-[11px] text-on-surface-variant">TTE Verified - SHA-256: 7f3a9e...4b81</span>
                </div>
                <span className="rounded bg-surface-container-highest px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary">21 CFR Valid</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-space-sm border-t border-surface-container pt-space-sm">
        <button onClick={onHandover} className="flex h-10 w-full items-center justify-center gap-space-xs rounded-lg bg-primary font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container" type="button">
          <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
          <span>Transfer Kepemilikan Sampel (Handover CoC)</span>
        </button>
        <span className="text-center text-[10px] text-on-surface-variant">
          Setiap perpindahan fisik sampel mewajibkan validasi Tanda Tangan Elektronik atau PIN Analis
        </span>
      </div>
    </section>
  )
}
