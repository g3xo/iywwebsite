"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, StopCircle, Play, Pause, Save, Trash2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface VoiceRecorderProps {
  onSave: (audioUrl: string) => void
}

export default function VoiceRecorder({ onSave }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [audioUrl])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      mediaRecorderRef.current = new MediaRecorder(stream)
      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)

        // Stop all tracks from the stream
        stream.getTracks().forEach((track) => track.stop())
      }

      // Start recording
      mediaRecorderRef.current.start()
      setIsRecording(true)
      setRecordingTime(0)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } catch (error) {
      console.error("Error accessing microphone:", error)
      toast({
        title: "Microphone access denied",
        description: "Please allow microphone access to record your response.",
        variant: "destructive",
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const togglePlayback = () => {
    if (!audioRef.current || !audioUrl) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleSave = () => {
    if (audioUrl) {
      onSave(audioUrl)
      setAudioUrl(null)
    }
  }

  const handleDiscard = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
      setAudioUrl(null)
    }
  }

  // Handle audio playback events
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false)
    }
  }, [audioUrl])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-6">
      {audioUrl && <audio ref={audioRef} src={audioUrl} className="hidden" />}

      <div className="flex flex-col items-center justify-center space-y-4">
        {isRecording ? (
          <>
            {/* Enhanced 3D Recording Animation */}
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse"></div>
              <div
                className="absolute -inset-2 bg-red-500/10 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="absolute inset-2 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center shadow-inner">
                <Mic className="h-10 w-10 text-red-500 drop-shadow-md" />
              </div>
              <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-0 border-4 border-red-500/30 rounded-full animate-spin-slow"></div>
              <div
                className="absolute -inset-4 bg-red-500/5 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div className="text-lg font-medium">{formatTime(recordingTime)}</div>
            {/* Enhanced 3D Stop Button */}
            <Button
              onClick={stopRecording}
              variant="destructive"
              size="lg"
              className="rounded-full h-12 w-12 p-0 relative overflow-hidden group shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full group-hover:from-red-500 group-hover:to-red-700 transition-colors duration-300"></div>
              <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <StopCircle className="h-6 w-6 drop-shadow-sm" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </>
        ) : audioUrl ? (
          <div className="w-full space-y-6">
            <div className="flex items-center justify-center space-x-4">
              {/* 3D Play/Pause Button */}
              <Button
                onClick={togglePlayback}
                variant="outline"
                size="lg"
                className="rounded-full h-12 w-12 p-0 border-[#6B46C1] text-[#6B46C1] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#ECE0FF]/0 group-hover:bg-[#ECE0FF]/50 rounded-full transition-colors duration-300"></div>
                <div className="relative z-10">
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </div>
              </Button>
              <div className="h-1 flex-grow bg-gray-200 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#6B46C1] to-[#8A63D2] rounded-full"
                  style={{ width: isPlaying ? "100%" : "0%", transition: "width 0.1s linear" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              {/* 3D Save Button */}
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-[#6B46C1] to-[#8A63D2] hover:from-[#553C9A] hover:to-[#6B46C1] relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center">
                  <Save className="h-4 w-4 mr-2" />
                  Save Response
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              {/* 3D Discard Button */}
              <Button
                onClick={handleDiscard}
                variant="outline"
                className="border-[#6B46C1] text-[#6B46C1] hover:bg-[#ECE0FF]/50 relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Discard
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECE0FF]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Enhanced 3D Mic Icon */}
            <div className="relative h-20 w-20 hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A63D2] to-[#6B46C1] rounded-full transform scale-90 opacity-20"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#8A63D2]/10 to-[#6B46C1]/10 rounded-full blur-lg opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECE0FF] to-[#ECE0FF]/90 rounded-full flex items-center justify-center shadow-md">
                <Mic className="h-10 w-10 text-[#6B46C1] drop-shadow-md" />
              </div>
              <div className="absolute inset-0 border-2 border-[#ECE0FF]/70 rounded-full animate-pulse"></div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-white rounded-full shadow-md"></div>
              <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-white rounded-full shadow-md"></div>
              <div
                className="absolute -inset-4 bg-[#6B46C1]/5 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            {/* Enhanced 3D Start Button */}
            <Button
              onClick={startRecording}
              className="bg-gradient-to-r from-[#6B46C1] to-[#8A63D2] hover:from-[#553C9A] hover:to-[#6B46C1] relative overflow-hidden group shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              size="lg"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6B46C1]/20 via-[#9F7AEA]/20 to-[#6B46C1]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">Start Recording</div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </>
        )}
      </div>

      <div className="text-center text-sm text-[#4a5568]">
        {isRecording
          ? "Recording in progress... Click stop when you're finished."
          : audioUrl
            ? "Listen to your recording before saving or discarding."
            : "Click the button to start recording your response to today's prompt."}
      </div>
    </div>
  )
}
