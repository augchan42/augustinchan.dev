// Theme type definitions for the design system

export type ThemeName = 'default' | 'tech-noir' | 'minitel-cyan' | 'ntt-orange' | 'cad-amber' | 'cyan-wireframe' | 'editorial' | 'academic' | 'retro'

export interface Theme {
  name: ThemeName
  displayName: string

  // Colors
  colors: {
    background: string
    backgroundSurface: string
    backgroundAccent: string

    text: {
      primary: string
      secondary: string
      muted: string
      accent: string
    }

    border: {
      default: string
      strong: string
      accent: string
    }

    button: {
      primary: {
        bg: string
        text: string
        border: string
      }
      secondary: {
        bg: string
        text: string
        border: string
      }
    }

    code: {
      bg: string
      text: string
      border: string
    }

    tag: {
      bg: string
      text: string
    }
  }

  // Typography
  typography: {
    fontFamily: {
      base: string
      heading: string
      code: string
    }

    fontSize: {
      base: string
      large: string
      small: string
    }

    lineHeight: {
      base: string
      tight: string
      loose: string
    }
  }

  // Spacing
  spacing: {
    containerMaxWidth: string
    containerPadding: string
    sectionGap: string
    cardGap: string
  }

  // Visual Effects
  effects: {
    borderRadius: string
    shadow: string
    transition: string

    // Theme-specific effects
    customEffects?: {
      [key: string]: string
    }
  }

  // Optional theme-specific CSS
  customCSS?: string
}
