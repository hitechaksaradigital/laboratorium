import { SectionShell } from './fields'
import { formatIDR } from '../../data/registrasi'

export default function ParameterTable({ items, selected, onToggle, onToggleAll }) {
  const all = items.length > 0 && selected.length === items.length
  const count = selected.length
  const accredited = items.filter((p) => selected.includes(p.id) && p.accredited).length
  const subtotal = items.filter((p) => selected.includes(p.id)).reduce((a, b) => a + b.price, 0)
  return (
    <SectionShell
      accent="bg-primary-container"
      number="3"
      numberTone="bg-primary-container/20 text-primary-container"
      title="Pemetaan Parameter Uji & Acuan Standar"
      desc="Paket pengujian komprehensif atau parameter individu KAN"
      badge={
        <button className="flex items-center gap-1 text-[12px] text-primary hover:underline" type="button">
          <span className="material-symbols-outlined text-[16px]">add_circle</span> Tambah Parameter
        </button>
      }
    >
      <div className="overflow-x-auto rounded-lg bg-surface-container-low">
        <table className="w-full text-left text-[12px]">
          <thead className="bg-surface-container-high text-[10px] uppercase text-on-surface-variant">
            <tr>
              <th className="w-10 p-space-sm text-center">
                <input type="checkbox" checked={all} onChange={(e) => onToggleAll(e.target.checked)} className="rounded text-primary focus:ring-0" />
              </th>
              <th className="px-space-md py-space-sm">Parameter Analisis</th>
              <th className="px-space-md py-space-sm">Metode</th>
              <th className="px-space-md py-space-sm">Alat</th>
              <th className="px-space-md py-space-sm text-right">Biaya (IDR)</th>
              <th className="px-space-md py-space-sm text-center">Akreditasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {items.map((p) => (
              <tr key={p.id} className="transition-colors hover:bg-surface-container-lowest/80">
                <td className="p-space-sm text-center">
                  <input type="checkbox" checked={selected.includes(p.id)} onChange={() => onToggle(p.id)} className="rounded text-primary focus:ring-0" />
                </td>
                <td className="px-space-md py-space-sm font-semibold text-on-surface">
                  {p.name}
                  <span className="block text-[11px] font-normal text-on-surface-variant">{p.desc}</span>
                </td>
                <td className="px-space-md py-space-sm">
                  <span className="rounded bg-surface-container-high px-1 py-0.5 font-mono text-[11px]">{p.method}</span>
                </td>
                <td className="px-space-md py-space-sm text-on-surface-variant">{p.instrument}</td>
                <td className="px-space-md py-space-sm text-right font-mono">{p.price.toLocaleString('id-ID')}</td>
                <td className="px-space-md py-space-sm text-center">
                  <span className="rounded px-1 py-0.5 text-[10px] font-bold uppercase bg-secondary-fixed/50 text-on-secondary-fixed">
                    {p.accredited ? 'KAN LP-128' : 'Internal'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-space-md flex flex-col items-center justify-between gap-space-md rounded-lg bg-surface p-space-md md:flex-row">
        <div className="flex items-center gap-space-lg">
          <div>
            <span className="block text-[10px] uppercase text-on-surface-variant">Estimasi TAT</span>
            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-primary">timer</span>
              <span className="font-semibold text-primary">3 Hari Kerja (SLA Normal)</span>
            </div>
            <span className="text-[12px] text-on-surface-variant">Target Rilis Draft CoA: 27 Okt 2025</span>
          </div>
          <div className="hidden h-10 w-px bg-surface-container-high md:block" />
          <div>
            <span className="block text-[10px] uppercase text-on-surface-variant">Terpilih</span>
            <span className="mt-0.5 block font-semibold">{count} Parameter ({accredited} Terakreditasi)</span>
          </div>
        </div>
        <div className="w-full text-right md:w-auto">
          <span className="block text-[10px] uppercase text-on-surface-variant">Subtotal</span>
          <div className="text-[20px] font-bold tracking-tight">{formatIDR(subtotal)}</div>
          <span className="text-[11px] text-on-surface-variant">Belum termasuk PPN 11%</span>
        </div>
      </div>
    </SectionShell>
  )
}
