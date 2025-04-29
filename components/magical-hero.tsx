"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import FloatingElement from "@/components/floating-element"
import { BadgeHeader } from "@/components/ui/badge-header"
import { GradientButton } from "@/components/ui/gradient-button"

export default function MagicalHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#ECE0FF] to-[#DCE8FF] relative overflow-hidden">
      {/* Magical background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Floating stars */}
        <div
          className="absolute top-20 left-[15%] text-white text-2xl animate-float"
          style={{ animationDuration: "3s" }}
        >
          ✦
        </div>
        <div
          className="absolute top-[30%] left-[10%] text-white text-lg animate-float"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        >
          ✧
        </div>
        <div
          className="absolute top-[60%] left-[20%] text-white text-xl animate-float"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        >
          ✦
        </div>
        <div
          className="absolute top-[20%] right-[15%] text-white text-xl animate-float"
          style={{ animationDuration: "4.5s", animationDelay: "0.7s" }}
        >
          ✧
        </div>
        <div
          className="absolute top-[50%] right-[10%] text-white text-2xl animate-float"
          style={{ animationDuration: "3.5s", animationDelay: "1.2s" }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-[20%] right-[20%] text-white text-lg animate-float"
          style={{ animationDuration: "5.5s", animationDelay: "0.3s" }}
        >
          ✧
        </div>
        <div
          className="absolute bottom-[30%] left-[15%] text-white text-xl animate-float"
          style={{ animationDuration: "4.2s", animationDelay: "0.9s" }}
        >
          ✦
        </div>

        {/* White glowing circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Sparkles */}
        <div
          className="absolute top-20 right-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-ping"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-ping"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 perspective-1000">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 transform-gpu">
            <div className="space-y-2">
              {/* Enhanced badge-style header with multi-color outline */}
              <BadgeHeader text="Preserving what matters most" />

              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#2d3748] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                Turn Memories Into{" "}
                <span className="text-[#6B46C1] relative inline-block transform hover:scale-105 transition-transform duration-300 hover:rotate-1">
                  Legacies
                  {/* Enhanced 3D underline with gradient */}
                  <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-[#6B46C1]/80 via-[#9F7AEA] to-[#6B46C1]/80 rounded-full shadow-[0_2px_6px_rgba(107,70,193,0.6)]"></div>
                  <div className="absolute -inset-1 bg-[#6B46C1]/5 blur-md rounded-lg -z-10"></div>
                </span>{" "}
                <span className="relative inline-block transform transition-all duration-500 hover:translate-y-[-2px]">
                  that last forever.
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#ECE0FF]/40 to-transparent blur-md -z-10"></div>
                </span>
              </h1>
              <p className="max-w-[600px] text-[#4a5568] md:text-xl">
                A seamless blend of voice preservation, legacy planning, and human emotional connection that ensures the
                voices and stories of your loved ones live on for generations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Enhanced 3D Join Waitlist button */}
              <GradientButton
                size="lg"
                className="w-full sm:w-64"
                onClick={() => {
                  const waitlistSection = document.getElementById("waitlist-section")
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Join Waitlist{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </GradientButton>
            </div>
          </div>
          <div className="flex items-center justify-center perspective-1000">
            <FloatingElement>
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center transform-gpu hover:rotate-y-12 transition-transform duration-700">
                {/* Enhanced 3D shadow and glow effects */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Multiple layered glows for depth */}
                  <div className="absolute w-full h-full rounded-full bg-[#6B46C1]/30 filter blur-2xl transform-gpu scale-110"></div>
                  <div className="absolute w-[90%] h-[90%] rounded-full bg-[#9F7AEA]/20 filter blur-xl transform-gpu scale-105 animate-pulse-slow"></div>
                  <div className="absolute w-[80%] h-[80%] rounded-full bg-white/40 filter blur-lg"></div>

                  {/* Enhanced 3D mascot with shadows and highlights */}
                  <div className="relative transform hover:rotate-3 transition-transform duration-500 hover:scale-105">
                    {/* Outer glow */}
                    <div className="absolute -inset-10 bg-gradient-to-r from-[#6B46C1]/40 to-[#9F7AEA]/40 rounded-full blur-2xl opacity-80"></div>

                    {/* Inner glow */}
                    <div className="absolute -inset-5 bg-white/40 rounded-full blur-md"></div>

                    {/* Main image with enhanced shadow */}
                    <div className="relative transform-gpu transition-all duration-500 hover:translate-z-10">
                      <Image
                        src="https://media-hosting.imagekit.io/ab3d581935dd4c00/logo.png?Expires=1838497850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=faYBQaLljDuPtGxXjKMxbNZWqHmmy7DkqPwzNasujRB2ngIactQ5lplU05ZizfmW6JrxbIQGszzYs2GH~71DpShQVtANsj1CBMSfcXFMdyLHRMWb3~85tGgLx~CUg7aZ7lE8xc574UgnjLwmg8f8aaNNvT0h28pkT8VagHo3jbNqJ84g-LH7omPn1s5jUj-OAV2YhOJmBHDSzwbEHWqMiSv0fe7ON8fDIWAFvIdXLHl8vywSBh86FXU6xdnCGMFtZbMcHEMSoIOmm2bCi3IPMLfH845z8-OrsM1TZapFjsRtPkn0UwNAPMiz5ELWb5iy8nqXxQ9jykCfTuifa4Ag7g__"
                        alt="In Your World Logo"
                        width={320}
                        height={320}
                        className="object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(107,70,193,0.9)] transform-gpu hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced 3D stars around the mascot */}
                <div
                  className="absolute -top-4 left-1/4 text-white text-sm animate-float drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  style={{ animationDuration: "3s", animationDelay: "0.2s" }}
                >
                  ✦
                </div>
                <div
                  className="absolute top-1/4 -right-4 text-white text-sm animate-float drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  style={{ animationDuration: "4s", animationDelay: "0.8s" }}
                >
                  ✧
                </div>
                <div
                  className="absolute -bottom-2 right-1/4 text-white text-sm animate-float drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
                >
                  ✦
                </div>
                <div
                  className="absolute bottom-1/4 -left-2 text-white text-sm animate-float drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  style={{ animationDuration: "4.2s", animationDelay: "0.5s" }}
                >
                  ✧
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  )
}
