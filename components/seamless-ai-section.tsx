"use client"

import { ArrowRight } from "lucide-react"
import { BadgeHeader } from "@/components/ui/badge-header"
import { GradientButton } from "@/components/ui/gradient-button"

export default function SeamlessAISection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            {/* Enhanced 3D Badge */}
            <BadgeHeader text="Powered by Meta's Seamless AI" />

            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">
              Live Voice-to-Voice Translation
            </h2>
            <p className="text-[#4a5568] md:text-lg">
              Our platform integrates Meta's cutting-edge Seamless AI technology to provide real-time voice-to-voice
              translation across multiple languages.
            </p>
            <ul className="space-y-2 text-[#4a5568]">
              <li className="flex items-start">
                {/* Enhanced 3D Checkmark */}
                <div className="relative w-6 h-6 mr-2 mt-0.5 transform hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-md"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#8A63D2]/30 to-[#6B46C1]/30 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white drop-shadow-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <span>Preserve stories in their original language while making them accessible to everyone</span>
              </li>
              <li className="flex items-start">
                {/* Enhanced 3D Checkmark */}
                <div className="relative w-6 h-6 mr-2 mt-0.5 transform hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-md"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#8A63D2]/30 to-[#6B46C1]/30 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white drop-shadow-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <span>Connect with family members across language barriers in natural conversation</span>
              </li>
              <li className="flex items-start">
                {/* Enhanced 3D Checkmark */}
                <div className="relative w-6 h-6 mr-2 mt-0.5 transform hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 shadow-md"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#8A63D2]/30 to-[#6B46C1]/30 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white drop-shadow-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <span>Experience seamless translation that preserves tone, emotion, and vocal nuances</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Enhanced 3D Button */}
              <GradientButton
                onClick={() =>
                  window.open("https://ai.meta.com/research/seamless-communication/", "_blank", "noopener,noreferrer")
                }
              >
                <div className="flex items-center">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </GradientButton>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-20"></div>
            <div className="relative bg-white p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* 3D Mic Icon */}
                    <div className="relative h-10 w-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90"></div>
                      <div className="absolute inset-0 bg-[#ECE0FF] rounded-full flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-[#6B46C1]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          ></path>
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 h-2 w-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Grandma (Spanish)</p>
                      <p className="text-xs text-[#6B46C1]">Original Voice</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Just now</div>
                </div>
                <div className="p-3 bg-[#ECE0FF] bg-opacity-30 rounded-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECE0FF]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <p className="text-sm italic relative z-10">"Te quiero contar sobre cuando era niña en México..."</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* 3D Translation Icon */}
                    <div className="relative h-10 w-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90"></div>
                      <div className="absolute inset-0 bg-[#DCE8FF] rounded-full flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-[#6B46C1]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="absolute -bottom-1 -left-1 h-2 w-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Translation (English)</p>
                      <p className="text-xs text-[#6B46C1]">Seamless AI</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[#DCE8FF] bg-opacity-30 rounded-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DCE8FF]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <p className="text-sm relative z-10">
                    "I want to tell you about when I was a little girl in Mexico..."
                  </p>
                </div>
                <div className="text-xs text-center text-gray-500 mt-2">
                  Voice tone and emotion preserved in translation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
