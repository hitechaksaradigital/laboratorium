import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import StatCards from '../components/StatCards.jsx'
import TrendChart from '../components/TrendChart.jsx'
import QcChart from '../components/QcChart.jsx'
import SampleTable from '../components/SampleTable.jsx'
import AuditBanner from '../components/AuditBanner.jsx'
import { SAMPLES } from '../data/dashboard.js'

export default function DashboardPage() {
  const { query } = useOutletContext()
  const [range, setRange] = useState('7 Hari')
  const [division, setDivision] = useState('all')
  const [filter, setFilter] = useState('')

  const rows = useMemo(() => {
    const q = (query + ' ' + filter).trim().toLowerCase()
    if (!q) return SAMPLES
    return SAMPLES.filter((s) =>
      [s.id, s.matrix, s.client, s.division, s.analyst, s.status].join(' ').toLowerCase().includes(q)
    )
  }, [query, filter])

  return (
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
  )
}
