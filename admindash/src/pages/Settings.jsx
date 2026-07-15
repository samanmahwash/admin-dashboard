import React, { useState } from 'react'
import ToggleTheme from '../components/ToggleTheme.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

const tabs = ['Profile', 'Password', 'Notifications', 'Theme']

export default function Settings() {
  const [active, setActive] = useState('Profile')
  const { theme, toggleTheme } = useTheme()
  const { showToast } = useToast()
  const [toggles, setToggles] = useState({ email: true, push: false, sms: false, marketing: true })

  const flip = (key) => setToggles((t) => ({ ...t, [key]: !t[key] }))
  const save = () => showToast('Settings saved successfully', 'success')

  return (
    <div className="fade-in">
      <h1 className="display" style={{ fontSize: 22, marginBottom: 20 }}>Settings</h1>

      <div className="card" style={{ maxWidth: 640 }}>
        <div className="settings-tabs">
          {tabs.map((t) => (
            <button key={t} className={`settings-tab ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>
              {t}
            </button>
          ))}
        </div>

        {active === 'Profile' && (
          <div>
            <div className="form-row">
              <label>Full Name</label>
              <input defaultValue="Sarah Khan" />
            </div>
            <div className="form-row">
              <label>Email Address</label>
              <input defaultValue="sarah.khan@pulsemail.com" />
            </div>
            <div className="form-row">
              <label>Role</label>
              <select defaultValue="Admin">
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            <button className="btn-primary" onClick={save}>Save Changes</button>
          </div>
        )}

        {active === 'Password' && (
          <div>
            <div className="form-row">
              <label>Current Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="form-row">
              <label>New Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="form-row">
              <label>Confirm New Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <button className="btn-primary" onClick={save}>Update Password</button>
          </div>
        )}

        {active === 'Notifications' && (
          <div>
            <div className="switch-row">
              <div>
                <div className="switch-title">Email Notifications</div>
                <div className="switch-desc">Get updates about your account activity</div>
              </div>
              <div className={`switch ${toggles.email ? 'on' : ''}`} onClick={() => flip('email')}>
                <div className="switch-knob" />
              </div>
            </div>
            <div className="switch-row">
              <div>
                <div className="switch-title">Push Notifications</div>
                <div className="switch-desc">Receive alerts on your device</div>
              </div>
              <div className={`switch ${toggles.push ? 'on' : ''}`} onClick={() => flip('push')}>
                <div className="switch-knob" />
              </div>
            </div>
            <div className="switch-row">
              <div>
                <div className="switch-title">SMS Alerts</div>
                <div className="switch-desc">Get text messages for urgent updates</div>
              </div>
              <div className={`switch ${toggles.sms ? 'on' : ''}`} onClick={() => flip('sms')}>
                <div className="switch-knob" />
              </div>
            </div>
            <div className="switch-row">
              <div>
                <div className="switch-title">Marketing Emails</div>
                <div className="switch-desc">Product news and promotions</div>
              </div>
              <div className={`switch ${toggles.marketing ? 'on' : ''}`} onClick={() => flip('marketing')}>
                <div className="switch-knob" />
              </div>
            </div>
            <button className="btn-primary" style={{ marginTop: 16 }} onClick={save}>Save Preferences</button>
          </div>
        )}

        {active === 'Theme' && (
          <div>
            <div className="switch-row">
              <div>
                <div className="switch-title">Dark Mode</div>
                <div className="switch-desc">Currently using {theme} mode</div>
              </div>
              <div className={`switch ${theme === 'dark' ? 'on' : ''}`} onClick={toggleTheme}>
                <div className="switch-knob" />
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 14 }}>
              Your preference is saved automatically and remembered next time you visit.
            </p>
            <ToggleTheme />
          </div>
        )}
      </div>
    </div>
  )
}
