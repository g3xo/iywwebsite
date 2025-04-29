import BetaWaitlist from "@/components/beta-waitlist"
import SeamlessAISection from "@/components/seamless-ai-section"
import VoiceMemoriesSection from "@/components/voice-memories-section"
import MagicalHero from "@/components/magical-hero"
import FloatingElement from "@/components/floating-element"
import DailyPrompt from "@/components/daily-prompt/daily-prompt"
import Head from "next/head"
import { BadgeHeader } from "@/components/badge-header"
import KeyFeaturesSection from "@/components/key-features-section"

const ACCENT = "#6B46C1"
const ACCENT_LIGHT = "#ECE0FF"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="In Your World - Preserving voices and memories for generations" />
      </Head>

      {/* Magical Hero Section */}
      <MagicalHero />

      {/* Problem Statement Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle, ${ACCENT_LIGHT}33 0%, transparent 70%)`,
          }}
        />

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">
              The Innovation Behind In Your World
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed">
              We’re revolutionizing how families preserve their most precious asset, their shared memories and voices, through a seamless blend of cutting‑edge technology and human connection.
            </p>

            <div className="grid gap-6 mt-8 md:grid-cols-3 w-full">
              <FloatingElement delay={0}>
                <div
                  className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg h-[200px] flex flex-col"
                  style={{ backgroundColor: ACCENT_LIGHT }}
                >
                  <h3 className="font-bold text-[#2d3748] mb-2">Gamified Memory Preservation</h3>
                  <p className="text-sm text-[#4a5568] flex-grow">
                    We've transformed recording memories into an engaging daily ritual that builds a living legacy.
                  </p>
                </div>
              </FloatingElement>

              <FloatingElement delay={0.2}>
                <div
                  className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg h-[200px] flex flex-col"
                  style={{ backgroundColor: ACCENT_LIGHT }}
                >
                  <h3 className="font-bold text-[#2d3748] mb-2">AI-Powered Connection</h3>
                  <p className="text-sm text-[#4a5568] flex-grow">
                    Our platform breaks language barriers and preserves emotional nuance through Seamless AI.
                  </p>
                </div>
              </FloatingElement>

              <FloatingElement delay={0.4}>
                <div
                  className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg h-[200px] flex flex-col"
                  style={{ backgroundColor: ACCENT_LIGHT }}
                >
                  <h3 className="font-bold text-[#2d3748] mb-2">Secure Legacy Building</h3>
                  <p className="text-sm text-[#4a5568] flex-grow">
                    Create a digital time capsule with your voice, stories, and wisdom for future generations.
                  </p>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section (uniform accent) */}
      <KeyFeaturesSection />

      {/* Voice Memories Section */}
      <VoiceMemoriesSection />

      {/* Seamless AI Section */}
      <SeamlessAISection />

      {/* Daily Prompt Demo Section */}
      <DailyPrompt />

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle, ${ACCENT_LIGHT}33 0%, transparent 70%)`,
          }}
        />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <BadgeHeader text="Testimonials" className="mx-auto" />
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">What Our Users Say</h2>
              <p className="max-w-[900px] text-[#4a5568] md:text-xl">
                Real stories from families whose voices we’ve preserved.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div
              className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <p className="italic text-[#4a5568] mb-4">
                “Thanks to In Your World, I can revisit my grandmother’s voice anytime.”
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-[#2d3748]">Michael R.</p>
                  <p className="text-xs" style={{ color: ACCENT }}>
                    Age 62, Seattle
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <p className="italic text-[#4a5568] mb-4">
                “The daily prompts helped me and my kids share stories we’d never talked about before.”
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-[#2d3748]">Sara L.</p>
                  <p className="text-xs" style={{ color: ACCENT }}>
                    Age 37, Austin
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: ACCENT_LIGHT }}
            >
              <p className="italic text-[#4a5568] mb-4">
                “I created a legacy letter for my daughter—she’ll have my advice and memories forever.”
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-[#2d3748]">Anthony W.</p>
                  <p className="text-xs" style={{ color: ACCENT }}>
                    Age 45, New York
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Waitlist Section */}
      <section id="waitlist-section">
        <BetaWaitlist />
      </section>
    </div>
  )
}
