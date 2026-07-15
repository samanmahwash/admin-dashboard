import React from 'react'

export function CardSkeleton() {
  return (
    <div className="card" style={{ height: 128 }}>
      <div className="skeleton" style={{ width: 46, height: 46, borderRadius: 12, marginBottom: 14 }} />
      <div className="skeleton" style={{ width: '60%', height: 20, marginBottom: 8 }} />
      <div className="skeleton" style={{ width: '40%', height: 12 }} />
    </div>
  )
}

export function ChartSkeleton({ height = 280 }) {
  return <div className="skeleton" style={{ width: '100%', height }} />
}

export function TableSkeleton({ rows = 5 }) {
  return (
    <div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="skeleton" style={{ width: '100%', height: 44, marginBottom: 8 }} />
      ))}
    </div>
  )
}
