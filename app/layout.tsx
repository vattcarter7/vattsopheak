import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vatt Sopheak',
  description: 'Vatt Sopheak personal contact info',
  referrer: 'origin-when-cross-origin',
  keywords: ['Vatt Sopheak', 'Portfolio', 'Personal Info'],
  authors: [{ name: 'Vatt Sopheak', url: 'https://www.vattsopheak.com/' }],
  creator: 'Vatt Sopheak',
  openGraph: {
    images: '/images/vattsopheak.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
