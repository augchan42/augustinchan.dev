import { Theme } from './types'

export const cyanWireframeTheme: Theme = {
  name: 'cyan-wireframe',
  displayName: 'Cyan Wireframe',

  colors: {
    background: '#0a0f14',
    backgroundSurface: '#111a21',
    backgroundAccent: '#1a2730',

    text: {
      primary: '#00ced1',
      secondary: '#40e0d0',
      muted: '#008b8b',
      accent: '#7fffd4',
    },

    border: {
      default: '#00ced1',
      strong: '#00ced1',
      accent: '#7fffd4',
    },

    button: {
      primary: {
        bg: '#00ced1',
        text: '#0a0f14',
        border: '#00ced1',
      },
      secondary: {
        bg: 'transparent',
        text: '#00ced1',
        border: '#00ced1',
      },
    },

    code: {
      bg: '#f0f0f0',
      text: '#000000',
      border: '#333333',
    },

    tag: {
      bg: 'rgba(0, 206, 209, 0.15)',
      text: '#00ced1',
    },
  },

  typography: {
    fontFamily: {
      base: '"Courier New", "Consolas", monospace',
      heading: '"Courier New", "Consolas", monospace',
      code: '"Courier New", monospace',
    },

    fontSize: {
      base: '18px',
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
    containerMaxWidth: '1200px',
    containerPadding: '1.5rem',
    sectionGap: '4rem',
    cardGap: '1.5rem',
  },

  effects: {
    borderRadius: '0px',
    shadow: '0 0 10px rgba(0, 206, 209, 0.3)',
    transition: 'all 0.15s ease-out',

    customEffects: {
      textShadow: '0 0 5px rgba(0, 206, 209, 0.5)',
      glowStrong: '0 0 20px rgba(0, 206, 209, 0.6), 0 0 40px rgba(0, 206, 209, 0.3)',
      scanLine: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
    },
  },

  customCSS: `
    /* Technical wireframe aesthetic */
    body::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      z-index: 1;
    }

    body > * {
      position: relative;
      z-index: 2;
    }

    pre, .hljs {
      background: #f0f0f0 !important;
      isolation: isolate;
    }

    code:not(pre code) {
      background: #f0f0f0 !important;
      isolation: isolate;
    }

    @keyframes cyan-pulse {
      0%, 100% {
        text-shadow: 0 0 5px rgba(0, 206, 209, 0.5),
                     0 0 10px rgba(0, 206, 209, 0.3);
      }
      50% {
        text-shadow: 0 0 10px rgba(0, 206, 209, 0.8),
                     0 0 20px rgba(0, 206, 209, 0.5),
                     0 0 30px rgba(0, 206, 209, 0.3);
      }
    }
  `,
}
