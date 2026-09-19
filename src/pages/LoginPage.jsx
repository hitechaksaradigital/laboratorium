import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AuthError, AuthField, AuthShell } from '../components/auth/AuthShell'

export default function LoginPage() {
  const { user, loading, dbReady, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (!loading && user) {
    return <Navigate to={location.state?.from || '/'} replace />
  }

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password) {
      setError('Email dan kata sandi wajib diisi.')
      return
    }
    setBusy(true)
    try {
      await signIn(email.trim(), password)
      navigate(location.state?.from || '/', { replace: true })
    } catch (err) {
      setError(err.message || 'Gagal masuk. Periksa email & kata sandi.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <AuthShell
      badge="Modul Auth • Supabase"
      title="Masuk ke Synthesis LIMS"
      subtitle="Gunakan akun lab Anda untuk mengakses dashboard & registrasi sampel."
      footer={<>Belum punya akun? <Link className="font-semibold text-primary hover:underline" to="/register">Daftar akun lab</Link></>}
    >
      {!dbReady && (
        <div className="mb-4 rounded-lg bg-surface-container-low px-3 py-2.5 text-[13px] text-on-surface-variant">
          Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY di .env lalu restart dev server.
        </div>
      )}
      <form onSubmit={submit} className="flex flex-col gap-4">
        <AuthField label="Email" icon="mail" type="email" autoComplete="email" placeholder="nama@lab.co.id" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="relative">
          <AuthField label="Kata Sandi" icon="lock" type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-[30px] text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[18px]">{show ? 'visibility_off' : 'visibility'}</span>
          </button>
        </div>
        <AuthError message={error} />
        <button disabled={busy} className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary text-[14px] font-semibold text-on-primary shadow-md transition-all hover:bg-primary-container disabled:opacity-60" type="submit">
          <span className="material-symbols-outlined text-[18px]">login</span>
          {busy ? 'Memeriksa...' : 'Masuk Dashboard'}
        </button>
      </form>
    </AuthShell>
  )
}
