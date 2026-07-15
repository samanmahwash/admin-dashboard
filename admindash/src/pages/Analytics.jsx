import React from 'react'
import { RevenueChart, UserGrowthChart, SalesPieChart } from '../components/Chart.jsx'
import { revenueData, userGrowthData, salesDistribution } from '../data/mockData.js'

export default function Analytics() {
  return (
    <div className="fade-in">
      <h1 className="display" style={{ fontSize: 22, marginBottom: 20 }}>Analytics</h1>
      <div className="grid grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <h3 className="section-title">Revenue Trend</h3>
          <RevenueChart data={revenueData} />
        </div>
        <div className="card">
          <h3 className="section-title">User Growth</h3>
          <UserGrowthChart data={userGrowthData} />
        </div>
      </div>
      <div className="card" style={{ maxWidth: 480 }}>
        <h3 className="section-title">Sales by Category</h3>
        <SalesPieChart data={salesDistribution} />
      </div>
    </div>
  )
}
