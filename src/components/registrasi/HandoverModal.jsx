import { useState } from 'react'
import { HANDOVER_RECIPIENTS } from '../../data/registrasi'

export default function HandoverModal({ open, onClose, onSubmit }) {
  const [recipient, setRecipient] = useState(HANDOVER_RECIPIENTS[0])
  const [reason, setReason] = useState('')
  const [pin, setPin] = useState('')
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 p-4 backdrop-blur-sm">
      <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-xl">
        <div className="flex items-center justify-between bg-surface-container-high p-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[24px] text-primary">verified_user</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm leading-tight text-on-surface">Otentikasi Handover CoC</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">ISO 17025 / 21 CFR Part 11 e-Signature</span>
            </div>
          </div>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-highest" type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-space-md p-space-lg">
          <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-space-sm">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Sampel Ditransfer:</span>
            <span className="font-mono font-semibold">— pilih dari daftar tersimpan —</span>
            <span className="text-[11px] text-on-surface-variant">Kode sampel terbit setelah admin konfirmasi</span>
          </div>
          <label className="flex flex-col gap-1.5 text-[10px] uppercase text-on-surface-variant">
            Penerima Berikutnya
            <select value={recipient} onChange={(e) => setRecipient(e.target.value)} className="h-9 rounded-lg bg-surface-container-low px-space-md text-[14px] normal-case text-on-surface shadow-inner focus:outline-none focus:ring-1 focus:ring-primary">
              {HANDOVER_RECIPIENTS.map((r) => (<option key={r}>{r}</option>))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[10px] uppercase text-on-surface-variant">
            Alasan Perpindahan
            <input value={reason} placeholder="Contoh: Preparasi & inokulasi uji ALT" onChange={(e) => setReason(e.target.value)} className="h-9 rounded-lg bg-surface-container-low px-space-md text-[14px] normal-case shadow-inner focus:outline-none focus:ring-1 focus:ring-primary" />
          </label>
          <label className="flex flex-col gap-1.5 text-[10px] uppercase text-on-surface-variant">
            PIN Otorisasi Analis (6-Digit)
            <input value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))} maxLength={6} placeholder="......" type="password" className="h-10 rounded-lg bg-surface-container-low px-space-md text-center font-mono text-[16px] tracking-[0.5em] shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>
        </div>
        <div className="flex items-center justify-end gap-space-sm bg-surface-container-low p-space-lg">
          <button onClick={onClose} className="h-9 rounded-lg bg-surface-container-lowest px-space-md shadow-sm" type="button">Batal</button>
          <button onClick={() => onSubmit?.({ recipient, reason, pin })} className="flex h-9 items-center gap-1 rounded-lg bg-primary px-space-lg text-on-primary shadow-md" type="button">
            <span className="material-symbols-outlined text-[18px]">key</span>
            <span>Tandatangani &amp; Serahkan</span>
          </button>
        </div>
      </div>
    </div>
  )
}
