import type { Metadata } from 'next'
import MirrorFactoryApp from '@/components/MirrorFactoryApp'

export const metadata: Metadata = {
  title: 'Brand Guide | Mirror Factory',
  description: 'Mirror Factory brand guide featuring logo variations, color palette, typography, and brand assets for human factors AI research company.',
  keywords: ['Mirror Factory brand guide', 'logo assets', 'brand identity', 'design system', 'human factors AI research'],
  alternates: {
    canonical: '/brand-guide',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mirrorfactory.com/brand-guide',
    title: 'Brand Guide | Mirror Factory',
    description: 'Mirror Factory brand guide featuring logo variations, color palette, typography, and brand assets for human factors AI research company.',
    siteName: 'Mirror Factory',
    images: [
      {
        url: '/og-brand-guide.svg',
        width: 1200,
        height: 630,
        alt: 'Mirror Factory Brand Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Guide | Mirror Factory',
    description: 'Mirror Factory brand guide featuring logo variations, color palette, typography, and brand assets.',
    images: ['/og-brand-guide.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BrandGuidePage() {
  return <MirrorFactoryApp />
}
