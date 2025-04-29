"use client"

import { useEffect, useState, useRef } from "react"
import { Smartphone } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { BadgeHeader } from "@/components/ui/badge-header"

export default function FeatureShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  const features = [
    {
      title: "Daily Prompts",
      description: "Thoughtful questions to inspire meaningful voice recordings",
      color: "#6B46C1",
      screen: (
        <div className="bg-[#F7F7FC] h-full w-full flex flex-col p-4">
          <div className="text-lg font-bold mb-4 text-[#2d3748]">Today's Prompt</div>
          <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
            <p className="text-[#4a5568]">What's a family tradition you hope will continue for generations?</p>
          </div>
          <div className="mt-auto flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#6B46C1] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#6B46C1] flex items-center justify-center text-white">
                  <Smartphone className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Voice Translation",
      description: "Break language barriers between family members",
      color: "#9F7AEA",
      screen: (
        <div className="bg-[#F0E6FF] h-full w-full flex flex-col p-4">
          <div className="text-lg font-bold mb-4 text-[#2d3748]">Translation</div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
              <p className="text-xs text-[#6B46C1] mb-1">Korean</p>
              <p className="text-[#4a5568]">가족 전통에 대해 이야기해 주세요</p>
            </div>
            <div className="bg-[#6B46C1] rounded-lg p-3 shadow-sm max-w-[80%] ml-auto">
              <p className="text-xs text-white/80 mb-1">English</p>
              <p className="text-white">Tell me about your family traditions</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Memory Tree",
      description: "Visualize your growing collection of family memories",
      color: "#48BB78",
      screen: (
        <div className="bg-[#F0FFF4] h-full w-full flex flex-col p-4">
          <div className="text-lg font-bold mb-4 text-[#2d3748]">Memory Tree</div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-40 h-40">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-[#68D391] rounded-md"></div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-[#48BB78] rounded-full"></div>
              <div className="absolute bottom-12 left-1/4 w-16 h-12 bg-[#68D391] rounded-full"></div>
              <div className="absolute bottom-12 right-1/4 w-16 h-12 bg-[#68D391] rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-[#9AE6B4] rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
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
        setActiveFeature((prev) => (prev + 1) % features.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isVisible, features.length])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const phoneVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} id="feature-showcase" className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#ECE0FF]/20 to-transparent opacity-30"></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <BadgeHeader text="Feature Showcase" />
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">Experience Our Platform</h2>
          <p className="max-w-[700px] text-[#4a5568] md:text-lg">
            See how our intuitive features help preserve your family's legacy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" animate={controls} variants={phoneVariants} className="flex justify-center">
            {/* iOS Device Mockup */}
            <div className="relative mx-auto w-[280px] h-[560px] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-[#1F2937] rounded-[40px] shadow-xl overflow-hidden border-[14px] border-[#1F2937]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-[#1F2937] rounded-b-xl z-20"></div>

                {/* Screen */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-white">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeFeature === index ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-8 z-0"
                      }`}
                    >
                      {/* Status Bar */}
                      <div className="h-8 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] flex items-center justify-between px-4">
                        <span className="text-white text-xs">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* App Content */}
                      {feature.screen}
                    </div>
                  ))}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full z-20"></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={controls} variants={fadeInVariants} className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer transform hover:translate-x-2 ${
                  activeFeature === index
                    ? `bg-[${feature.color}]/10 border-l-4 border-[${feature.color}] shadow-md`
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    activeFeature === index ? `text-[${feature.color}]` : "text-[#2d3748]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-[#4a5568]">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
