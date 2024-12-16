'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speed: number
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (!containerRef.current) return

    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: `hsl(${Math.random() * 360}, 50%, 50%)`,
      speed: Math.random() * 2 + 0.5,
    }))

    const animate = async () => {
      await Promise.all(
        particles.map(async (particle, i) => {
          await controls.start(`particle${i}`, {
            x: [
              `${particle.x}%`,
              `${(particle.x + 20) % 100}%`,
              `${(particle.x + 40) % 100}%`,
              `${particle.x}%`,
            ],
            y: [
              `${particle.y}%`,
              `${(particle.y + 30) % 100}%`,
              `${(particle.y + 10) % 100}%`,
              `${particle.y}%`,
            ],
            transition: {
              duration: particle.speed * 20,
              repeat: Infinity,
              ease: 'linear',
            },
          })
        })
      )
    }

    animate()

    return () => {
      controls.stop()
    }
  }, [controls])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-20"
    >
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          custom={`particle${i}`}
          animate={controls}
          className="absolute h-1 w-1 rounded-full bg-primary"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
          }}
        />
      ))}
    </div>
  )
}
