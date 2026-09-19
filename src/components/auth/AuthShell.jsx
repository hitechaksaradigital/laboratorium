import { Link } from 'react-router-dom'

export function AuthShell({ title, subtitle, badge, children, footer }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <div className="hidden flex-1 flex-col justify-between bg-primary p-10 text-on-primary lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-on-primary/15">
            <span className="material-symbols-outlined text-[24px]">science</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] font-bold leading-none">Synthesis LIMS</span>
            <span className="text-[11px] uppercase tracking-wider opacity-80">Analytical OS v4.2</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-on-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
            ISO/IEC 17025:2017 • 21 CFR Part 11
          </span>
          <h2 className="max-w-md text-[32px] font-bold leading-tight">
            Operasional laboratorium yang tertelusur, dari intake sampai CoA.
          </h2>
          <div className="flex flex-col gap-2 text-[13px] opacity-90">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">qr_code_2</span> Registrasi sampel + barcode otomatis</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">route</span> Chain of Custody teraudit penuh</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">verified</span> Validasi LHU/CoA terakreditasi KAN</span>
          </div>
        </div>
        <span className="text-[12px] opacity-70">Lab Kimia &amp; Lingkungan Utama - Gedung B</span>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-on-primary">
              <span className="material-symbols-outlined text-[20px]">science</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-bold leading-none text-primary">Synthesis LIMS</span>
              <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">Analytical OS v4.2</span>
            </div>
          </div>
          <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
            {badge && (
              <span className="mb-3 inline-block rounded-full bg-secondary-container/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-on-secondary-container">
                {badge}
              </span>
            )}
            <h1 className="text-[24px] font-bold tracking-tight text-on-surface">{title}</h1>
            <p className="mb-6 mt-1 text-[13px] text-on-surface-variant">{subtitle}</p>
            {children}
          </div>
          {footer && <div className="mt-4 text-center text-[13px] text-on-surface-variant">{footer}</div>}
          <p className="mt-4 text-center text-[11px] text-on-surface-variant">
            Sudah punya akun? <Link className="font-semibold text-primary hover:underline" to="/login">Masuk</Link>
            {' • '}Belum punya? <Link className="font-semibold text-primary hover:underline" to="/register">Daftar</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export function AuthField({ label, icon, ...props }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">{label}</span>
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">{icon}</span>
        )}
        <input
          {...props}
          className={`h-10 w-full rounded-lg bg-surface-container-low text-[14px] text-on-surface shadow-inner focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary ${icon ? 'pl-10 pr-3' : 'px-3'}`}
        />
      </div>
    </label>
  )
}

export function AuthError({ message }) {
  if (!message) return null
  return (
    <div className="rounded-lg bg-error-container px-3 py-2.5 text-[13px] text-on-error-container">
      {message}
    </div>
  )
}
