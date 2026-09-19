import { formatIDR } from '../../data/registrasi'

function statusTone(status) {
  if (status === 'oos') return 'bg-error text-on-error'
  if (status === 'verification') return 'bg-primary-fixed text-on-primary-fixed'
  if (status === 'approved') return 'bg-surface-container text-primary'
  if (status === 'draft') return 'bg-surface-container-high text-on-surface-variant'
  if (status === 'in_testing') return 'bg-secondary-fixed text-on-secondary-fixed'
  return 'bg-secondary-fixed/50 text-on-secondary-fixed'
}

export default function SampleHistory({ rows, loading, error, onReload, dbReady }) {
  return (
    <section className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 p-space-lg">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Data Sampel Tersimpan</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {dbReady ? 'Live dari Supabase (samples_overview)' : 'Isi .env Supabase untuk mengaktifkan database'}
          </p>
        </div>
        <button onClick={onReload} className="flex h-8 items-center gap-1 rounded-lg bg-surface-container-low px-3 text-[13px] hover:bg-surface-container" type="button">
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          <span>Muat Ulang</span>
        </button>
      </div>
      {!dbReady && (
        <div className="mx-space-lg mb-space-md rounded-lg bg-surface-container-low p-space-md text-[13px] text-on-surface-variant">
          VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY kosong. Form tetap bisa diisi, tetapi simpan &amp; daftar nonaktif sampai .env diisi dan dev server di-restart.
        </div>
      )}
      {error && (
        <div className="mx-space-lg mb-space-md rounded-lg bg-error-container p-space-md text-[13px] text-on-error-container">
          Gagal memuat: {error}
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-container-low text-[10px] uppercase text-on-surface-variant">
              <th className="px-space-lg py-space-sm">Kode</th>
              <th className="px-space-md py-space-sm">Sampel / Perusahaan</th>
              <th className="px-space-md py-space-sm">Matriks</th>
              <th className="px-space-md py-space-sm">Parameter</th>
              <th className="px-space-md py-space-sm text-right">Subtotal</th>
              <th className="px-space-md py-space-sm">Status</th>
              <th className="px-space-lg py-space-sm">Dibuat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-surface-container-low/60">
                <td className="whitespace-nowrap px-space-lg py-space-sm font-mono font-bold text-primary">{r.sample_code}</td>
                <td className="px-space-md py-space-sm">
                  <div className="font-semibold">{r.sample_name}</div>
                  <div className="text-[12px] text-on-surface-variant">{r.company}</div>
                </td>
                <td className="whitespace-nowrap px-space-md py-space-sm">{r.matrix_category || '-'}</td>
                <td className="px-space-md py-space-sm text-[12px]">
                  {r.param_count} (KAN: {r.accredited_count})
                </td>
                <td className="whitespace-nowrap px-space-md py-space-sm text-right font-mono">{formatIDR(r.subtotal_idr || 0)}</td>
                <td className="whitespace-nowrap px-space-md py-space-sm">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${statusTone(r.status)}`}>{r.status}</span>
                </td>
                <td className="whitespace-nowrap px-space-lg py-space-sm text-[12px] text-on-surface-variant">
                  {r.created_at ? new Date(r.created_at).toLocaleString('id-ID') : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && rows.length === 0 && dbReady && (
          <div className="px-space-lg py-8 text-center text-[13px] text-on-surface-variant">
            Belum ada data. Isi form lalu klik Konfirmasi &amp; Terbitkan ID Unik.
          </div>
        )}
        {loading && (
          <div className="px-space-lg py-8 text-center text-[13px] text-on-surface-variant">Memuat data...</div>
        )}
      </div>
    </section>
  )
}
