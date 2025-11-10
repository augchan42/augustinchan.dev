import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import ThemeToggle from '../components/ThemeToggle'
import './globals.css'
import { THEME_STORAGE_KEY } from './theme'

const themeInitScript = `
(function() {
  try {
    const stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.dataset.theme = stored;
    } else {
      // Default to light, but apply it client-side only to avoid hydration mismatch
      document.documentElement.dataset.theme = 'light';
    }
  } catch (error) {
    console.warn('Theme preference load failed', error);
  }
})();
`

export const metadata = {
  title: 'Augustin Chan',
  description: 'Building systems that reason',
  keywords: ['AI', 'Machine Learning', 'Web3', 'Software Engineering', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Augustin Chan', url: 'https://augustinchan.dev' }],
  creator: 'Augustin Chan',
  publisher: 'Augustin Chan',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://augustinchan.dev',
    title: 'Augustin Chan',
    description: 'Building systems that reason',
    siteName: 'Augustin Chan',
    images: [
      {
        url: 'https://augustinchan.dev/img/Xrn0Id68_400x400.jpg',
        width: 400,
        height: 400,
        alt: 'Augustin Chan - Building systems that reason',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augustin Chan',
    description: 'Building systems that reason',
    images: ['https://augustinchan.dev/img/Xrn0Id68_400x400.jpg'],
    creator: '@augchan42',
  },
  metadataBase: new URL('https://augustinchan.dev'),
  alternates: {
    canonical: 'https://augustinchan.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '1rem'
        }}>
          <header style={{
            borderBottom: '2px solid var(--border-strong)',
            paddingBottom: '1rem',
            marginBottom: '2rem'
          }}>
            <nav style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <Link href="/" style={{
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'var(--text-primary)'
                }}>
                  Augustin Chan
                </Link>
                <div style={{ marginTop: '0.5rem' }}>
                  Building systems that reason
                </div>
              </div>
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  Home
                </Link>
                <Link href="/about" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  About
                </Link>
                <Link href="/blog" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  Blog
                </Link>
                <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  8-Bit Oracle
                </a>
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
            marginTop: '4rem',
            textAlign: 'center',
            color: 'var(--text-muted)'
          }}>
            <div>© 2025 Augustin Chan aug@digitalrain.studio</div>
            <div style={{ marginTop: '0.5rem' }}>
              <a href="/rss.xml" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>RSS Feed</a>
            </div>
          </footer>
        </div>
        <GoogleAnalytics />
        <Analytics />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Service worker cleanup for legacy site versions
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                  registration.unregister();
                }
              });

              // Register cleanup service worker
              navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('Cleanup SW registered');
              }).catch(function(error) {
                console.log('Cleanup SW registration failed');
              });
            }
          `
        }} />
      </body>
    </html>
  )
}
