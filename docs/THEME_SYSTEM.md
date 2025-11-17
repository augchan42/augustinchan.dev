# Theme System Documentation

## Overview

The augustinchan.dev site now features a modular, CSS variable-based theme system that makes it easy to switch between different visual aesthetics while maintaining consistent functionality.

## Architecture

### Core Components

1. **Theme Definitions** (`app/themes/`)
   - `types.ts` - TypeScript interfaces for theme structure
   - `default.ts` - Classic Clean theme (original design)
   - `tech-noir.ts` - Tech Noir Brutalism theme (cyberpunk aesthetic)
   - `index.ts` - Theme registry and utility functions

2. **Theme Provider** (`app/components/ThemeProvider.tsx`)
   - React context provider for theme management
   - Handles localStorage persistence
   - Injects CSS variables dynamically
   - Applies theme-specific custom CSS

3. **Theme Switcher** (`app/components/ThemeSwitcher.tsx`)
   - Fixed position UI control (bottom-right corner)
   - Allows users to switch between available themes
   - Persists selection to localStorage

4. **Style Utilities** (`app/lib/styles.ts`)
   - Pre-configured style objects using CSS variables
   - Reusable across components
   - Examples: `cardStyles`, `buttonPrimaryStyles`, `headingStyles`

## Available Themes

### 1. Classic Clean (default)
- **Font**: MS Sans Serif (retro Windows aesthetic)
- **Colors**: Off-white background (#fffff8), black text, muted green accent (#2a623d)
- **Style**: Minimalist, clean, professional
- **Borders**: 8px rounded corners

### 2. Tech Noir Brutalism (tech-noir)
- **Font**: Courier New monospace (terminal aesthetic)
- **Colors**: Dark background (#0a0a0a), neon green text (#00ff41)
- **Style**: Cyberpunk, Matrix-inspired, high contrast
- **Borders**: Sharp 0px corners
- **Effects**: CRT scan lines, neon glow, glitch animations

## Using the Theme System

### Accessing Current Theme

```tsx
import { useTheme } from './components/ThemeProvider'

function MyComponent() {
  const { theme, themeName, setTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme.displayName}</p>
      <button onClick={() => setTheme('tech-noir')}>
        Switch to Tech Noir
      </button>
    </div>
  )
}
```

### Using CSS Variables in Inline Styles

```tsx
<div style={{
  color: 'var(--color-text-primary, #333)',
  backgroundColor: 'var(--color-background-surface, #fafafa)',
  border: '1px solid var(--color-border-default, #ddd)',
  borderRadius: 'var(--border-radius, 8px)',
}}>
  Content
</div>
```

### Using Pre-configured Style Objects

```tsx
import { cardStyles, buttonPrimaryStyles, headingStyles } from './lib/styles'

function BlogCard() {
  return (
    <article style={cardStyles}>
      <h2 style={headingStyles.primary}>Title</h2>
      <a href="/post" style={buttonPrimaryStyles}>Read More</a>
    </article>
  )
}
```

## Adding a New Theme

### 1. Create Theme File

Create `app/themes/my-theme.ts`:

```typescript
import { Theme } from './types'

export const myTheme: Theme = {
  name: 'my-theme',
  displayName: 'My Custom Theme',

  colors: {
    background: '#ffffff',
    backgroundSurface: '#f5f5f5',
    backgroundAccent: '#eeeeee',

    text: {
      primary: '#000000',
      secondary: '#444444',
      muted: '#888888',
      accent: '#0066cc',
    },

    border: {
      default: '#cccccc',
      strong: '#000000',
      accent: '#0066cc',
    },

    button: {
      primary: {
        bg: '#0066cc',
        text: '#ffffff',
        border: '#0066cc',
      },
      secondary: {
        bg: 'transparent',
        text: '#0066cc',
        border: '#0066cc',
      },
    },

    code: {
      bg: '#f5f5f5',
      text: '#000000',
      border: '#cccccc',
    },

    tag: {
      bg: '#eeeeee',
      text: '#666666',
    },
  },

  typography: {
    fontFamily: {
      base: 'Georgia, serif',
      heading: 'Georgia, serif',
      code: 'Monaco, monospace',
    },

    fontSize: {
      base: '18px',
      large: '1.2em',
      small: '0.9em',
    },

    lineHeight: {
      base: '1.6',
      tight: '1.4',
      loose: '1.8',
    },
  },

  spacing: {
    containerMaxWidth: '1100px',
    containerPadding: '2rem',
    sectionGap: '5rem',
    cardGap: '2rem',
  },

  effects: {
    borderRadius: '12px',
    shadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },

  // Optional custom CSS
  customCSS: `
    /* Add any custom CSS here */
  `,
}
```

### 2. Register Theme

Update `app/themes/index.ts`:

```typescript
import { myTheme } from './my-theme'

export const themes: Record<ThemeName, Theme> = {
  'default': defaultTheme,
  'tech-noir': techNoirTheme,
  'my-theme': myTheme,  // Add your theme
  // ...
}
```

### 3. Update Types

Update `app/themes/types.ts`:

```typescript
export type ThemeName = 'default' | 'tech-noir' | 'my-theme' | 'editorial' | 'academic' | 'retro'
```

## CSS Variables Reference

All themes inject the following CSS variables:

### Colors
- `--color-background` - Main background color
- `--color-background-surface` - Card/surface background
- `--color-background-accent` - Accent background
- `--color-text-primary` - Primary text color
- `--color-text-secondary` - Secondary text color
- `--color-text-muted` - Muted/subtle text color
- `--color-text-accent` - Accent text color (links, highlights)
- `--color-border-default` - Default border color
- `--color-border-strong` - Strong/emphasis border color
- `--color-border-accent` - Accent border color
- `--color-button-primary-*` - Primary button colors
- `--color-button-secondary-*` - Secondary button colors
- `--color-code-*` - Code block colors
- `--color-tag-*` - Tag component colors

### Typography
- `--font-family-base` - Body font
- `--font-family-heading` - Heading font
- `--font-family-code` - Code font
- `--font-size-base` - Base font size
- `--font-size-large` - Large text size
- `--font-size-small` - Small text size
- `--line-height-base` - Base line height
- `--line-height-tight` - Tight line height
- `--line-height-loose` - Loose line height

### Spacing
- `--container-max-width` - Maximum content width
- `--container-padding` - Container padding
- `--section-gap` - Gap between sections
- `--card-gap` - Gap between cards

### Effects
- `--border-radius` - Border radius for rounded corners
- `--shadow` - Box shadow
- `--transition` - Transition timing function

## Best Practices

1. **Always provide fallbacks** in CSS variables:
   ```tsx
   color: 'var(--color-text-primary, #333)'  // ✓ Good
   color: 'var(--color-text-primary)'        // ✗ Avoid
   ```

2. **Use style utility objects** for consistency:
   ```tsx
   <button style={buttonPrimaryStyles}>    // ✓ Good
   <button style={{ padding: '...' }}>     // ✗ Avoid
   ```

3. **Test all themes** before deploying
4. **Consider accessibility** - ensure sufficient contrast ratios
5. **Namespace custom effects** with `--effect-` prefix

## Future Themes

Placeholders exist for:
- **Editorial** - Magazine-style maximalist design
- **Academic** - Research paper / scholarly aesthetic
- **Retro** - Full 90s Windows 95 experience

These can be implemented following the same pattern as existing themes.

## Troubleshooting

### Theme not applying
- Check browser console for errors
- Verify ThemeProvider wraps your app in layout.tsx
- Clear localStorage: `localStorage.removeItem('theme')`

### CSS variables not working
- Ensure fallback values are provided
- Check that ThemeProvider is mounted
- Verify CSS variables are injected (inspect element in DevTools)

### Theme switcher not visible
- Check z-index conflicts
- Verify ThemeSwitcher is rendered in layout.tsx
- Check that it's not hidden by other elements

## Performance Considerations

- Theme switching is instant (CSS variable updates)
- No page reload required
- localStorage persistence eliminates theme flash on load
- Custom CSS is injected once per theme change
