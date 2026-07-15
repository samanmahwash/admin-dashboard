import React, { useState } from 'react'
import { Menu, Search, Bell, MessageCircle, ChevronDown } from 'lucide-react'
import ToggleTheme from './ToggleTheme.jsx'

export default function Navbar({ onHamburgerClick }) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={onHamburgerClick}>
          <Menu size={20} />
        </button>
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Search anything..." />
        </div>
      </div>

      <div className="navbar-right">
        <ToggleTheme />
        <button className="icon-btn">
          <MessageCircle size={18} />
          <span className="badge-dot" />
        </button>
        <button className="icon-btn">
          <Bell size={18} />
          <span className="badge-dot" />
        </button>

        <div style={{ position: 'relative' }}>
          <button className="profile-btn" onClick={() => setProfileOpen((o) => !o)}>
            <div className="avatar">SK</div>
            <div className="profile-meta">
              <strong>Sarah Khan</strong>
              <span>Administrator</span>
            </div>
            <ChevronDown size={15} />
          </button>
          {profileOpen && (
            <div
              className="card fade-in"
              style={{ position: 'absolute', right: 0, top: 52, width: 200, padding: 10, zIndex: 50 }}
            >
              {['My Profile', 'Account Settings', 'Billing', 'Logout'].map((item) => (
                <div
                  key={item}
                  style={{ padding: '9px 10px', borderRadius: 10, fontSize: 13.5, fontWeight: 500, cursor: 'pointer' }}
                  className="nav-item"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
