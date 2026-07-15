import React, { useMemo, useState } from 'react'
import { Search, Pencil, Trash2, Download, Plus } from 'lucide-react'
import { useToast } from '../context/ToastContext.jsx'

const PAGE_SIZE = 6

export default function Table({ users, onEdit, onDelete }) {
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [page, setPage] = useState(1)
  const { showToast } = useToast()

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchesQuery = u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase())
      const matchesRole = roleFilter === 'all' || u.role === roleFilter
      const matchesStatus = statusFilter === 'all' || u.status === statusFilter
      return matchesQuery && matchesRole && matchesStatus
    })
  }, [users, query, roleFilter, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const exportCSV = () => {
    const header = 'Name,Email,Role,Status\n'
    const rows = filtered.map((u) => `${u.name},${u.email},${u.role},${u.status}`).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'users.csv'
    a.click()
    URL.revokeObjectURL(url)
    showToast('Exported user table as CSV', 'success')
  }

  return (
    <div>
      <div className="table-toolbar">
        <div className="toolbar-search">
          <Search size={15} />
          <input
            placeholder="Search users..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <select className="filter-select" value={roleFilter} onChange={(e) => { setRoleFilter(e.target.value); setPage(1) }}>
            <option value="all">All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
            <option>Manager</option>
          </select>
          <select className="filter-select" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="btn-secondary" onClick={exportCSV}>
            <Download size={15} /> Export
          </button>
          <button className="btn-primary" onClick={() => showToast('Add-user form would open here', 'default')}>
            <Plus size={15} /> Add User
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((u) => (
              <tr key={u.id}>
                <td>
                  <div className="table-avatar">
                    <div className="avatar" style={{ width: 30, height: 30, fontSize: 11 }}>{u.initials}</div>
                    {u.name}
                  </div>
                </td>
                <td style={{ color: 'var(--text-muted)' }}>{u.email}</td>
                <td>{u.role}</td>
                <td><span className={`status-pill ${u.status}`}>{u.status}</span></td>
                <td>
                  <button className="action-btn" onClick={() => onEdit?.(u)}><Pencil size={14} /></button>
                  <button className="action-btn danger" onClick={() => onDelete?.(u)}><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
            {pageData.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 30 }}>No users match your search.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} className={`page-btn ${page === i + 1 ? 'active' : ''}`} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button className="page-btn" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  )
}
