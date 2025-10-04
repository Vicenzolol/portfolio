'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!progressRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] h-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
        style={{ transform: 'scaleX(0)', transformOrigin: '0% 50%' }}
      />
    </motion.div>
  )
}
