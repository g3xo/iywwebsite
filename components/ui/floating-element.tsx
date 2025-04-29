"use client"

import { useEffect, useState, type ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
}

export default function FloatingElement({ children, delay = 0 }: FloatingElementProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
