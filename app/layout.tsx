import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Ayidaah Beauty | Press-On Nails, Lashes & Tints in Sri Lanka',
  description: 'Shop expressive press-on nails, lashes, colour tints and beauty essentials from Ayidaah Beauty in Rajagiriya, with islandwide delivery in Sri Lanka.',
  metadataBase: new URL(siteUrl),
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
    title: 'Ayidaah Beauty | Your Look. Your Rules.',
    description: 'Press-on nails, lashes and colour tints curated in Sri Lanka, delivered islandwide.',
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
    card: 'summary_large_image',
    title: 'Ayidaah Beauty | Your Look. Your Rules.',
    description: 'Press-on nails, lashes and colour tints curated in Sri Lanka, delivered islandwide.',
    images: ['/ayidaah-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
