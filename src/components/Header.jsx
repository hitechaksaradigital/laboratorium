export default function Header({ query, onQuery, user, onSignOut }) {
  const displayName =
    user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Pengguna Lab'
  const role = user?.email || 'Akun terverifikasi'
  const initial = (displayName?.trim()?.[0] || 'U').toUpperCase()
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between bg-surface/90 px-gutter shadow-card backdrop-blur-xl lg:left-72 lg:px-gutter-desktop">
      <div className="flex max-w-2xl flex-1 items-center gap-space-lg">
        <div className="hidden items-center gap-space-xs rounded-full bg-surface-container-high px-space-md py-space-xs text-on-surface md:flex">
          <span className="material-symbols-outlined text-[18px] text-primary">domain</span>
          <span className="font-label-md text-label-md max-w-[210px] truncate">
            Lab Kimia &amp; Lingkungan Utama - Gedung B
          </span>
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
            arrow_drop_down
          </span>
        </div>
        <div className="hidden items-center gap-space-xs rounded-full bg-secondary-container px-space-sm py-space-xs font-label-sm text-label-sm tracking-wide text-on-secondary-container xl:inline-flex">
          <span className="material-symbols-outlined text-[14px]">verified_user</span>
          <span>ISO/IEC 17025</span>
        </div>
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">
            search
          </span>
          <input
            value={query}
            onChange={(e) => onQuery?.(e.target.value)}
            className="h-9 w-full rounded-full bg-surface-container-lowest pl-9 pr-space-md font-body-sm text-body-sm text-on-surface shadow-card placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search Sample ID / Barcode / CoA..."
            type="search"
          />
        </div>
      </div>

      <div className="flex items-center gap-space-md">
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface-variant shadow-card transition-colors hover:bg-surface-container-high hover:text-on-surface"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute -right-1 -top-1 rounded-full bg-error px-1.5 py-0.5 font-label-sm text-[10px] font-bold leading-none text-on-error">
            OOS
          </span>
        </button>
        <div className="mx-space-xs hidden h-6 w-px bg-surface-container-high sm:block" />
        <div className="flex items-center gap-space-sm">
          <div className="hidden flex-col text-right sm:flex">
            <span className="font-label-lg text-label-lg max-w-[220px] truncate leading-tight text-on-surface">
              {displayName}
            </span>
            <span className="font-body-sm text-body-sm max-w-[220px] truncate leading-tight text-on-surface-variant">
              {role}
            </span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-on-primary">
            {initial}
          </div>
          <button
            onClick={onSignOut}
            title="Keluar"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface-variant shadow-card transition-colors hover:bg-error-container hover:text-on-error-container"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}
