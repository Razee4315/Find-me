'use client'

import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function FloatingNav() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md rounded-full px-4 py-2 border border-border/40 shadow-lg z-50"
    >
      <nav className="flex items-center space-x-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-3 py-2 text-sm transition-colors hover:text-foreground/80 ${
              pathname === link.href ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            {pathname === link.href && (
              <motion.div
                layoutId="floatingNav"
                className="absolute inset-0 bg-accent rounded-full -z-10"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}
