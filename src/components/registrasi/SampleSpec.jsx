import { Field, SectionShell, TextInput } from './fields'
import { MATRIX_OPTIONS } from '../../data/registrasi'

export default function SampleSpec({ form, checks, onChange, onCheck }) {
  const chips = [
    { key: 'seal', label: 'Segel Utuh & Tidak Bocor' },
    { key: 'coldChain', label: 'Ice Gel / Cold Chain Terjaga <4C' },
    { key: 'label', label: 'Label Pengirim Terbaca Jelas' },
    { key: 'preservasi', label: 'Perlu Preservasi Kimia Tambahan' }
  ]
  return (
    <SectionShell
      accent="bg-secondary-container"
      number="2"
      numberTone="bg-secondary-container/40 text-on-secondary-container"
      title="Spesifikasi & Fisik Matriks Sampel"
      desc="Integritas wadah, temperatur, dan metadata pengambilan"
      badge={
        <span className="rounded bg-surface-container-high px-space-sm py-1 font-label-sm text-label-sm font-semibold text-on-surface-variant">
          Belum diverifikasi
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
        <div className="md:col-span-2">
          <Field label="Deskripsi / Nama Sampel Lapangan *">
            <TextInput value={form.sampleName} placeholder="Contoh: Air Limbah Outlet IPAL Batch 1" onChange={(e) => onChange('sampleName', e.target.value)} />
          </Field>
        </div>
        <Field label="Kategori Matriks">
          <div className="relative">
            <select value={form.matrix} onChange={(e) => onChange('matrix', e.target.value)} className="h-9 w-full cursor-pointer appearance-none rounded-lg bg-surface-container-low px-space-md pr-8 shadow-inner focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="">— Pilih matriks —</option>
              {MATRIX_OPTIONS.map((m) => (<option key={m} value={m}>{m}</option>))}
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">expand_more</span>
          </div>
        </Field>
        <Field label="Volume / Bobot Netto">
          <div className="flex overflow-hidden rounded-lg bg-surface-container-low shadow-inner">
            <input value={form.volume} placeholder="Contoh: 500" onChange={(e) => onChange('volume', e.target.value)} className="h-9 w-full bg-transparent px-space-md focus:outline-none" />
            <div className="flex items-center bg-surface-container-high px-space-md text-[12px]">mL</div>
          </div>
        </Field>
        <Field label="Wadah & Tutup Pengaman">
          <TextInput value={form.container} placeholder="Contoh: Botol kaca + segel" onChange={(e) => onChange('container', e.target.value)} />
        </Field>
        <Field label="Suhu Saat Diterima">
          <div className="flex overflow-hidden rounded-lg bg-surface-container-low shadow-inner">
            <input value={form.temp} placeholder="Contoh: 4.0" onChange={(e) => onChange('temp', e.target.value)} className="h-9 w-full bg-transparent px-space-md focus:outline-none" />
            <div className="flex items-center bg-surface-container-high px-space-md text-[12px] font-semibold text-primary">C (Cold)</div>
          </div>
        </Field>
        <div className="flex flex-col gap-1.5 pt-1 md:col-span-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Checklist Integritas Fisik</span>
          <div className="flex flex-wrap gap-space-sm pt-1">
            {chips.map((c) => (
              <label key={c.key} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-secondary-fixed/40 px-space-md py-1.5 text-[12px]">
                <input type="checkbox" checked={!!checks[c.key]} onChange={(e) => onCheck(c.key, e.target.checked)} className="rounded text-primary focus:ring-0" />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="pt-space-xs md:col-span-3">
          <div className="grid grid-cols-1 gap-space-md rounded-lg bg-surface-container-low p-space-md md:grid-cols-2">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[22px] text-primary">event_available</span>
              <div>
                <span className="block text-[10px] uppercase text-on-surface-variant">Waktu Pengambilan</span>
                <span className="font-semibold">— diisi admin —</span>
                <span className="block text-[12px] text-on-surface-variant">Lokasi pengambilan belum diisi</span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm md:border-l md:border-surface-container md:pl-space-md">
              <span className="material-symbols-outlined text-[22px] text-surface-tint">login</span>
              <div>
                <span className="block text-[10px] uppercase text-on-surface-variant">Diterima Lab</span>
                <span className="font-semibold">Otomatis saat konfirmasi</span>
                <span className="block text-[12px] text-on-surface-variant">Timestamp dicatat sistem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
