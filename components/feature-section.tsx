"use client"

import { Sparkles, MessageSquare, Globe, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"
import { BadgeHeader } from "@/components/ui/badge-header"

export default function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const sectionElement = document.getElementById("features-section")

      if (sectionElement) {
        const sectionPosition = sectionElement.offsetTop

        if (scrollPosition > sectionPosition) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="features-section"
      className="w-full py-12 md:py-24 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <BadgeHeader text="Key Features" className="mx-auto" />
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">Preserve What Matters Most</h2>
          <p className="max-w-[900px] text-[#4a5568] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform offers tools to capture voices, preserve memories, and create lasting legacies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: Daily Prompts */}
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-white" />}
            title="Daily Prompts"
            description="Capture meaningful conversations through daily prompts that inspire authentic voice recordings."
            delay={0}
            isVisible={isVisible}
          />

          {/* Feature 2: Translation */}
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-white" />}
            title="Translation"
            description="Break language barriers with AI, preserving the emotional essence of voice across generations and cultures."
            delay={100}
            isVisible={isVisible}
          />

          {/* Feature 3: Memory Tree */}
          <FeatureCard
            icon={<Sparkles className="h-8 w-8 text-white" />}
            title="Memory Tree"
            description="Watch your family legacy grow with each memory you capture, creating a living monument to your shared history."
            delay={200}
            isVisible={isVisible}
          />

          {/* Feature 4: Legacy Letter */}
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-white" />}
            title="Legacy Letter"
            description="Craft your ethical legacy—a blend of wisdom, values, and personal stories for future generations."
            delay={300}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

// Helper component for feature cards
function FeatureCard({ icon, title, description, delay, isVisible }) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* 3D Icon */}
      <div className="relative h-16 w-16 mb-4 transform group-hover:rotate-6 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#9F7AEA] to-[#7C3AED] rounded-full transform scale-80 shadow-lg"></div>
        <div className="absolute inset-0 bg-[#ECE0FF] rounded-full flex items-center justify-center">{icon}</div>

        {/* Multi-color outline effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-0 group-hover:opacity-20 scale-[1.03] rotate-[5deg] transition-opacity duration-500"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-0 group-hover:opacity-20 scale-[1.06] rotate-[-5deg] transition-opacity duration-500"></div>
      </div>

      <h3 className="text-xl font-bold text-[#2d3748] mb-2">{title}</h3>
      <p className="text-[#4a5568]">{description}</p>
    </div>
  )
}
