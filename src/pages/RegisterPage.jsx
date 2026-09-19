import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AuthError, AuthField, AuthShell } from '../components/auth/AuthShell'

export default function RegisterPage() {
  const { user, loading, dbReady, signUp } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [busy, setBusy] = useState(false)

  if (!loading && user) {
    return <Navigate to="/" replace />
  }

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setInfo('')
    if (!name.trim() || !email.trim() || !password || !confirm) {
      setError('Nama, email, kata sandi, dan konfirmasi wajib diisi.')
      return
    }
    if (password.length < 6) {
      setError('Kata sandi minimal 6 karakter.')
      return
    }
    if (password !== confirm) {
      setError('Konfirmasi kata sandi tidak sama.')
      return
    }
    setBusy(true)
    try {
      const data = await signUp({ name: name.trim(), email: email.trim(), password })
      if (data?.user && !data?.session) {
        setInfo('Pendaftaran berhasil. Cek email untuk verifikasi, lalu masuk.')
      } else {
        navigate('/', { replace: true })
      }
    } catch (err) {
      setError(err.message || 'Gagal mendaftar. Coba lagi.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <AuthShell
      badge="Akun Lab Baru"
      title="Daftar akun Synthesis LIMS"
      subtitle="Satu akun untuk intake sampel, CoC, dan validasi LHU/CoA."
      footer={<>Sudah punya akun? <Link className="font-semibold text-primary hover:underline" to="/login">Masuk di sini</Link></>}
    >
      {!dbReady && (
        <div className="mb-4 rounded-lg bg-surface-container-low px-3 py-2.5 text-[13px] text-on-surface-variant">
          Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY di .env lalu restart dev server.
        </div>
      )}
      <form onSubmit={submit} className="flex flex-col gap-4">
        <AuthField label="Nama Lengkap" icon="person" placeholder="Contoh: Andini Prameswari" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <AuthField label="Email" icon="mail" type="email" placeholder="nama@lab.co.id" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthField label="Kata Sandi (min 6)" icon="lock" type="password" autoComplete="new-password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          <AuthField label="Konfirmasi Sandi" icon="lock_reset" type="password" autoComplete="new-password" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        </div>
        <AuthError message={error} />
        {info && (
          <div className="rounded-lg bg-secondary-fixed/40 px-3 py-2.5 text-[13px] text-on-secondary-fixed">{info}</div>
        )}
        <button disabled={busy} className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary text-[14px] font-semibold text-on-primary shadow-md transition-all hover:bg-primary-container disabled:opacity-60" type="submit">
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          {busy ? 'Mendaftarkan...' : 'Buat Akun Lab'}
        </button>
        <p className="text-center text-[11px] text-on-surface-variant">
          Dengan mendaftar Anda menyetujui audit trail ISO 17025 &amp; 21 CFR Part 11.
        </p>
      </form>
    </AuthShell>
  )
}
