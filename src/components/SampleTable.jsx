import StatusBadge from './StatusBadge'
import RowActions from './RowActions'

export default function SampleTable(p) {
  const rows = p.rows
  return (
    <section className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="flex flex-col gap-3 p-space-lg md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container text-primary">
            <span className="material-symbols-outlined text-[20px]">view_list</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Antrean Sampel Aktif</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Update tiap 60 detik - LIMS Hub</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input value={p.filter} onChange={(e) => p.onFilter(e.target.value)} className="h-8 w-48 rounded-lg bg-surface-container-low pl-8 pr-3 lg:w-64" placeholder="Filter cepat..." type="text" />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant">filter_list</span>
          </div>
          <button className="flex h-8 px-2 items-center rounded-lg bg-surface-container-low" type="button">
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-on-surface">
          <thead>
            <tr className="bg-surface-container-low text-[10px] uppercase text-on-surface-variant">
              <th className="px-space-lg py-space-sm">ID Sampel</th>
              <th className="px-space-md py-space-sm">Matriks</th>
              <th className="px-space-md py-space-sm">Divisi</th>
              <th className="px-space-md py-space-sm">Masuk</th>
              <th className="px-space-md py-space-sm">Analis</th>
              <th className="px-space-md py-space-sm">Status</th>
              <th className="px-space-lg py-space-sm text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id} className={'hover:bg-surface-container-low/70 ' + s.rowClass}>
                <td className="whitespace-nowrap px-space-lg py-space-sm">
                  <div className="flex items-center gap-1">
                    <span className={'material-symbols-outlined text-[18px] ' + s.iconTone}>{s.icon}</span>
                    <span className={'text-[14px] font-bold ' + s.idTone}>{s.id}</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant">{s.sub}</span>
                </td>
                <td className="px-space-md py-space-sm">
                  <div className="text-[14px] font-semibold">{s.matrix}</div>
                  <div className="text-[12px] text-on-surface-variant">{s.client}</div>
                </td>
                <td className="whitespace-nowrap px-space-md py-space-sm">
                  <span className={'rounded-full px-2 py-0.5 text-[11px] ' + s.divisionClass}>{s.division}</span>
                  <div className="mt-0.5 text-[11px] text-on-surface-variant">{s.tests}</div>
                </td>
                <td className="whitespace-nowrap px-space-md py-space-sm text-[13px]">
                  <div>{s.date}</div>
                  <div className="text-[11px] text-on-surface-variant">{s.time}</div>
                </td>
                <td className="whitespace-nowrap px-space-md py-space-sm">
                  <div className="flex items-center gap-2">
                    {s.avatar ? <img className="h-7 w-7 rounded-full object-cover" alt={s.analyst} src={s.avatar} /> : <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-container text-xs font-bold text-primary">{s.initials}</div>}
                    <div className="flex flex-col">
                      <span className="text-[12px] font-medium leading-tight">{s.analyst}</span>
                      <span className="text-[10px] text-on-surface-variant">{s.analystMeta}</span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-space-md py-space-sm"><StatusBadge status={s.status} /></td>
                <td className="whitespace-nowrap px-space-lg py-space-sm text-right"><RowActions status={s.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 bg-surface-container-low p-space-md sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[12px] text-on-surface-variant">Show 1-{rows.length} dari 142</span>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest opacity-40" disabled type="button"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-on-primary" type="button">1</button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-xs font-bold" type="button">2</button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest text-xs font-bold" type="button">3</button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-lowest" type="button"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
        </div>
      </div>
    </section>
  )
}
