'use client'

import { Section } from '@/components/section'
import { AnimatedText } from '@/components/animated-text'
import { MotionDiv } from '@/components/motion'
import { SKILLS } from '@/lib/constants'
import { PageTransition } from '@/components/page-transition'

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <MotionDiv
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-24">
        <Section>
          <AnimatedText
            text="My Skills & Expertise"
            el="h1"
            className="mb-8 text-center text-4xl font-bold"
          />
          <div className="grid gap-12">
            {/* Frontend Skills */}
            <Section>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold">Frontend Development</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {SKILLS.frontend.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </MotionDiv>
            </Section>

            {/* Backend Skills */}
            <Section>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold">Backend Development</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {SKILLS.backend.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </MotionDiv>
            </Section>

            {/* Tools and Technologies */}
            <Section>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {SKILLS.tools.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </MotionDiv>
            </Section>

            {/* Additional Info */}
            <Section>
              <div className="rounded-lg bg-accent p-6">
                <h2 className="mb-4 text-xl font-semibold">
                  Continuous Learning
                </h2>
                <p className="text-muted-foreground">
                  I'm constantly learning and exploring new technologies to stay
                  up-to-date with the latest trends in web development. Currently
                  learning: Web3, AI/ML, and Cloud Architecture.
                </p>
              </div>
            </Section>
          </div>
        </Section>
      </main>
    </PageTransition>
  )
}
