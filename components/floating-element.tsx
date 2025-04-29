"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export default function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  yOffset = 15,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
        rotateX: [0, 2, 0, -2, 0],
        rotateY: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      className={`transform-gpu will-change-transform ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}
