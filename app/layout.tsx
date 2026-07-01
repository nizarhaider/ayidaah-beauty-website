import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Ayidaah Beauty - Rajagiriya, Sri Lanka',
  description: 'Shop press-on nails, lip tints, lashes, and beauty essentials from Ayidaah Beauty in Rajagiriya, Sri Lanka.',
  metadataBase: new URL(siteUrl),
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Ayidaah Beauty - Rajagiriya, Sri Lanka',
    description: 'Shop press-on nails, lip tints, lashes, and beauty essentials from Ayidaah Beauty.',
    url: '/',
    siteName: 'Ayidaah Beauty',
    images: [
      {
        url: '/ayidaah-logo.png',
        width: 1024,
        height: 1024,
        alt: 'Ayidaah Beauty logo',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ayidaah Beauty - Rajagiriya, Sri Lanka',
    description: 'Shop press-on nails, lip tints, lashes, and beauty essentials from Ayidaah Beauty.',
    images: ['/ayidaah-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
