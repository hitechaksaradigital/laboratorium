export function Field({ label, action, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center justify-between font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
        <span>{label}</span>
        {action && (
          <span className="cursor-pointer text-[11px] font-normal text-primary hover:underline">{action}</span>
        )}
      </label>
      {children}
    </div>
  )
}

export function TextInput({ icon, ...props }) {
  return (
    <div className="relative">
      {icon && (
        <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">
          {icon}
        </span>
      )}
      <input
        {...props}
        className={`h-9 w-full rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface shadow-inner transition-all focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary ${icon ? 'pl-9 pr-space-md' : 'px-space-md'}`}
      />
    </div>
  )
}

export function SectionShell({ accent, number, numberTone, title, desc, badge, children }) {
  return (
    <section className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />
      <div className="mb-space-md flex items-start justify-between gap-space-sm pb-space-sm">
        <div className="flex items-center gap-space-sm">
          <span className={`flex h-7 w-7 items-center justify-center rounded-lg font-headline-sm text-headline-sm ${numberTone}`}>
            {number}
          </span>
          <div>
            <h2 className="font-headline-sm text-headline-sm leading-tight text-on-surface">{title}</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
          </div>
        </div>
        {badge}
      </div>
      {children}
    </section>
  )
}
