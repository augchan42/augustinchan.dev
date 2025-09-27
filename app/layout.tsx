import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  title: 'Augustin Chan',
  description: 'Building systems that reason',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '2rem',
          fontFamily: '"MS Sans Serif", sans-serif',
          fontSize: '20px'
        }}>
          <header style={{
            borderBottom: '2px solid #333',
            paddingBottom: '1rem',
            marginBottom: '2rem'
          }}>
            <nav style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                fontSize: '1.5em',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: '#333'
              }}>
                Augustin Chan
              </Link>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#666' }}>
                  Portfolio
                </Link>
                <Link href="/blog" style={{ textDecoration: 'none', color: '#666' }}>
                  Blog
                </Link>
                <a href="mailto:aug@iterative.day" style={{ textDecoration: 'none', color: '#666' }}>
                  Contact
                </a>
                <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#666' }}>
                  8-Bit Oracle
                </a>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer style={{
            borderTop: '1px solid #ddd',
            paddingTop: '2rem',
            marginTop: '4rem',
            textAlign: 'center',
            color: '#666'
          }}>
            © 2025 Augustin Chan - Built with Next.js
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}