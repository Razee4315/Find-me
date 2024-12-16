# Modern Portfolio Website

A sleek and modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a unique circular navigation system.

## 🌟 Features

- **Modern Design**: Clean and professional layout with a unique circular navigation
- **Smooth Animations**: Page transitions and micro-interactions using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Type-Safe**: Written in TypeScript for better development experience
- **SEO Friendly**: Built-in SEO optimization with Next.js

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd portfolio
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
portfolio/
├── public/          # Static files
├── src/
│   ├── app/         # App router pages
│   ├── components/  # React components
│   ├── lib/         # Utility functions
│   └── styles/      # Global styles
├── .env.local       # Environment variables
└── package.json     # Dependencies
```

## 🎨 Components

- **CircularNav**: Unique circular navigation component
- **PageTransition**: Smooth page transition animations
- **Section**: Reusable section component with animations
- **AnimatedText**: Text animation component
- **ProjectCard**: Card component for displaying projects

## 🛠️ Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Use the `PageTransition` and `Section` components for consistency

Example:
```tsx
import { PageTransition } from '@/components/page-transition'
import { Section } from '@/components/section'
import { AnimatedText } from '@/components/animated-text'

export default function NewPage() {
  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-24">
        <Section>
          <AnimatedText
            text="Page Title"
            el="h1"
            className="mb-8 text-center text-4xl font-bold"
          />
          {/* Your content here */}
        </Section>
      </main>
    </PageTransition>
  )
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎯 Future Improvements

- [ ] Add blog functionality
- [ ] Implement contact form backend
- [ ] Add more animation variations
- [ ] Create more project templates
- [ ] Add internationalization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👏 Acknowledgments

- Design inspiration from various portfolio websites
- Icons from [Lucide Icons](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
