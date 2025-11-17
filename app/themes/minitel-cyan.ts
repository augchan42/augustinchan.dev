import { Theme } from './types'

export const minitelCyanTheme: Theme = {
  name: 'minitel-cyan',
  displayName: 'Minitel Cyan',

  colors: {
    background: '#0a1628',
    backgroundSurface: '#0f1d35',
    backgroundAccent: '#1a2942',

    text: {
      primary: '#5dade2',
      secondary: '#7ec8ed',
      muted: '#4a8ab8',
      accent: '#85d4f7',
    },

    border: {
      default: '#5dade2',
      strong: '#5dade2',
      accent: '#85d4f7',
    },

    button: {
      primary: {
        bg: '#5dade2',
        text: '#0a1628',
        border: '#5dade2',
      },
      secondary: {
        bg: 'transparent',
        text: '#5dade2',
        border: '#5dade2',
      },
    },

    code: {
      bg: '#f0f0f0',
      text: '#000000',
      border: '#333333',
    },

    tag: {
      bg: 'rgba(93, 173, 226, 0.15)',
      text: '#5dade2',
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
    shadow: '0 0 10px rgba(93, 173, 226, 0.3)',
    transition: 'all 0.15s ease-out',

    customEffects: {
      textShadow: '0 0 5px rgba(93, 173, 226, 0.5)',
      glowStrong: '0 0 20px rgba(93, 173, 226, 0.6), 0 0 40px rgba(93, 173, 226, 0.3)',
      scanLine: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
    },
  },

  customCSS: `
    /* Minitel-inspired scanlines */
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

    @keyframes cyan-glow {
      0%, 100% {
        text-shadow: 0 0 5px rgba(93, 173, 226, 0.5),
                     0 0 10px rgba(93, 173, 226, 0.3);
      }
      50% {
        text-shadow: 0 0 10px rgba(93, 173, 226, 0.8),
                     0 0 20px rgba(93, 173, 226, 0.5),
                     0 0 30px rgba(93, 173, 226, 0.3);
      }
    }
  `,
}
