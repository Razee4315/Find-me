'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TiltCard } from './tilt-card'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link: string
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <TiltCard className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg transition-colors hover:bg-accent/5">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6"
      >
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
          <span className="sr-only">View project</span>
        </Link>
      </motion.div>
    </TiltCard>
  )
}
