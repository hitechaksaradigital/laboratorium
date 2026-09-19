import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'

const PATH_TO_NAV = {
  '/': 'dashboard-and-lab-ops',
  '/registrasi-sampel': 'registrasi-and-rantai-sampel'
}

const NAV_TO_PATH = {
  'dashboard-and-lab-ops': '/',
  'registrasi-and-rantai-sampel': '/registrasi-sampel',
  'validasi-and-sertifikat-lhu-coa': '/',
  'portal-pelanggan-eksternal': '/',
  'inventaris-reagen-and-alat-lab': '/',
  'tagihan-and-billing': '/',
  'audit-trail-and-settings': '/'
}

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const p = (n) => String(n).padStart(2, '0')
  return `UTC+7 ${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`
}

export default function AppLayout() {
  const clock = useClock()
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const activePath = PATH_TO_NAV[location.pathname] || 'dashboard-and-lab-ops'

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface">
      <Sidebar
        activePath={activePath}
        clock={clock}
        onNavigate={(navPath) => navigate(NAV_TO_PATH[navPath] || '/')}
      />
      <div className="lg:pl-72">
        <Header query={query} onQuery={setQuery} />
        <Outlet context={{ query }} />
      </div>
    </div>
  )
}
