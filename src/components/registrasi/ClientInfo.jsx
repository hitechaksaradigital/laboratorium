import { Field, SectionShell, TextInput } from './fields'

export default function ClientInfo({ form, onChange }) {
  return (
    <SectionShell
      accent="bg-primary"
      number="1"
      numberTone="bg-primary/10 text-primary"
      title="Informasi Klien / Pengirim Sampel"
      desc="Data legalitas, kontak darurat, dan instruksi penyerahan LHU"
      badge={
        <span className="rounded bg-surface-container-high px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
          Doc: REG-CLI-02
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label="Nama Perusahaan / Instansi Pemohon" action="Pilih dari Master Rekanan">
            <TextInput icon="corporate_fare" value={form.company} onChange={(e) => onChange('company', e.target.value)} />
          </Field>
        </div>
        <Field label="Nomor Kontrak / Order Kerja">
          <TextInput icon="tag" value={form.contract} onChange={(e) => onChange('contract', e.target.value)} />
        </Field>
        <Field label="Narahubung Teknis (Contact Person)">
          <TextInput icon="badge" value={form.contact} onChange={(e) => onChange('contact', e.target.value)} />
        </Field>
        <div className="md:col-span-2">
          <Field label="Email Pengiriman Laporan Hasil Uji (LHU / CoA)">
            <TextInput icon="mail" type="email" value={form.email} onChange={(e) => onChange('email', e.target.value)} />
          </Field>
        </div>
      </div>
    </SectionShell>
  )
}
