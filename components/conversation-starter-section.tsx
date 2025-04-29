"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function ConversationStarterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePrompt, setActivePrompt] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  const prompts = [
    "What's a family tradition you cherish the most?",
    "Tell me about a moment when you felt truly proud of yourself.",
    "What's the best advice you've ever received?",
    "Share a memory that always makes you smile.",
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
        setActivePrompt((prev) => (prev + 1) % prompts.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVisible, prompts.length])

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

  const cardVariants = {
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
    <section
      ref={ref}
      id="conversation-starter-section"
      className="w-full py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-[#ECE0FF]/20 to-transparent opacity-50"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] text-white px-4 py-1 rounded-full text-sm font-medium animate-shimmer bg-[length:200%_100%]">
              Today's Conversation Starter
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">
              Capture Meaningful Moments
            </h2>
            <p className="max-w-[900px] text-[#4a5568] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our daily prompts inspire authentic conversations and help preserve the stories that matter most.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="w-full max-w-3xl mx-auto mt-10"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#ECE0FF] flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-[#6B46C1]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d3748]">Today's Prompt</h3>
            </div>

            <div className="relative h-24 mb-8">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activePrompt === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-2xl italic text-[#4a5568] text-center">"{prompt}"</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#ECE0FF]/30 p-5 rounded-lg transform transition-all duration-300 hover:bg-[#ECE0FF]/50">
                <p className="text-[#2d3748] font-medium mb-3">How It Works:</p>
                <ol className="text-sm text-[#4a5568] space-y-2 list-decimal list-inside">
                  <li className="flex items-start">
                    <span className="ml-2">Receive a thoughtful daily prompt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-2">Record your voice response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-2">Build your personal memory collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-2">Share with family if you choose</span>
                  </li>
                </ol>
              </div>
              <div className="bg-[#DCE8FF]/30 p-5 rounded-lg transform transition-all duration-300 hover:bg-[#DCE8FF]/50">
                <p className="text-[#2d3748] font-medium mb-3">Benefits:</p>
                <ul className="text-sm text-[#4a5568] space-y-2 list-disc list-inside">
                  <li className="flex items-start">
                    <span className="ml-2">Preserve authentic emotions in your voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-2">Capture stories you might otherwise forget</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-2">Create a treasure trove for future generations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="ml-2">Build a consistent memory practice</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-[#6B46C1] hover:bg-[#553C9A] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
                <span className="mr-2">Try Today's Prompt</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
