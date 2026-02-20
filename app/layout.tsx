import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mirror Factory | Human Factors AI Research',
  description: 'Mirror Factory conducts human factors AI research and builds tools to ensure the machinery of tomorrow doesn\'t overwrite the humanity of today. Expert research in AI safety, context preservation, and human-centered design.',
  keywords: ['human factors AI research', 'AI safety', 'Mirror Factory', 'human-centered AI', 'context preservation', 'AI research', 'human factors engineering', 'responsible AI'],
  authors: [{ name: 'Mirror Factory' }],
  creator: 'Mirror Factory',
  publisher: 'Mirror Factory',
  metadataBase: new URL('https://mirrorfactory.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mirrorfactory.com',
    title: 'Mirror Factory | Human Factors AI Research',
    description: 'Mirror Factory conducts human factors AI research and builds tools to ensure the machinery of tomorrow doesn\'t overwrite the humanity of today.',
    siteName: 'Mirror Factory',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mirror Factory - Human Factors AI Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirror Factory | Human Factors AI Research',
    description: 'Mirror Factory conducts human factors AI research and builds tools to ensure the machinery of tomorrow doesn\'t overwrite the humanity of today.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
