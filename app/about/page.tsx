"use client"

import Link from "next/link"
import { GradientButton } from "@/components/ui/gradient-button"
import { BadgeHeader } from "@/components/ui/badge-header"
import { Leaf, Heart, Globe, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5" />
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#6B46C1]/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#6B46C1]/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
            <BadgeHeader text="Our Story" className="mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2d3748] leading-tight">
              Preserving Voices,
              <br />
              <span className="relative inline-block">
                Creating Legacies
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 9C47.6667 3 154.4 -6.8 297 9" stroke="#6B46C1" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto">
              We're on a mission to help families preserve their most precious asset—their shared memories and
              voices—through a seamless blend of cutting-edge technology and human connection.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <BadgeHeader text="Our Mission" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">Why We Started In Your World</h2>
          <div className="space-y-4 text-lg text-[#4a5568] leading-relaxed">
            <p>
              In Your World was founded with a simple yet profound mission: to help people preserve their most precious
              memories and transform them into legacies that can be cherished for generations to come.
            </p>
            <p>
              We understand that memories are more than just moments in time; they're the stories that define our lives,
              the connections we share with loved ones, and the heritage we leave behind.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-[#ECE0FF]/30 to-[#DCE8FF]/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BadgeHeader text="Our Values" className="mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mt-4">What Drives Us Forward</h2>
            <p className="text-lg text-[#4a5568] mt-4">
              Our core values guide everything we do, from product development to customer interactions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#ECE0FF] rounded-full flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-[#6B46C1]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-2">Legacy Safekeeping</h3>
              <p className="text-[#4a5568]">
                We believe in cherishing voices and preserving memories for generations, creating a lasting legacy that
                transcends time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#ECE0FF] rounded-full flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-[#6B46C1]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-2">Bridging Language Barriers</h3>
              <p className="text-[#4a5568]">
                We're committed to ensuring every story is heard, no matter the language, connecting families across
                cultures and generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#ECE0FF] rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-[#6B46C1]" />
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-2">Emotional Connections</h3>
              <p className="text-[#4a5568]">
                We focus on strengthening family bonds through shared stories and voices, creating deeper emotional
                connections that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BadgeHeader text="Our Team" className="mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mt-4">Meet the Founders</h2>
          <p className="text-lg text-[#4a5568] mt-4">
            The passionate minds behind In Your World, dedicated to helping you preserve what matters most.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Founder 1 */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <img
                src="/images/grace-yim.jpeg"
                alt="Grace Yim"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2d3748]">Grace Yim</h3>
            <p className="text-[#6B46C1] font-medium mb-3">Growth Operations & Marketing Strategist</p>
            <p className="text-[#4a5568]">
              Product marketing innovator with experience at Red Bull and Roblox. Grace blends creative storytelling and
              tactical execution to drive growth and build community.
            </p>
          </div>
          {/* Founder 2 */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <img
                src="/images/medha-rawat.jpeg"
                alt="Medha Rawat"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2d3748]">Medha Rawat</h3>
            <p className="text-[#6B46C1] font-medium mb-3">UX Designer & Full-Stack Developer</p>
            <p className="text-[#4a5568]">
              Human-centered design researcher and dev focused on empathy-driven product experiences for families.
            </p>
          </div>
          {/* Founder 3 */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <img
                src="/images/grace-shin.jpeg"
                alt="Grace Shin"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2d3748]">Grace Shin</h3>
            <p className="text-[#6B46C1] font-medium mb-3">Full-Stack Developer & Product Manager</p>
            <p className="text-[#4a5568]">
              Dual major in Informatics & Business, bridging product vision with engineering expertise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] relative overflow-hidden scroll-smooth">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-6">
              Ready to Preserve Your Family's Legacy?
            </h2>
            <p className="text-lg text-[#4a5568] mb-8">
              Join our waitlist today and be among the first to experience the future of memory preservation.
            </p>
            <Link href="/#waitlist-section">
              <GradientButton size="lg" className="px-8 py-6 text-lg">
                Join Our Waitlist
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
