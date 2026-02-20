import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mirror Factory | Human Factors AI Research',
  description: 'We conduct research and build tools to ensure the machinery of tomorrow doesn\'t overwrite the humanity of today.',
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
