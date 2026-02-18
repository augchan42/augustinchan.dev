import { Theme } from './types'

export const defaultTheme: Theme = {
  name: 'default',
  displayName: 'Classic Clean',

  colors: {
    background: '#d5cfc0',       // warm-brown
    backgroundSurface: '#ddd8ca', // warm-brown-light
    backgroundAccent: '#c9c2b1',  // warm-brown-dark

    text: {
      primary: '#1f1e1d',        // slate-dark
      secondary: '#5e5d59',      // slate-light
      muted: '#87867f',          // cloud-dark
      accent: '#3d3d3a',         // slate-medium
    },

    border: {
      default: '#d1cfc5',        // cloud-light
      strong: '#1f1e1d',         // slate-dark
      accent: '#3d3d3a',         // slate-medium
    },

    button: {
      primary: {
        bg: '#1f1e1d',           // slate-dark
        text: '#faf9f5',         // ivory-light
        border: '#1f1e1d',       // slate-dark
      },
      secondary: {
        bg: 'transparent',
        text: '#1f1e1d',         // slate-dark
        border: '#1f1e1d',       // slate-dark
      },
    },

    code: {
      bg: '#c9c2b1',             // ivory-dark
      text: '#1f1e1d',           // slate-dark
      border: '#d1cfc5',         // cloud-light
    },

    tag: {
      bg: '#c9c2b1',             // ivory-dark
      text: '#5e5d59',           // slate-light
    },
  },

  typography: {
    fontFamily: {
      base: '"MS Sans Serif", sans-serif',
      heading: '"MS Sans Serif", sans-serif',
      code: '"Courier New", monospace',
    },

    fontSize: {
      base: '20px',
      large: '1.1em',
      small: '0.85em',
    },

    lineHeight: {
      base: '1.6',
      tight: '1.4',
      loose: '1.8',
    },
  },

  spacing: {
    containerMaxWidth: '1000px',
    containerPadding: '1rem',
    sectionGap: '4rem',
    cardGap: '1.5rem',
  },

  effects: {
    borderRadius: '8px',
    shadow: 'none',
    transition: 'all 0.2s ease',
  },
}
