import { supabase, supabaseConfigured } from '../lib/supabase'

function needDb() {
  if (!supabaseConfigured) {
    throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di .env lalu restart vite.')
  }
}

export async function fetchSamples(limit = 50) {
  needDb()
  const { data, error } = await supabase
    .from('samples_overview')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data || []
}

export async function createSample({ form, checks, items }) {
  needDb()
  const volume = form.volume === '' ? null : Number(String(form.volume).replace(',', '.'))
  const temp = form.temp === '' ? null : Number(String(form.temp).replace(',', '.'))
  const subtotal = items.reduce((a, b) => a + (b.price || 0), 0)
  const accredited = items.filter((p) => p.accredited).length

  const { data: sample, error } = await supabase
    .from('samples')
    .insert({
      company: form.company,
      contract_no: form.contract,
      contact_person: form.contact,
      coa_email: form.email,
      sample_name: form.sampleName,
      matrix_category: form.matrix,
      volume: Number.isFinite(volume) ? volume : null,
      volume_unit: 'mL',
      container: form.container,
      temp_celsius: Number.isFinite(temp) ? temp : null,
      check_seal: !!checks.seal,
      check_cold_chain: !!checks.coldChain,
      check_label: !!checks.label,
      check_preservasi: !!checks.preservasi,
      sampled_at: new Date('2025-10-24T08:30:00+07:00').toISOString(),
      sampling_location: 'Main Tank B4 - Bandung Plant',
      subtotal_idr: subtotal,
      param_count: items.length,
      accredited_count: accredited,
      status: 'registered'
    })
    .select('*')
    .single()
  if (error) throw error

  if (items.length > 0) {
    const { error: relErr } = await supabase.from('sample_parameters').insert(
      items.map((p) => ({
        sample_id: sample.id,
        parameter_id: p.id,
        price_snapshot_idr: p.price
      }))
    )
    if (relErr) throw relErr
  }

  const now = new Date()
  const at = (h, m) => {
    const d = new Date(now)
    d.setHours(h, m, 0, 0)
    return d.toISOString()
  }
  const { error: cocErr } = await supabase.from('coc_events').insert([
    { sample_id: sample.id, step_no: 1, title: 'Diterima oleh Petugas Penerimaan', holder: 'Budi Santoso (Staff Sample Reception)', detail: 'Kondisi diterima, segel terverifikasi', event_at: at(10, 15) },
    { sample_id: sample.id, step_no: 2, title: 'Penyimpanan Sementara (Cold Buffer)', holder: 'Cool Storage Rack B (Compartment #03)', detail: 'Sensor IoT log konstan', location: 'COLD STORAGE A-03', event_at: at(10, 45) },
    { sample_id: sample.id, step_no: 3, title: 'Serah Terima ke Analis Kimia Instrumen', holder: 'Dr. Anjali Sharma, M.Sc', detail: 'Aktif', location: 'Lab Spektroskopi & Kromatografi Gedung B', event_at: at(11, 30) }
  ])
  if (cocErr) throw cocErr

  return sample
}
