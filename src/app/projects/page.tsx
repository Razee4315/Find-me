import { ProjectCard } from '@/components/project-card'
import { AnimatedText } from '@/components/animated-text'
import { Section } from '@/components/section'
import { PageTransition } from '@/components/page-transition'

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform built with Next.js, featuring a shopping cart, user authentication, and payment processing.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: '/projects/ecommerce.jpg',
    link: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    imageUrl: '/projects/taskmanager.jpg',
    link: 'https://github.com/yourusername/taskmanager',
  },
  {
    title: 'AI Image Generator',
    description:
      'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    imageUrl: '/projects/ai-generator.jpg',
    link: 'https://github.com/yourusername/ai-generator',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive dashboard for managing and analyzing social media accounts across multiple platforms.',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
    imageUrl: '/projects/dashboard.jpg',
    link: 'https://github.com/yourusername/social-dashboard',
  },
  {
    title: 'Weather App',
    description:
      'A beautiful weather application with detailed forecasts, maps, and weather alerts.',
    tags: ['React Native', 'Redux', 'OpenWeather API'],
    imageUrl: '/projects/weather.jpg',
    link: 'https://github.com/yourusername/weather-app',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio website template built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/projects/portfolio.jpg',
    link: 'https://github.com/yourusername/portfolio',
  },
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-24">
        <Section>
          <AnimatedText
            text="My Projects"
            el="h1"
            className="mb-8 text-center text-4xl font-bold"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>
      </main>
    </PageTransition>
  )
}
