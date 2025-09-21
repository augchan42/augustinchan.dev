import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Augustin Chan</span>,
  project: {
    link: 'https://github.com/augchan42',
  },
  docsRepositoryBase: 'https://github.com/augchan42/augustinchan.dev',
  footer: {
    text: '© 2025 Augustin Chan - Built with Nextra',
  },
  navbar: {
    extraContent: (
      <>
        <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem', color: '#666' }}>
          8-Bit Oracle
        </a>
      </>
    )
  }
}

export default config
