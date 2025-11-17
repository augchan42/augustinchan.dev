import { Theme, ThemeName } from './types'
import { defaultTheme } from './default'
import { techNoirTheme } from './tech-noir'
import { minitelCyanTheme } from './minitel-cyan'
import { nttOrangeTheme } from './ntt-orange'
import { cadAmberTheme } from './cad-amber'
import { cyanWireframeTheme } from './cyan-wireframe'

export { defaultTheme, techNoirTheme, minitelCyanTheme, nttOrangeTheme, cadAmberTheme, cyanWireframeTheme }
export type { Theme, ThemeName }

// Theme registry
export const themes: Record<ThemeName, Theme> = {
  'default': defaultTheme,
  'tech-noir': techNoirTheme,
  'minitel-cyan': minitelCyanTheme,
  'ntt-orange': nttOrangeTheme,
  'cad-amber': cadAmberTheme,
  'cyan-wireframe': cyanWireframeTheme,
  // Placeholder for future themes
  'editorial': defaultTheme, // TODO: implement
  'academic': defaultTheme,  // TODO: implement
  'retro': defaultTheme,     // TODO: implement
}

// Get theme by name
export function getTheme(name: ThemeName): Theme {
  return themes[name] || defaultTheme
}

// Get all available themes
export function getAllThemes(): Theme[] {
  return Object.values(themes).filter((theme, index, self) =>
    index === self.findIndex(t => t.name === theme.name)
  )
}

// Convert theme to CSS variables
export function themeToCSSVariables(theme: Theme): string {
  return `
    /* Colors */
    --color-background: ${theme.colors.background};
    --color-background-surface: ${theme.colors.backgroundSurface};
    --color-background-accent: ${theme.colors.backgroundAccent};

    --color-text-primary: ${theme.colors.text.primary};
    --color-text-secondary: ${theme.colors.text.secondary};
    --color-text-muted: ${theme.colors.text.muted};
    --color-text-accent: ${theme.colors.text.accent};

    --color-border-default: ${theme.colors.border.default};
    --color-border-strong: ${theme.colors.border.strong};
    --color-border-accent: ${theme.colors.border.accent};

    --color-button-primary-bg: ${theme.colors.button.primary.bg};
    --color-button-primary-text: ${theme.colors.button.primary.text};
    --color-button-primary-border: ${theme.colors.button.primary.border};

    --color-button-secondary-bg: ${theme.colors.button.secondary.bg};
    --color-button-secondary-text: ${theme.colors.button.secondary.text};
    --color-button-secondary-border: ${theme.colors.button.secondary.border};

    --color-code-bg: ${theme.colors.code.bg};
    --color-code-text: ${theme.colors.code.text};
    --color-code-border: ${theme.colors.code.border};

    --color-tag-bg: ${theme.colors.tag.bg};
    --color-tag-text: ${theme.colors.tag.text};

    /* Typography */
    --font-family-base: ${theme.typography.fontFamily.base};
    --font-family-heading: ${theme.typography.fontFamily.heading};
    --font-family-code: ${theme.typography.fontFamily.code};

    --font-size-base: ${theme.typography.fontSize.base};
    --font-size-large: ${theme.typography.fontSize.large};
    --font-size-small: ${theme.typography.fontSize.small};

    --line-height-base: ${theme.typography.lineHeight.base};
    --line-height-tight: ${theme.typography.lineHeight.tight};
    --line-height-loose: ${theme.typography.lineHeight.loose};

    /* Spacing */
    --container-max-width: ${theme.spacing.containerMaxWidth};
    --container-padding: ${theme.spacing.containerPadding};
    --section-gap: ${theme.spacing.sectionGap};
    --card-gap: ${theme.spacing.cardGap};

    /* Effects */
    --border-radius: ${theme.effects.borderRadius};
    --shadow: ${theme.effects.shadow};
    --transition: ${theme.effects.transition};

    /* Custom effects */
    ${theme.effects.customEffects ? Object.entries(theme.effects.customEffects)
      .map(([key, value]) => `--effect-${key}: ${value};`)
      .join('\n    ') : ''}
  `.trim()
}
