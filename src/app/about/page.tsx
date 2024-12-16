import { Section } from '@/components/section'
import { PageTransition } from '@/components/page-transition'
import { AnimatedText } from '@/components/animated-text'

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-24">
        <Section>
          <AnimatedText
            text="About Me"
            el="h1"
            className="mb-8 text-center text-4xl font-bold"
          />
          <div className="prose prose-gray dark:prose-invert mx-auto max-w-4xl">
            <p className="text-lg text-muted-foreground">
              Hi there! I'm a passionate web developer with a love for creating
              beautiful and functional web applications. I specialize in modern web
              technologies like React, Next.js, and TypeScript.
            </p>
            
            <h2 className="mt-8 text-2xl font-semibold">My Journey</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">2020</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Started Web Development</h3>
                  <p className="text-muted-foreground">
                    Began learning HTML, CSS, and JavaScript
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">2021</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">First Developer Role</h3>
                  <p className="text-muted-foreground">
                    Joined as a Junior Frontend Developer
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">2023</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Senior Developer</h3>
                  <p className="text-muted-foreground">
                    Promoted to Senior Frontend Developer
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="mt-8 text-2xl font-semibold">Education</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                <strong>Bachelor's in Computer Science</strong>
                <br />
                <span className="text-muted-foreground">
                  University Name, 2016-2020
                </span>
              </li>
              <li>
                <strong>Web Development Bootcamp</strong>
                <br />
                <span className="text-muted-foreground">
                  Coding Academy, 2020
                </span>
              </li>
            </ul>
            
            <h2 className="mt-8 text-2xl font-semibold">Interests</h2>
            <p className="mt-4 text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or writing technical blog posts.
              I'm also passionate about mentoring junior developers and building a
              supportive tech community.
            </p>
          </div>
        </Section>
      </main>
    </PageTransition>
  )
}
