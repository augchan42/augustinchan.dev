'use client'

import { useCallback, useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { THEME_STORAGE_KEY } from '../app/theme'

type ThemeSetting = 'light' | 'dark'

function applyThemePreference(mode: ThemeSetting) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = mode
  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeSetting>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined'
      ? window.localStorage.getItem(THEME_STORAGE_KEY)
      : null
    if (stored === 'light' || stored === 'dark') {
      setMode(stored)
    } else {
      setMode('light')
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    applyThemePreference(mode)
  }, [mode, mounted])

  const handleToggle = useCallback(() => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        style={{
          padding: '0.5rem',
          border: 'none',
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          lineHeight: 1,
        }}
      >
        <Sun size={20} />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      style={{
        padding: '0.5rem',
        border: 'none',
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        lineHeight: 1,
        transition: 'transform 0.2s ease, opacity 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {mode === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
