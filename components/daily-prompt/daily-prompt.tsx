"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Globe } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import VoiceRecorder from "./voice-recorder"
import TranslationSelector from "./translation-selector"
import { prompts } from "./prompt-data"
import { BadgeHeader } from "@/components/ui/badge-header"
import { GradientButton } from "@/components/ui/gradient-button"

export default function DailyPrompt() {
  const [currentPrompt, setCurrentPrompt] = useState("")
  const [responses, setResponses] = useState<{ audio: string; date: string }[]>([])
  const [showTranslation, setShowTranslation] = useState(false)
  const [targetLanguage, setTargetLanguage] = useState("Spanish")

  // Get today's prompt based on the date
  useEffect(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    const promptIndex = dayOfYear % prompts.length
    setCurrentPrompt(prompts[promptIndex])

    // Load saved responses from localStorage
    const savedResponses = localStorage.getItem("dailyPromptResponses")
    if (savedResponses) {
      setResponses(JSON.parse(savedResponses))
    }
  }, [])

  const handleSaveRecording = (audioUrl: string) => {
    const newResponse = {
      audio: audioUrl,
      date: new Date().toISOString(),
    }

    const updatedResponses = [...responses, newResponse]
    setResponses(updatedResponses)

    // Save to localStorage
    localStorage.setItem("dailyPromptResponses", JSON.stringify(updatedResponses))

    toast({
      title: "Response saved!",
      description: "Your voice response has been saved successfully.",
    })
  }

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation)
  }

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            {/* Enhanced 3D Badge with multi-color outline */}
            <BadgeHeader text="Daily Prompt" className="mx-auto" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2d3748]">
              Today's Conversation Starter
            </h2>
            <p className="text-[#4a5568] md:text-lg">
              Record your response and share it with your family to keep memories alive.
            </p>
          </div>

          {/* Enhanced 3D Card Effect */}
          <Card className="border-none shadow-lg hover:shadow-xl overflow-hidden relative transform hover:scale-[1.01] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ECE0FF]/30 via-transparent to-[#DCE8FF]/30 pointer-events-none"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6B46C1]/5 via-[#9F7AEA]/5 to-[#6B46C1]/5 blur-md opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            <div className="absolute top-0 right-0 p-4">
              {/* Enhanced 3D Globe Button */}
              <GradientButton
                variant="default"
                size="icon"
                onClick={toggleTranslation}
                className="h-10 w-10 rounded-full p-0"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle translation</span>
              </GradientButton>
            </div>

            <CardHeader className="bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] pb-8 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>

              <CardTitle className="text-2xl text-center text-[#2d3748] relative z-10">{currentPrompt}</CardTitle>
              {showTranslation && (
                <div className="mt-4 relative z-10">
                  <TranslationSelector
                    text={currentPrompt}
                    language={targetLanguage}
                    onLanguageChange={setTargetLanguage}
                  />
                </div>
              )}
            </CardHeader>

            <CardContent className="pt-8">
              <VoiceRecorder onSave={handleSaveRecording} />
            </CardContent>

            {responses.length > 0 && (
              <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                <CardDescription>Previous Responses</CardDescription>
                <div className="w-full space-y-2">
                  {responses
                    .slice(-3)
                    .reverse()
                    .map((response, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-[#ECE0FF]/20 rounded-md relative overflow-hidden group"
                      >
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF]/0 to-[#ECE0FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="flex items-center relative z-10">
                          {/* 3D Mic Icon */}
                          <div className="relative h-8 w-8 mr-3">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2]/80 to-[#6B46C1]/80 rounded-full transform scale-90"></div>
                            <div className="absolute inset-0 bg-[#ECE0FF] rounded-full flex items-center justify-center">
                              <Mic className="h-4 w-4 text-[#6B46C1]" />
                            </div>

                            {/* Multi-color outline effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-0 group-hover:opacity-20 scale-[1.03] rotate-[5deg] transition-opacity duration-500"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-0 group-hover:opacity-20 scale-[1.06] rotate-[-5deg] transition-opacity duration-500"></div>
                          </div>
                          <span className="text-sm text-[#4a5568]">{new Date(response.date).toLocaleDateString()}</span>
                        </div>
                        <audio src={response.audio} controls className="h-8 relative z-10" />
                      </div>
                    ))}
                </div>
              </CardFooter>
            )}
          </Card>

          <div className="text-center text-sm text-[#4a5568]">
            <p>Prompts change daily. Record your responses to build a collection of family memories.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
