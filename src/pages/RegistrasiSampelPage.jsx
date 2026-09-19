import { useCallback, useEffect, useMemo, useState } from 'react'
import IntakeHero from '../components/registrasi/IntakeHero.jsx'
import ClientInfo from '../components/registrasi/ClientInfo.jsx'
import SampleSpec from '../components/registrasi/SampleSpec.jsx'
import ParameterTable from '../components/registrasi/ParameterTable.jsx'
import LabelPreview from '../components/registrasi/LabelPreview.jsx'
import CocTimeline from '../components/registrasi/CocTimeline.jsx'
import OpsMetrics from '../components/registrasi/OpsMetrics.jsx'
import HandoverModal from '../components/registrasi/HandoverModal.jsx'
import SampleHistory from '../components/registrasi/SampleHistory.jsx'
import { INTAKE_DEFAULTS, INTEGRITY_DEFAULTS, PARAMETERS } from '../data/registrasi.js'
import { supabaseConfigured } from '../lib/supabase.js'
import { createSample, fetchSamples } from '../lib/samples.js'

export default function RegistrasiSampelPage() {
  const [form, setForm] = useState(INTAKE_DEFAULTS)
  const [checks, setChecks] = useState(INTEGRITY_DEFAULTS)
  const [selected, setSelected] = useState(PARAMETERS.map((p) => p.id))
  const [handoverOpen, setHandoverOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState('')
  const [saving, setSaving] = useState(false)

  const onChange = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const onCheck = (k, v) => setChecks((c) => ({ ...c, [k]: v }))
  const onToggle = (id) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  const onToggleAll = (v) => setSelected(v ? PARAMETERS.map((p) => p.id) : [])

  const items = useMemo(
    () => PARAMETERS.filter((p) => selected.includes(p.id)),
    [selected]
  )
  const summary = useMemo(
    () => ({
      count: items.length,
      subtotal: items.reduce((a, b) => a + b.price, 0)
    }),
    [items]
  )

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 5000)
  }

  const load = useCallback(async () => {
    if (!supabaseConfigured) return
    setLoading(true)
    setLoadError('')
    try {
      setRows(await fetchSamples(50))
    } catch (e) {
      setLoadError(e.message || 'Gagal memuat data')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const handleConfirm = async () => {
    if (!form.company.trim() || !form.sampleName.trim()) {
      showToast('Lengkapi Nama Perusahaan dan Nama Sampel dulu.')
      return
    }
    if (items.length === 0) {
      showToast('Pilih minimal 1 parameter uji.')
      return
    }
    setSaving(true)
    try {
      const saved = await createSample({ form, checks, items })
      showToast(`Tersimpan: ${saved.sample_code} (${summary.count} parameter).`)
      await load()
    } catch (e) {
      showToast(e.message || 'Gagal menyimpan')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen w-full bg-surface px-gutter-desktop pb-space-xl pt-16">
      <div className="flex w-full flex-col pt-space-md">
        <IntakeHero
          saving={saving}
          onConfirm={handleConfirm}
          onDraft={() => showToast('Draft hanya tersimpan lokal di form ini (belum ke database).')}
          onPrint={() => window.print()}
        />
        <div className="grid grid-cols-1 items-start gap-space-lg xl:grid-cols-12">
          <div className="flex flex-col gap-space-lg xl:col-span-7">
            <ClientInfo form={form} onChange={onChange} />
            <SampleSpec form={form} checks={checks} onChange={onChange} onCheck={onCheck} />
            <ParameterTable items={PARAMETERS} selected={selected} onToggle={onToggle} onToggleAll={onToggleAll} />
            <SampleHistory rows={rows} loading={loading} error={loadError} onReload={load} dbReady={supabaseConfigured} />
          </div>
          <div className="flex flex-col gap-space-lg xl:col-span-5">
            <LabelPreview form={form} />
            <CocTimeline onHandover={() => setHandoverOpen(true)} />
            <OpsMetrics />
          </div>
        </div>
      </div>
      <HandoverModal
        open={handoverOpen}
        onClose={() => setHandoverOpen(false)}
        onSubmit={() => {
          setHandoverOpen(false)
          showToast(`Handover CoC dicatat (${summary.count} parameter).`)
        }}
      />
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-inverse-surface px-5 py-2.5 text-[13px] text-inverse-on-surface shadow-xl">
          {toast}
        </div>
      )}
    </main>
  )
}
