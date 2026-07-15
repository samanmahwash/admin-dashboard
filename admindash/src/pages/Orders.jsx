import React from 'react'

const orders = [
  { id: '#ORD-1042', customer: 'Amelia Carter', total: '$128.00', status: 'active' },
  { id: '#ORD-1041', customer: 'Noah Bennett', total: '$64.50', status: 'pending' },
  { id: '#ORD-1040', customer: 'Sofia Ramirez', total: '$210.00', status: 'active' },
  { id: '#ORD-1039', customer: 'Liam Johnson', total: '$45.20', status: 'inactive' },
  { id: '#ORD-1038', customer: 'Ava Patel', total: '$88.00', status: 'active' },
]

export default function Orders() {
  return (
    <div className="fade-in">
      <h1 className="display" style={{ fontSize: 22, marginBottom: 20 }}>Orders</h1>
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Order ID</th><th>Customer</th><th>Total</th><th>Status</th></tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 600 }}>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.total}</td>
                  <td><span className={`status-pill ${o.status}`}>{o.status === 'active' ? 'Delivered' : o.status === 'pending' ? 'Processing' : 'Cancelled'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
