'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MotionDiv } from './motion'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function CircularNav() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center">
      <MotionDiv
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-4 inline-block"
      >
        <nav className="rounded-full bg-black/5 px-4 py-2 backdrop-blur-lg">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative inline-block rounded-full px-3 py-1 text-sm font-medium text-black/80 transition-all hover:text-black',
                      isActive && 'bg-white text-black shadow-sm'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </MotionDiv>
    </div>
  )
}
