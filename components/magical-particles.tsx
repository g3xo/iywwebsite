"use client"

import { useEffect, useRef } from "react"

export default function MagicalParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create a simpler animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw a few simple circles
      const time = Date.now() * 0.001
      for (let i = 0; i < 10; i++) {
        const x = Math.sin(time + i * 0.5) * canvas.width * 0.25 + canvas.width * 0.5
        const y = Math.cos(time + i * 0.5) * canvas.height * 0.25 + canvas.height * 0.5
        const size = Math.sin(time + i) * 2 + 3

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? "#ECE0FF" : "#6B46C1"
        ctx.globalAlpha = 0.2
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" aria-hidden="true" />
}
