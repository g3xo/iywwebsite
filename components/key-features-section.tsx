"use client"

import { useEffect, useState, useRef } from "react"
import { MessageSquare, BookOpen, Sparkles, Check, ChevronRight } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { BadgeHeader } from "@/components/ui/badge-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "daily-prompts",
    title: "Daily Prompts",
    description:
      "Capture meaningful conversations through daily prompts that inspire authentic voice recordings, building a rich tapestry of memories over time.",
    icon: MessageSquare,
    color: "#6B46C1",
    imageSrc: "/images/daily-prompt.png",
    benefits: [
      "Thoughtful questions to spark meaningful conversations",
      "Voice recording to capture authentic emotions",
      "Daily streaks to build a consistent memory collection",
    ],
  },
  {
    id: "memory-collection",
    title: "Memory Collection",
    description:
      "Organize and share your memories in a beautiful, intuitive interface that makes it easy to revisit and share your most precious moments.",
    icon: Sparkles,
    color: "#48BB78",
    imageSrc: "/images/memory-conversation.png",
    benefits: [
      "Organize memories by themes and topics",
      "Add voice recordings, text, and photos",
      "Share memories with family members",
    ],
  },
  {
    id: "legacy-letter",
    title: "Legacy Letter",
    description:
      "Craft your ethical legacy with a powerful blend of wisdom, values, and personal stories that will guide and inspire future generations.",
    icon: BookOpen,
    color: "#9F7AEA",
    imageSrc: "/images/legacy-letter.png",
    benefits: [
      "Guided prompts for creating meaningful letters",
      "Organize your ethics, values, and life lessons",
      "Secure storage and controlled sharing options",
    ],
  },
]

export default function KeyFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

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
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      id="features"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7F1FF] via-[#ECE0FF] to-[#DCE8FF] py-24 md:py-32 scroll-smooth"
    >
      {/* Decorative Overlays */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute -left-10 -top-10 h-[400px] w-[400px] rounded-full bg-[#D6BCFA]/40 blur-3xl animate-float-slow" />
      <div className="absolute -right-10 -bottom-10 h-[400px] w-[400px] rounded-full bg-[#B794F4]/30 blur-2xl animate-float-slow" />
      <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-[#9F7AEA]/20 blur-xl animate-pulse" />
      <div className="absolute left-1/3 bottom-1/3 h-[150px] w-[150px] rounded-full bg-[#805AD5]/20 blur-xl animate-pulse" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div variants={itemVariants}>
            <BadgeHeader text="Key Features" className="mx-auto" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mb-4 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
          >
            Preserve What Matters Most
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#4a5568] md:text-xl">
            Our platform offers powerful tools to capture voices, preserve memories, and create lasting legacies.
          </motion.p>
        </motion.div>
        
{/* Tabs */}
<div className="mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-2 md:gap-4">
  {features.map((feature, i) => (
    <button
      key={feature.id}
      onClick={() => setActiveFeature(i)}
      className={cn(
        "relative z-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 md:text-base",
        activeFeature === i
          ? "bg-white text-[#6B46C1] shadow-lg"
          : "bg-white/50 text-[#4a5568] hover:bg-white/80",
      )}
    >
      {activeFeature === i && (
        <motion.span
          layoutId="activeTab"
          className="absolute inset-0 rounded-full bg-white z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{feature.title}</span>
    </button>
  ))}
</div>

        {/* Feature Panels */}
        <div className="relative mx-auto max-w-6xl">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={cn(
                "transition-opacity duration-500",
                activeFeature === idx ? "block opacity-100" : "hidden opacity-0",
              )}
            >
              <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
                {/* Text */}
                <motion.div
                  initial="hidden"
                  animate={activeFeature === idx ? "visible" : "hidden"}
                  variants={containerVariants}
                  className="order-2 md:order-1"
                >
                  <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: feature.color }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d3748] md:text-3xl">{feature.title}</h3>
                  </motion.div>
                  <motion.p variants={itemVariants} className="mb-8 text-lg leading-relaxed text-[#4a5568]">
                    {feature.description}
                  </motion.p>
                  <motion.ul variants={containerVariants} className="mb-8 space-y-4">
                    {feature.benefits.map((b, bi) => (
                      <motion.li key={bi} variants={itemVariants} className="flex items-start gap-3">
                        <div
                          className="mt-1 flex h-5 w-5 items-center justify-center rounded-full"
                          style={{ backgroundColor: feature.color }}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[#4a5568]">{b}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div variants={itemVariants}>
                    <Button
                      className="group flex items-center gap-2"
                      style={{ backgroundColor: feature.color, color: "white" }}
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Image */}
                <div className="relative order-1 flex justify-center md:order-2">
                  <div className="relative">
                    <div
                      className="absolute -left-6 -top-6 h-32 w-32 rounded-full opacity-20"
                      style={{ backgroundColor: feature.color }}
                    />
                    <div
                      className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-15"
                      style={{ backgroundColor: feature.color }}
                    />
                    <motion.div
                      initial="hidden"
                      animate={activeFeature === idx ? "visible" : "hidden"}
                      variants={phoneVariants}
                    >
                      <div
                        className="absolute -inset-4 rounded-3xl blur-xl opacity-30"
                        style={{ backgroundColor: feature.color }}
                      />
                      <Image
                        src={feature.imageSrc || "/placeholder.svg"}
                        alt={feature.title}
                        width={180}
                        height={370}
                        className="relative z-10 h-auto w-auto max-w-[180px] rounded-3xl object-contain drop-shadow-xl"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="mt-12 flex justify-center gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className="group p-1"
                aria-label={`View feature ${i + 1}`}
              >
                <div
                  className={cn(
                    "h-2 w-8 rounded-full transition-all duration-300",
                    activeFeature === i ? "bg-[#6B46C1]" : "bg-[#D6BCFA] group-hover:bg-[#9F7AEA]",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
