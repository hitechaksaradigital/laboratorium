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
  const company = (form.company || '').trim()
  const sampleName = (form.sampleName || '').trim()
  if (!company || !sampleName) {
    throw new Error('Nama Perusahaan dan Nama Sampel wajib diisi admin.')
  }
  const volume = form.volume === '' ? null : Number(String(form.volume).replace(',', '.'))
  const temp = form.temp === '' ? null : Number(String(form.temp).replace(',', '.'))
  const subtotal = items.reduce((a, b) => a + (b.price || 0), 0)
  const accredited = items.filter((p) => p.accredited).length

  const { data: sample, error } = await supabase
    .from('samples')
    .insert({
      company,
      contract_no: (form.contract || '').trim() || null,
      contact_person: (form.contact || '').trim() || null,
      coa_email: (form.email || '').trim() || null,
      sample_name: sampleName,
      matrix_category: (form.matrix || '').trim() || null,
      volume: Number.isFinite(volume) ? volume : null,
      volume_unit: 'mL',
      container: (form.container || '').trim() || null,
      temp_celsius: Number.isFinite(temp) ? temp : null,
      check_seal: !!checks.seal,
      check_cold_chain: !!checks.coldChain,
      check_label: !!checks.label,
      check_preservasi: !!checks.preservasi,
      sampled_at: new Date().toISOString(),
      sampling_location: null,
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
  const { error: cocErr } = await supabase.from('coc_events').insert([
    { sample_id: sample.id, step_no: 1, title: 'Diterima oleh Petugas Penerimaan', holder: null, detail: 'Registrasi awal oleh admin', event_at: now.toISOString() }
  ])
  if (cocErr) throw cocErr

  return sample
}
