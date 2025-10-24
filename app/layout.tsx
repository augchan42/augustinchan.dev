import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import './globals.css'

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
      <body suppressHydrationWarning>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '1rem'
        }}>
          <header style={{
            borderBottom: '2px solid #333',
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
                  color: '#333'
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
                flexWrap: 'wrap'
              }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#666' }}>
                  Home
                </Link>
                <Link href="/about" style={{ textDecoration: 'none', color: '#666' }}>
                  About
                </Link>
                <Link href="/blog" style={{ textDecoration: 'none', color: '#666' }}>
                  Blog
                </Link>
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
            © 2025 Augustin Chan aug@digitalrain.studio
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