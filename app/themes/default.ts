import { Theme } from './types'

export const defaultTheme: Theme = {
  name: 'default',
  displayName: 'Classic Clean',

  colors: {
    background: '#fffff8',
    backgroundSurface: '#fafafa',
    backgroundAccent: '#f0f0f0',

    text: {
      primary: '#000',
      secondary: '#555',
      muted: '#666',
      accent: '#2a623d',
    },

    border: {
      default: '#ddd',
      strong: '#333',
      accent: '#2a623d',
    },

    button: {
      primary: {
        bg: '#333',
        text: '#fff',
        border: '#333',
      },
      secondary: {
        bg: 'transparent',
        text: '#333',
        border: '#333',
      },
    },

    code: {
      bg: '#f0f0f0',
      text: '#000',
      border: '#ddd',
    },

    tag: {
      bg: '#e0e0e0',
      text: '#555',
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
