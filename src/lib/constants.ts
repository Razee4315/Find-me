export const SITE_CONFIG = {
  name: 'Findus',
  description: 'A modern portfolio template built with Next.js and Tailwind CSS',
  url: 'https://findus.vercel.app',
  ogImage: 'https://findus.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
]

export const SKILLS = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'MongoDB', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Linux', level: 75 },
  ],
}
