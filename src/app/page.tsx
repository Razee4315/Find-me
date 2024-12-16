'use client'

import { AnimatedText } from '@/components/animated-text'
import { Section } from '@/components/section'
import { PageTransition } from '@/components/page-transition'
import { MotionDiv } from '@/components/motion'
import Link from 'next/link'

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'SQL',
  'Git',
]

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <Section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <AnimatedText
              text="Building Digital Experiences That Matter"
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
              el="h1"
            />
            
            <AnimatedText
              text="Full-stack developer specializing in building exceptional digital experiences"
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              el="p"
            />
            
            <div className="space-x-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Section>

        {/* Technologies Section */}
        <Section className="border-t">
          <div className="container py-12">
            <AnimatedText
              text="Technologies"
              className="mb-8 text-center text-2xl font-bold"
              el="h2"
            />
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <MotionDiv
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  className="rounded-full bg-accent px-4 py-2 text-sm font-medium"
                >
                  {tech}
                </MotionDiv>
              ))}
            </div>
          </div>
        </Section>

        {/* Featured Work Section */}
        <Section className="border-t">
          <div className="container py-12">
            <AnimatedText
              text="Featured Work"
              className="mb-8 text-center text-2xl font-bold"
              el="h2"
            />
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((_, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative aspect-video overflow-hidden rounded-lg bg-accent"
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Link
                      href="/projects"
                      className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground"
                    >
                      View Project
                    </Link>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </PageTransition>
  )
}
