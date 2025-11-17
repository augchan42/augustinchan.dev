'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Theme, ThemeName, getTheme, themeToCSSVariables } from '../themes'

interface ThemeContextType {
  theme: Theme
  themeName: ThemeName
  setTheme: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: ThemeName
}

export function ThemeProvider({ children, defaultTheme = 'default' }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme)
  const [theme, setThemeState] = useState<Theme>(getTheme(defaultTheme))

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeName
    if (savedTheme && (savedTheme === 'default' || savedTheme === 'tech-noir')) {
      setThemeName(savedTheme)
      setThemeState(getTheme(savedTheme))
    }
  }, [])

  // Update CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement
    const cssVars = themeToCSSVariables(theme)

    // Apply CSS variables
    const lines = cssVars.split('\n')
    lines.forEach(line => {
      const match = line.match(/--([^:]+):\s*([^;]+);?/)
      if (match) {
        const [, prop, value] = match
        root.style.setProperty(`--${prop}`, value.trim())
      }
    })

    // Apply custom CSS if present
    let styleEl = document.getElementById('theme-custom-css')
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = 'theme-custom-css'
      document.head.appendChild(styleEl)
    }
    styleEl.textContent = theme.customCSS || ''

    // Save to localStorage
    localStorage.setItem('theme', themeName)
  }, [theme, themeName])

  const handleSetTheme = (name: ThemeName) => {
    setThemeName(name)
    setThemeState(getTheme(name))
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
