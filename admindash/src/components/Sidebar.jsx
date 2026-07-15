import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Users, Package, ShoppingBag, BarChart3,
  MessageSquare, Settings, LogOut, ChevronLeft, ChevronRight,
} from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/orders', label: 'Orders', icon: ShoppingBag },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/messages', label: 'Messages', icon: MessageSquare },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  return (
    <>
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-brand">
          <div className="brand-blob" />
          <div className="brand-mark">P</div>
          {!collapsed && (
            <div className="brand-text">
              Pulse
              <span>Analytics Dashboard</span>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={19} />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
          <button className="nav-item" style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left' }}>
            <LogOut size={19} />
            {!collapsed && <span>Logout</span>}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight size={17} /> : <><ChevronLeft size={17} /> Collapse</>}
          </button>
        </div>
      </aside>
      <div className={`sidebar-backdrop ${mobileOpen ? 'show' : ''}`} onClick={() => setMobileOpen(false)} />
    </>
  )
}
