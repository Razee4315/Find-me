'use client'

import { MotionDiv } from './motion'

interface AnimatedTextProps {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
}

export function AnimatedText({
  text,
  el = 'div',
  className,
}: AnimatedTextProps) {
  const words = text.split(' ')

  const Element = el

  return (
    <Element className={className}>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center"
      >
        {words.map((word, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: 'spring',
              damping: 12,
              stiffness: 200,
            }}
            className="mr-2 last:mr-0"
          >
            {word}
          </MotionDiv>
        ))}
      </MotionDiv>
    </Element>
  )
}
