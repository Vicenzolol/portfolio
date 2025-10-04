'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function Parallax({ children, speed = 0.5, direction = 'up', className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const transformValue = speed * 100

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [transformValue, -transformValue] : [-transformValue, transformValue]
  )

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [transformValue, -transformValue] : direction === 'right' ? [-transformValue, transformValue] : [0, 0]
  )

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y: direction === 'up' || direction === 'down' ? y : 0,
          x: direction === 'left' || direction === 'right' ? x : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
