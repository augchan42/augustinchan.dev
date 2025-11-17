import { Theme } from "./types";

export const cadAmberTheme: Theme = {
  name: "cad-amber",
  displayName: "CAD Amber",

  colors: {
    background: "#0a0a0a",
    backgroundSurface: "#1a1a1a",
    backgroundAccent: "#2a2a2a",

    text: {
      primary: "#ffb000",
      secondary: "#ffc640",
      muted: "#cc8c00",
      accent: "#ffd700",
    },

    border: {
      default: "#ffb000",
      strong: "#ffb000",
      accent: "#ffd700",
    },

    button: {
      primary: {
        bg: "#ffb000",
        text: "#0a0a0a",
        border: "#ffb000",
      },
      secondary: {
        bg: "transparent",
        text: "#ffb000",
        border: "#ffb000",
      },
    },

    code: {
      bg: "#1a1a1a",
      text: "#ffb000",
      border: "#ffb000",
    },

    tag: {
      bg: "rgba(255, 176, 0, 0.15)",
      text: "#ffb000",
    },
  },

  typography: {
    fontFamily: {
      // Options (uncomment to try):
      // base: '"VT323", monospace', // Authentic terminal font (Google Fonts)
      // base: '"IBM Plex Mono", monospace', // Professional technical
      base: '"Share Tech Mono", monospace', // Futuristic technical (Google Fonts)
      // base: '"OCR A Std", "OCR-A", monospace', // Classic engineering font
      // base: '"Courier New", "Consolas", monospace', // Current default
      heading: '"Courier New", "Consolas", monospace',
      code: '"Courier New", monospace',
    },

    fontSize: {
      base: "18px",
      large: "1.1em",
      small: "0.85em",
    },

    lineHeight: {
      base: "1.6",
      tight: "1.4",
      loose: "1.8",
    },
  },

  spacing: {
    containerMaxWidth: "1200px",
    containerPadding: "1.5rem",
    sectionGap: "4rem",
    cardGap: "1.5rem",
  },

  effects: {
    borderRadius: "0px",
    shadow: "0 0 10px rgba(255, 176, 0, 0.3)",
    transition: "all 0.15s ease-out",

    customEffects: {
      textShadow: "0 0 5px rgba(255, 176, 0, 0.5)",
      glowStrong:
        "0 0 20px rgba(255, 176, 0, 0.6), 0 0 40px rgba(255, 176, 0, 0.3)",
      scanLine:
        "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
    },
  },

  customCSS: `
    /* Vintage amber terminal effect */
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
      background: #1a1a1a !important;
      color: #ffb000 !important;
      border-color: #ffb000 !important;
      isolation: isolate;
    }

    code:not(pre code) {
      background: #1a1a1a !important;
      color: #ffb000 !important;
      isolation: isolate;
    }

    /* Dark theme syntax highlighting */
    .hljs-comment,
    .hljs-quote {
      color: #cc8c00 !important;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-subst {
      color: #ffd700 !important;
      font-weight: bold;
    }

    .hljs-string,
    .hljs-doctag {
      color: #ffc640 !important;
    }

    .hljs-number,
    .hljs-literal {
      color: #ffb000 !important;
    }

    @keyframes amber-glow {
      0%, 100% {
        text-shadow: 0 0 5px rgba(255, 176, 0, 0.5),
                     0 0 10px rgba(255, 176, 0, 0.3);
      }
      50% {
        text-shadow: 0 0 10px rgba(255, 176, 0, 0.8),
                     0 0 20px rgba(255, 176, 0, 0.5),
                     0 0 30px rgba(255, 176, 0, 0.3);
      }
    }
  `,
};
