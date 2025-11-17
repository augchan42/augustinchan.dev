import { Theme } from './types'

export const techNoirTheme: Theme = {
  name: 'tech-noir',
  displayName: 'Tech Noir Brutalism',

  colors: {
    background: '#0a0a0a',
    backgroundSurface: '#111111',
    backgroundAccent: '#1a1a1a',

    text: {
      primary: '#00ff41',
      secondary: '#00cc33',
      muted: '#008822',
      accent: '#00ff41',
    },

    border: {
      default: '#00ff41',
      strong: '#00ff41',
      accent: '#00ff41',
    },

    button: {
      primary: {
        bg: '#00ff41',
        text: '#000',
        border: '#00ff41',
      },
      secondary: {
        bg: 'transparent',
        text: '#00ff41',
        border: '#00ff41',
      },
    },

    code: {
      bg: '#f0f0f0',
      text: '#000000',
      border: '#333333',
    },

    tag: {
      bg: 'rgba(0, 255, 65, 0.1)',
      text: '#00ff41',
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
    shadow: '0 0 10px rgba(0, 255, 65, 0.3)',
    transition: 'all 0.15s ease-out',

    customEffects: {
      textShadow: '0 0 5px rgba(0, 255, 65, 0.5)',
      glowStrong: '0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.3)',
      scanLine: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
    },
  },

  customCSS: `
    /* CRT scan line effect - low z-index so content sits above it */
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

    /* Ensure all content sits above scanlines */
    body > * {
      position: relative;
      z-index: 2;
    }

    /* Code blocks need opaque backgrounds to block scanlines */
    pre, .hljs {
      background: #f0f0f0 !important;
      isolation: isolate;
    }

    code:not(pre code) {
      background: #f0f0f0 !important;
      isolation: isolate;
    }

    /* Glitch animation for headings */
    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                    0.05em 0 0 rgba(0, 255, 0, 0.75),
                    0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                    0.05em 0 0 rgba(0, 255, 0, 0.75),
                    0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                    -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                    -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
    }

    /* Cursor blink */
    @keyframes blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }

    /* Neon pulse */
    @keyframes neon-pulse {
      0%, 100% {
        text-shadow: 0 0 5px rgba(0, 255, 65, 0.5),
                     0 0 10px rgba(0, 255, 65, 0.3);
      }
      50% {
        text-shadow: 0 0 10px rgba(0, 255, 65, 0.8),
                     0 0 20px rgba(0, 255, 65, 0.5),
                     0 0 30px rgba(0, 255, 65, 0.3);
      }
    }
  `,
}
