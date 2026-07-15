import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className="icon-btn" onClick={toggleTheme} title="Toggle theme">
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
