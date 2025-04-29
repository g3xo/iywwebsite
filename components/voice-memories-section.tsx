import { Mic, Heart, Play } from "lucide-react"
import { BadgeHeader } from "@/components/ui/badge-header"

export default function VoiceMemoriesSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#ECE0FF]/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <BadgeHeader text="Voice Memories" className="mx-auto" />
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748] mb-2">
            The Power of Voice Preservation
          </h2>
          <p className="mt-4 text-[#4a5568] md:text-lg">
            A voice carries emotion, personality, and connection that text alone cannot capture. Our platform focuses on
            preserving these irreplaceable voice memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6B46C1]/5 via-[#9F7AEA]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>

            {/* Enhanced 3D Mic Icon */}
            <div className="relative h-20 w-20 mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-500">
              {/* Layered background circles for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-lg group-hover:shadow-xl transition-shadow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#9F7AEA] to-[#7C3AED] rounded-full transform scale-80 shadow-lg group-hover:shadow-xl transition-shadow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECE0FF] to-white rounded-full transform scale-75 flex items-center justify-center shadow-inner">
                <Mic className="h-10 w-10 text-[#6B46C1] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-0 group-hover:opacity-20 scale-[1.03] rotate-[5deg] transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-0 group-hover:opacity-20 scale-[1.06] rotate-[-5deg] transition-opacity duration-500"></div>

              {/* Highlight spots */}
              <div className="absolute top-1 right-1 h-4 w-4 bg-white rounded-full shadow-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-white rounded-full animate-pulse group-hover:animate-ping"></div>

              {/* Outer glow */}
              <div className="absolute -inset-3 bg-[#6B46C1]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h3 className="text-xl font-bold text-[#2d3748] mb-2 text-center">Capture Authentic Voices</h3>
            <p className="text-[#4a5568]">
              Record and preserve the unique qualities of your loved ones' voices—their laughter, their accent, their
              way of telling stories.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6B46C1]/5 via-[#9F7AEA]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>

            {/* Enhanced 3D Heart Icon */}
            <div className="relative h-20 w-20 mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-500">
              {/* Layered background circles for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-lg group-hover:shadow-xl transition-shadow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#9F7AEA] to-[#7C3AED] rounded-full transform scale-80 shadow-lg group-hover:shadow-xl transition-shadow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECE0FF] to-white rounded-full transform scale-75 flex items-center justify-center shadow-inner">
                <Heart className="h-10 w-10 text-[#6B46C1] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-0 group-hover:opacity-20 scale-[1.03] rotate-[5deg] transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-0 group-hover:opacity-20 scale-[1.06] rotate-[-5deg] transition-opacity duration-500"></div>

              {/* Highlight spots */}
              <div className="absolute top-1 right-1 h-4 w-4 bg-white rounded-full shadow-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-white rounded-full animate-pulse group-hover:animate-ping"></div>

              {/* Outer glow */}
              <div className="absolute -inset-3 bg-[#6B46C1]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h3 className="text-xl font-bold text-[#2d3748] mb-2 text-center">Emotional Connection</h3>
            <p className="text-[#4a5568]">
              The sound of a loved one's voice triggers powerful emotional responses and memories that written words
              simply cannot replicate.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6B46C1]/5 via-[#9F7AEA]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>

            {/* Enhanced 3D Play Icon */}
            <div className="relative h-20 w-20 mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-500">
              {/* Layered background circles for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-lg group-hover:shadow-xl transition-shadow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#9F7AEA] to-[#7C3AED] rounded-full transform scale-80 shadow-lg group-hover:shadow-xl transition-shadow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECE0FF] to-white rounded-full transform scale-75 flex items-center justify-center shadow-inner">
                <Play className="h-10 w-10 text-[#6B46C1] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500 ml-1" />
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-0 group-hover:opacity-20 scale-[1.03] rotate-[5deg] transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-0 group-hover:opacity-20 scale-[1.06] rotate-[-5deg] transition-opacity duration-500"></div>

              {/* Highlight spots */}
              <div className="absolute top-1 right-1 h-4 w-4 bg-white rounded-full shadow-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-white rounded-full animate-pulse group-hover:animate-ping"></div>

              {/* Outer glow */}
              <div className="absolute -inset-3 bg-[#6B46C1]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h3 className="text-xl font-bold text-[#2d3748] mb-2 text-center">Replay Anytime</h3>
            <p className="text-[#4a5568]">
              Access your voice memory collection anytime, anywhere—letting you reconnect with loved ones' voices
              whenever you need comfort or connection.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-[#ECE0FF]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-bold text-[#2d3748] mb-2">Did you know?</h3>
              <p className="text-[#4a5568] mb-4">Research shows that hearing a loved one's voice can:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6B46C1] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Reduce feelings of isolation and loneliness</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6B46C1] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Trigger detailed memories more effectively than photos</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-[#6B46C1] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Provide comfort during the grieving process</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              {/* 3D Mic Animation */}
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] opacity-10 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-[#ECE0FF] flex items-center justify-center">
                  <div className="relative">
                    <Mic className="h-16 w-16 text-[#6B46C1] opacity-80" />
                    <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Multi-color outline effect */}
                <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-20"></div>
                <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-20 scale-[1.03] rotate-[5deg]"></div>
                <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-20 scale-[1.06] rotate-[-5deg]"></div>

                <div className="absolute -top-2 -right-2 h-4 w-4 bg-white rounded-full shadow-md"></div>
                <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
