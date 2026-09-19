import { useEffect, useMemo, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import PageHero from './components/PageHero.jsx'
import StatCards from './components/StatCards.jsx'
import TrendChart from './components/TrendChart.jsx'
import QcChart from './components/QcChart.jsx'
import SampleTable from './components/SampleTable.jsx'
import AuditBanner from './components/AuditBanner.jsx'
import { SAMPLES } from './data/dashboard.js'

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const p = (n) => String(n).padStart(2, '0')
  return `UTC+7 ${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`
}

export default function App() {
  const clock = useClock()
  const [activePath, setActivePath] = useState('dashboard-and-lab-ops')
  const [range, setRange] = useState('7 Hari')
  const [division, setDivision] = useState('all')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')

  const rows = useMemo(() => {
    const q = (query + ' ' + filter).trim().toLowerCase()
    if (!q) return SAMPLES
    return SAMPLES.filter((s) =>
      [s.id, s.matrix, s.client, s.division, s.analyst, s.status].join(' ').toLowerCase().includes(q)
    )
  }, [query, filter])

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface">
      <Sidebar activePath={activePath} onNavigate={setActivePath} clock={clock} />
      <div className="lg:pl-72">
        <Header query={query} onQuery={setQuery} />
        <main className="min-h-screen w-full bg-surface px-gutter-desktop pb-space-xl pt-16">
          <div className="flex w-full flex-col gap-space-lg pt-space-md">
            <PageHero range={range} onRange={setRange} division={division} onDivision={setDivision} />
            <StatCards />
            <div className="grid grid-cols-1 gap-space-md xl:grid-cols-12">
              <TrendChart />
              <QcChart />
            </div>
            <SampleTable rows={rows} filter={filter} onFilter={setFilter} />
            <AuditBanner />
          </div>
        </main>
      </div>
    </div>
  )
}
