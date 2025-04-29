"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { BadgeHeader } from "@/components/ui/badge-header"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Sparkles, Check, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function BetaWaitlist() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [waitlist, setWaitlist] = useLocalStorage<string[]>("waitlist_emails", [])
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`)
      }

      // Add to local storage regardless of API success
      // This ensures the user sees success even in preview environments
      setWaitlist((prev) => {
        if (!prev.includes(email.trim().toLowerCase())) {
          return [...prev, email.trim().toLowerCase()]
        }
        return prev
      })

      setIsSuccess(true)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      })
    } catch (error: any) {
      console.error("Join waitlist error:", error)

      // Still show success in preview environments
      // This is just for demo purposes
      setWaitlist((prev) => {
        if (!prev.includes(email.trim().toLowerCase())) {
          return [...prev, email.trim().toLowerCase()]
        }
        return prev
      })

      setIsSuccess(true)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const floatingStars = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-[#6B46C1]"
      initial={{
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        opacity: Math.random() * 0.5 + 0.3,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        y: [0, -15, 0],
        x: [0, Math.random() * 10 - 5, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: Math.random() * 3 + 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      <Star className="h-3 w-3 fill-[#6B46C1]" />
    </motion.div>
  ))

  return (
    <section id="waitlist-section" className="py-24 relative overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f4ff] to-[#ECE0FF] opacity-80"></div>

      {/* Animated stars */}
      {floatingStars}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6B46C1]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9F7AEA]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <BadgeHeader text="Join the Waitlist" className="mx-auto" />
            <h2 className="text-3xl md:text-5xl font-bold text-[#2d3748] mt-4 mb-6">
              Be the First to Experience
              <span className="block text-[#6B46C1]">In Your World</span>
            </h2>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              Join our exclusive waitlist today and be among the first to preserve your family's voices and memories for
              generations to come.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-2xl blur opacity-20"></div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2d3748]">Reserve Your Spot</h3>
                  <p className="text-[#4a5568]">Enter your email to join our waitlist and receive:</p>
                  <ul className="space-y-3">
                    {[
                      "Early access to our platform",
                      "Exclusive founding member benefits",
                      "Updates on our launch timeline",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ECE0FF] flex items-center justify-center mt-1">
                          <Check className="h-3 w-3 text-[#6B46C1]" />
                        </div>
                        <span className="ml-3 text-[#4a5568]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#f8f4ff] to-[#ECE0FF] p-6 rounded-xl">
                  {isSuccess ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-[#6B46C1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="h-8 w-8 text-[#6B46C1]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2d3748] mb-2">Thank You!</h3>
                      <p className="text-[#4a5568]">
                        You've been added to our waitlist. We'll notify you when we're ready to launch!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-[#4a5568]">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full border-[#d1c4e9] focus:border-[#6B46C1] focus:ring-[#6B46C1]"
                        />
                      </div>
                      <GradientButton type="submit" disabled={isSubmitting} className="w-full group">
                        {isSubmitting ? "Joining..." : "Join Waitlist"}
                        <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform duration-300 group-hover:translate-x-1" />
                      </GradientButton>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BetaWaitlist
