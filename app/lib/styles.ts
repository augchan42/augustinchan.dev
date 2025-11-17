// Utility functions for themed inline styles

export const cardStyles = {
  padding: '1.5rem',
  border: '1px solid var(--color-border-default, #ddd)',
  borderRadius: 'var(--border-radius, 8px)',
  backgroundColor: 'var(--color-background-surface, #fafafa)',
  transition: 'var(--transition, all 0.2s ease)',
}

export const featuredCardStyles = {
  padding: '2rem',
  border: '2px solid var(--color-border-strong, #333)',
  borderRadius: 'var(--border-radius, 8px)',
  backgroundColor: 'var(--color-background-surface, #fafafa)',
  boxShadow: 'var(--shadow, none)',
}

export const buttonPrimaryStyles = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: 'var(--color-button-primary-bg, #333)',
  color: 'var(--color-button-primary-text, #fff)',
  textDecoration: 'none',
  border: '1px solid var(--color-button-primary-border, #333)',
  borderRadius: 'var(--border-radius, 4px)',
  fontSize: '0.95em',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'var(--transition, all 0.2s ease)',
}

export const buttonSecondaryStyles = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: 'var(--color-button-secondary-bg, transparent)',
  color: 'var(--color-button-secondary-text, #333)',
  textDecoration: 'none',
  border: '2px solid var(--color-button-secondary-border, #333)',
  borderRadius: 'var(--border-radius, 4px)',
  fontSize: '0.95em',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'var(--transition, all 0.2s ease)',
}

export const tagStyles = {
  fontSize: '0.75em',
  padding: '0.25rem 0.5rem',
  backgroundColor: 'var(--color-tag-bg, #e0e0e0)',
  color: 'var(--color-tag-text, #555)',
  borderRadius: 'var(--border-radius, 4px)',
  textTransform: 'lowercase' as const,
}

export const headingStyles = {
  primary: {
    fontSize: '2em',
    marginBottom: '0.5rem',
    color: 'var(--color-text-primary, #333)',
  },
  secondary: {
    fontSize: '1.8em',
    marginBottom: '2rem',
    color: 'var(--color-text-primary, #333)',
  },
  tertiary: {
    fontSize: '1.5em',
    marginBottom: '1.5rem',
    color: 'var(--color-text-primary, #333)',
  },
}

export const textStyles = {
  primary: {
    color: 'var(--color-text-primary, #333)',
  },
  secondary: {
    color: 'var(--color-text-secondary, #555)',
  },
  muted: {
    color: 'var(--color-text-muted, #666)',
  },
  small: {
    fontSize: 'var(--font-size-small, 0.85em)',
    color: 'var(--color-text-muted, #666)',
  },
}
