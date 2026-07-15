import React, { useState } from 'react'
import Table from '../components/Table.jsx'
import { users as initialUsers, recentActivity } from '../data/mockData.js'
import { useToast } from '../context/ToastContext.jsx'
import { Mail, ShieldCheck, Clock } from 'lucide-react'

export default function Users() {
  const [users, setUsers] = useState(initialUsers)
  const { showToast } = useToast()

  const handleEdit = (user) => showToast(`Editing ${user.name}`, 'default')
  const handleDelete = (user) => {
    setUsers((u) => u.filter((x) => x.id !== user.id))
    showToast(`${user.name} was removed`, 'error')
  }

  return (
    <div className="fade-in">
      <h1 className="display" style={{ fontSize: 22, marginBottom: 20 }}>User Management</h1>

      <div className="grid grid-3" style={{ marginBottom: 24, alignItems: 'start' }}>
        <div className="card">
          <h3 className="section-title">All Users</h3>
          <Table users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div className="avatar" style={{ width: 72, height: 72, fontSize: 24, margin: '0 auto 14px' }}>SK</div>
          <h3 style={{ margin: '0 0 2px' }}>Sarah Khan</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
            <Mail size={13} /> sarah.khan@pulsemail.com
          </p>
          <span className="status-pill active" style={{ marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <ShieldCheck size={13} /> Active Account
          </span>

          <h4 style={{ fontSize: 13.5, textAlign: 'left', color: 'var(--text-muted)', margin: '10px 0' }}>Recent Activity</h4>
          <div style={{ textAlign: 'left' }}>
            {recentActivity.map((a) => (
              <div key={a.id} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '9px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <Clock size={14} color="var(--text-muted)" />
                <div>
                  <div>{a.text}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 11.5 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
