"use client"

import { useEffect, useState, useRef } from "react"
import { Zap, MessageCircle, Languages } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function LiveTranslationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  const steps = [
    { text: "Grandma speaks in Korean", language: "Korean" },
    { text: "AI translates in real-time", language: "Processing..." },
    { text: "You hear and understand in English", language: "English" },
  ]

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible, steps.length])

  const fadeInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  }

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      id="live-translation-section"
      className="w-full py-12 md:py-24 bg-[#F7F7FC] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-[#DCE8FF]/30 to-transparent"></div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInRightVariants}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECE0FF] to-[#DCE8FF] rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-[#6B46C1] text-white p-3 flex items-center justify-between">
                      <span className="font-medium">Live Voice-to-Voice Translation</span>
                      <Languages className="h-5 w-5" />
                    </div>
                    <div className="p-4 space-y-4">
                      {steps.map((step, index) => (
                        <div
                          key={index}
                          className={`transition-all duration-500 ${
                            currentStep === index ? "opacity-100 scale-100" : "opacity-50 scale-95"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                currentStep === index ? "bg-[#6B46C1] text-white" : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div>
                              <p
                                className={`font-medium ${currentStep === index ? "text-[#2d3748]" : "text-gray-400"}`}
                              >
                                {step.text}
                              </p>
                              <p className={`text-xs ${currentStep === index ? "text-[#6B46C1]" : "text-gray-400"}`}>
                                {step.language}
                              </p>
                            </div>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="ml-4 h-6 border-l border-dashed border-gray-200"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 order-1 lg:order-2">
            <motion.div initial="hidden" animate={controls} variants={fadeInVariants} custom={0}>
              <div className="inline-block bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-white px-4 py-1 rounded-full text-sm font-medium">
                Seamless AI Translation
              </div>
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
              custom={1}
              className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]"
            >
              Live Voice-to-Voice Translation
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
              custom={2}
              className="text-[#4a5568] md:text-lg"
            >
              Our AI-powered translation bridges the gap between generations, allowing meaningful conversations
              regardless of language proficiency.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
              custom={3}
              className="text-[#4a5568] md:text-lg"
            >
              For immigrant families where parents speak their native language and children may not be fluent in it, our
              platform enables deep connections that would otherwise be impossible.
            </motion.p>

            <div className="space-y-4 pt-4">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeInVariants}
                custom={4}
                className="transform transition-all duration-300 hover:translate-x-1"
              >
                <AIFeature
                  icon={<Zap className="h-5 w-5 text-[#6B46C1]" />}
                  title="Real-time Translation"
                  description="Conversations flow naturally with instant voice-to-voice translation"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeInVariants}
                custom={5}
                className="transform transition-all duration-300 hover:translate-x-1"
              >
                <AIFeature
                  icon={<MessageCircle className="h-5 w-5 text-[#6B46C1]" />}
                  title="Emotional Preservation"
                  description="Our AI maintains the emotional tone and cultural nuances in translation"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeInVariants}
                custom={6}
                className="transform transition-all duration-300 hover:translate-x-1"
              >
                <AIFeature
                  icon={<Languages className="h-5 w-5 text-[#6B46C1]" />}
                  title="Multi-language Support"
                  description="Support for dozens of languages to connect families across cultures"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AIFeature({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="bg-[#ECE0FF] p-2 rounded-full">{icon}</div>
      <div>
        <h3 className="font-medium text-[#2d3748]">{title}</h3>
        <p className="text-sm text-[#4a5568]">{description}</p>
      </div>
    </div>
  )
}
