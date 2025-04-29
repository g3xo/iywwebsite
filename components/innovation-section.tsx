"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import FloatingElement from "@/components/ui/floating-element"

export default function InnovationSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#ECE0FF]/20 to-transparent opacity-50"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-[#2d3748]">
            The Innovation Behind In Your World
          </h2>
          <p className="text-[#4a5568] md:text-lg">
            We're revolutionizing how families preserve their most precious asset—their shared memories and
            voices—through a seamless blend of cutting-edge technology and human connection.
          </p>
          <p className="text-[#4a5568] md:text-lg">
            Our platform is especially designed for multilingual families facing a two-sided language barrier: immigrant
            parents who may not speak fluent English, and their second-generation American children who often can't
            speak their family's native language. We bridge this gap to enable meaningful conversations that preserve
            cultural heritage and strengthen family bonds.
          </p>
        </motion.div>

        <div className="grid gap-6 mt-8 md:grid-cols-3 w-full max-w-4xl mx-auto">
          <FloatingElement delay={0}>
            <div className="bg-[#ECE0FF] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-[#ECE0FF] hover:to-[#DCE8FF] h-[200px] flex flex-col">
              <h3 className="font-bold text-[#2d3748] mb-2">Gamified Memory Preservation</h3>
              <p className="text-sm text-[#4a5568] flex-grow">
                We've transformed the act of recording memories into an engaging daily ritual that builds a living
                legacy over time.
              </p>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.2}>
            <div className="bg-[#DCE8FF] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-[#DCE8FF] hover:to-[#ECE0FF] h-[200px] flex flex-col">
              <h3 className="font-bold text-[#2d3748] mb-2">AI-Powered Connection</h3>
              <p className="text-sm text-[#4a5568] flex-grow">
                Our platform breaks language barriers and preserves the emotional nuance of voice through cutting-edge
                AI technology.
              </p>
            </div>
          </FloatingElement>

          <FloatingElement delay={0.4}>
            <div className="bg-[#ECE0FF] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-[#ECE0FF] hover:to-[#DCE8FF] h-[200px] flex flex-col">
              <h3 className="font-bold text-[#2d3748] mb-2">Secure Legacy Building</h3>
              <p className="text-sm text-[#4a5568] flex-grow">
                Create a digital time capsule of your voice, stories, and wisdom that will resonate with future
                generations long after you're gone.
              </p>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  )
}
