import React from 'react'
import * as Icons from 'lucide-react'
import { TrendingUp, Radio } from 'lucide-react'

export default function Card({ title, value, growth, trend, icon, color }) {
  const Icon = Icons[icon] || Icons.Circle
  return (
    <div className="card stat-card fade-in">
      <div className="stat-icon" style={{ background: color }}>
        <Icon size={22} />
      </div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-title">{title}</div>
      </div>
      <span className={`trend ${trend}`}>
        {trend === 'live' ? <Radio size={13} /> : <TrendingUp size={13} />}
        {growth}
      </span>
    </div>
  )
}
