import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CircularNav } from '@/components/circular-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Findus - Portfolio Template',
  description: 'A modern portfolio template built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <CircularNav />
          {children}
        </div>
      </body>
    </html>
  )
}
