"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-r from-[#DCE8FF] to-[#ECE0FF] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-60"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`flex flex-col items-start justify-center space-y-4 text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm md:text-base text-[#6B46C1] font-medium">Preserving what matters most</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#2d3748]">
              Turn Memories Into <span className="text-[#6B46C1]">Legacies</span>
              <br />
              that last forever.
            </h1>
            <p className="max-w-[600px] text-[#4a5568] md:text-xl/relaxed">
              A seamless blend of voice preservation, legacy planning, and human emotional connection that ensures the
              voices and stories of your loved ones live on for generations.
            </p>
            <div className="flex flex-row space-x-4">
              <Link href="#waitlist-section">
                <Button className="bg-[#6B46C1] hover:bg-[#553C9A] text-white px-8 py-2.5 rounded-md w-full md:w-auto">
                  Join Waitlist <span className="ml-2">→</span>
                </Button>
              </Link>
              <Link
                href="https://apps.apple.com/us/app/in-your-world/id6744776315?platform=iphone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#6B46C1] text-white font-medium hover:bg-[#553c9a] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
                Download iOS App
              </Link>
            </div>
          </div>
          <div
            className={`flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              {/* Mascot Character */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IYW%20linkedin%20glo-ABM04rpYj77QltxWtCgKLUkOlsDrfe.png"
                alt="In Your World mascot character"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
