import { NAV_ITEMS } from '../data/dashboard'

export default function Sidebar({ activePath, onNavigate, clock }) {
  return (
    <aside className="fixed left-0 top-0 hidden h-full w-72 flex-col justify-between bg-surface-container-low shadow-card lg:flex z-50">
      <div className="flex flex-col">
        <div className="flex h-16 items-center gap-space-sm bg-surface-container-lowest px-gutter">
          <img
            alt="Synthesis LIMS Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WIajxXCOcRF93boULGqUDWFVBbpIf4yuaCN-thKzn6PaJTqeJWykkP6O9Un8ZlL9RP5VpPR299KXJ5gvaldIW9CU0zThlZ0cZ7EXiaIRJuQlCL25utdg7vMWTkaGUmsqoB3VnR6x8tl_IptMiW3tKS4-_IU5fwG3eNF4o0yn3qNbCHwXgU-_IA-L89uzMBGnAEj7XjKA8Bk_TWBDPiNvlxXOxUXOX1ezjiEW5w8gqSXg"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm leading-none text-primary">
              Synthesis LIMS
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Analytical OS v4.2
            </span>
          </div>
        </div>

        <div className="px-gutter pb-space-xs pt-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            Laboratorium &amp; Operasional
          </span>
        </div>

        <nav className="flex flex-col gap-space-xs px-gutter">
          {NAV_ITEMS.map((item) => {
            const isActive = activePath === item.path
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate?.(item.path)
                }}
                className={`flex items-center gap-space-sm rounded-lg px-space-md py-space-sm transition-colors ${
                  isActive
                    ? 'bg-primary-container font-label-lg text-label-lg text-on-primary-container shadow-sm'
                    : 'font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>
      </div>

      <div className="bg-surface-container-low p-gutter">
        <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-lowest p-space-md shadow-card">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-label-sm text-label-sm uppercase text-primary">
              LIMS Online • Active Node
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            ISO/IEC 17025 Accredited
          </span>
          <div className="mt-space-xs flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              21 CFR Part 11
            </span>
            <span className="tabular-nums">{clock}</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
