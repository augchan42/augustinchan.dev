import { Theme } from './types'

export const nttOrangeTheme: Theme = {
  name: 'ntt-orange',
  displayName: 'NTT Orange',

  colors: {
    background: '#1a3a3a',
    backgroundSurface: '#234545',
    backgroundAccent: '#2d5555',

    text: {
      primary: '#ff6b35',
      secondary: '#ff8555',
      muted: '#cc5528',
      accent: '#ffa070',
    },

    border: {
      default: '#ff6b35',
      strong: '#ff6b35',
      accent: '#ffa070',
    },

    button: {
      primary: {
        bg: '#ff6b35',
        text: '#1a3a3a',
        border: '#ff6b35',
      },
      secondary: {
        bg: 'transparent',
        text: '#ff6b35',
        border: '#ff6b35',
      },
    },

    code: {
      bg: '#f0f0f0',
      text: '#000000',
      border: '#333333',
    },

    tag: {
      bg: 'rgba(255, 107, 53, 0.15)',
      text: '#ff6b35',
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
    shadow: '0 0 10px rgba(255, 107, 53, 0.3)',
    transition: 'all 0.15s ease-out',

    customEffects: {
      textShadow: '0 0 5px rgba(255, 107, 53, 0.5)',
      glowStrong: '0 0 20px rgba(255, 107, 53, 0.6), 0 0 40px rgba(255, 107, 53, 0.3)',
      scanLine: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
    },
  },

  customCSS: `
    /* Warm orange glow effect */
    body::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.12),
        rgba(0, 0, 0, 0.12) 1px,
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

    @keyframes orange-pulse {
      0%, 100% {
        text-shadow: 0 0 5px rgba(255, 107, 53, 0.5),
                     0 0 10px rgba(255, 107, 53, 0.3);
      }
      50% {
        text-shadow: 0 0 10px rgba(255, 107, 53, 0.8),
                     0 0 20px rgba(255, 107, 53, 0.5),
                     0 0 30px rgba(255, 107, 53, 0.3);
      }
    }
  `,
}
