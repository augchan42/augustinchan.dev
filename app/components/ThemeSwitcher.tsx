'use client'

import { useTheme } from './ThemeProvider'
import { getAllThemes } from '../themes'
import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const themes = getAllThemes()

  const currentTheme = themes.find(t => t.name === themeName)
  const isDarkTheme = themeName !== 'default'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 5px var(--color-text-accent),
                        0 0 10px var(--color-text-accent);
          }
          50% {
            box-shadow: 0 0 10px var(--color-text-accent),
                        0 0 20px var(--color-text-accent),
                        0 0 30px var(--color-text-accent);
          }
        }

        .theme-toggle {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 10001;
          font-family: var(--font-family-base);
        }

        .toggle-button {
          position: relative;
          padding: 0.5rem 1rem;
          background: var(--color-background-surface);
          border: 2px solid var(--color-border-strong);
          border-radius: var(--border-radius);
          color: var(--color-text-primary);
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .toggle-button:hover {
          transform: translateY(-1px);
          background: var(--color-background-accent);
        }

        .dark-theme .toggle-button {
          animation: glow-pulse 2s infinite;
          font-family: var(--font-family-code);
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-text-accent);
        }

        .dark-theme .status-indicator {
          animation: blink 1s infinite;
        }

        .theme-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          min-width: 200px;
          background: var(--color-background-surface);
          border: 2px solid var(--color-border-strong);
          border-radius: var(--border-radius);
          overflow: hidden;
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
          transition: all 0.2s ease;
          z-index: 10002;
        }

        .theme-menu.expanded {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .theme-option {
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border-default);
          color: var(--color-text-primary);
          cursor: pointer;
          font-size: 0.75rem;
          font-family: var(--font-family-base);
          text-align: left;
          width: 100%;
          transition: background 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .theme-option:last-child {
          border-bottom: none;
        }

        .theme-option:hover {
          background: var(--color-background-accent);
        }

        .theme-option.active {
          background: var(--color-button-primary-bg);
          color: var(--color-button-primary-text);
          font-weight: bold;
        }

        .theme-option-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .theme-label {
          font-size: 0.65rem;
          opacity: 0.7;
          font-family: var(--font-family-code);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .theme-toggle {
            top: 1rem;
            right: 1rem;
          }

          .toggle-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.7rem;
          }
        }
      `}</style>

      <div className={`theme-toggle ${isDarkTheme ? 'dark-theme' : ''}`}>
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
          title="Change theme"
        >
          <span className="status-indicator" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem' }}>
            <span className="theme-label">THEME</span>
            <span>{isDarkTheme ? `> ${currentTheme?.displayName.toUpperCase().replace(/ /g, '_')}` : 'Classic'}</span>
          </div>
        </button>

        <div className={`theme-menu ${isExpanded ? 'expanded' : ''}`}>
          {themes.map((theme) => (
            <button
              key={theme.name}
              className={`theme-option ${themeName === theme.name ? 'active' : ''}`}
              onClick={() => {
                setTheme(theme.name)
                setIsExpanded(false)
              }}
            >
              <span className="theme-option-indicator" />
              <span>{theme.displayName}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
