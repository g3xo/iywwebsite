"use client"

import React from "react"
import { Mail, MessageSquare, Linkedin } from "lucide-react"
import { BadgeHeader } from "@/components/ui/badge-header"
import { GradientButton } from "@/components/ui/gradient-button"
import BetaWaitlist from "@/components/beta-waitlist"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5" />
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#6B46C1]/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#6B46C1]/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <BadgeHeader text="Get In Touch" className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d3748] leading-tight">
            We'd Love to Hear <br />
            <span className="relative inline-block">
              From You
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C31.6667 3 102.4 -6.8 197 9" stroke="#6B46C1" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-4 text-xl text-[#4a5568] max-w-3xl mx-auto">
            Have questions about our services or want to learn more? Reach out through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-xl border-t-4 border-[#6B46C1] transition-transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative z-10 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] p-4 shadow-lg transition-transform group-hover:rotate-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2d3748]">Email</h3>
              <p className="mb-1 text-[#4a5568]">inyourworld360@gmail.com</p>
              <p className="mb-6 text-sm text-[#4a5568]">For general inquiries, partnerships, or support.</p>
              <GradientButton onClick={() => window.location.href = 'mailto:inyourworld360@gmail.com'}>
                Send Email
              </GradientButton>
            </div>
          </div>

          {/* Discord */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-xl border-t-4 border-[#7C3AED] transition-transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative z-10 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] p-4 shadow-lg transition-transform group-hover:rotate-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2d3748]">Discord</h3>
              <p className="mb-1 text-[#4a5568]">In Your World Community</p>
              <p className="mb-6 text-sm text-[#4a5568]">Join our server for real-time support.</p>
              <GradientButton onClick={() => window.open('https://discord.gg/WygYUADjqZ', '_blank')}>
                Join Discord
              </GradientButton>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-xl border-t-4 border-[#9F7AEA] transition-transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative z-10 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#9F7AEA] to-[#7C3AED] p-4 shadow-lg transition-transform group-hover:rotate-6">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2d3748]">LinkedIn</h3>
              <p className="mb-1 text-[#4a5568]">In Your World</p>
              <p className="mb-6 text-sm text-[#4a5568]">Follow our company page for updates.</p>
              <GradientButton onClick={() => window.open('https://www.linkedin.com/company/inyourworld', '_blank')}>
                Connect
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-16 rounded-xl bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] p-8 shadow-lg text-center">
          <h3 className="mb-4 text-2xl font-bold text-[#2d3748]">We're Here For You</h3>
          <p className="mb-4 text-[#4a5568]">We typically respond within 24 hours and are dedicated to providing the best support.</p>
          <p className="text-[#4a5568]">Whether you have questions, need technical help, or want partnerships—we're ready to assist!</p>
        </div>
      </div>

      {/* Beta Waitlist Section */}
      <div id="waitlist-section">
        <BetaWaitlist />
      </div>
    </div>
  )
}
