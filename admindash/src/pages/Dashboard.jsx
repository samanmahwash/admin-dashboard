import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import { RevenueChart, UserGrowthChart, SalesPieChart } from '../components/Chart.jsx'
import { CardSkeleton, ChartSkeleton } from '../components/Skeleton.jsx'
import { statCards, revenueData, userGrowthData, salesDistribution } from '../data/mockData.js'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fade-in">
      <h1 className="display" style={{ fontSize: 22, marginBottom: 4 }}>Welcome back, Sarah 👋</h1>
      <p style={{ color: 'var(--text-muted)', marginTop: 0, marginBottom: 24, fontSize: 14 }}>
        Here's what's happening with your store today.
      </p>

      <div className="grid grid-4" style={{ marginBottom: 24 }}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
          : statCards.map((c) => <Card key={c.id} {...c} />)}
      </div>

      <div className="grid grid-3" style={{ marginBottom: 24 }}>
        <div className="card">
          <h3 className="section-title">Revenue Overview</h3>
          {loading ? <ChartSkeleton /> : <RevenueChart data={revenueData} />}
        </div>
        <div className="card">
          <h3 className="section-title">Sales Distribution</h3>
          {loading ? <ChartSkeleton height={260} /> : <SalesPieChart data={salesDistribution} />}
        </div>
      </div>

      <div className="card">
        <h3 className="section-title">New Users Per Month</h3>
        {loading ? <ChartSkeleton /> : <UserGrowthChart data={userGrowthData} />}
      </div>
    </div>
  )
}
