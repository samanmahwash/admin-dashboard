import React from 'react'

const messages = [
  { name: 'Amelia Carter', preview: 'Thanks for the quick response on my order!', time: '10m' },
  { name: 'Noah Bennett', preview: 'Can I get an update on shipment #1041?', time: '1h' },
  { name: 'Sofia Ramirez', preview: 'Loved the new product line, will order more.', time: '3h' },
  { name: 'Liam Johnson', preview: 'Requesting a refund for a damaged item.', time: '1d' },
]

export default function Messages() {
  return (
    <div className="fade-in">
      <h1 className="display" style={{ fontSize: 22, marginBottom: 20 }}>Messages</h1>
      <div className="card" style={{ maxWidth: 640, padding: 8 }}>
        {messages.map((m) => (
          <div key={m.name} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14, borderBottom: '1px solid var(--border)' }}>
            <div className="avatar">{m.name.split(' ').map((n) => n[0]).join('')}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{m.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {m.preview}
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
