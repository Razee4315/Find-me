'use client'

import { ScrollProgress } from './scroll-progress'
import { FloatingNav } from './floating-nav'
import { Footer } from './footer'

export function ClientComponents({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
      <FloatingNav />
      <Footer />
    </>
  )
}
