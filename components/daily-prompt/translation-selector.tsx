"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

interface TranslationSelectorProps {
  text: string
  language: string
  onLanguageChange: (language: string) => void
}

// Mock translations for demonstration purposes
const mockTranslations: Record<string, Record<string, string>> = {
  "What's your favorite family tradition and why?": {
    Spanish: "¿Cuál es tu tradición familiar favorita y por qué?",
    French: "Quelle est votre tradition familiale préférée et pourquoi ?",
    Chinese: "你最喜欢的家庭传统是什么，为什么？",
    Hindi: "आपकी पसंदीदा पारिवारिक परंपरा क्या है और क्यों?",
    Arabic: "ما هو تقليدك العائلي المفضل ولماذا؟",
  },
  "Share a childhood memory that still makes you smile.": {
    Spanish: "Comparte un recuerdo de la infancia que todavía te haga sonreír.",
    French: "Partagez un souvenir d'enfance qui vous fait encore sourire.",
    Chinese: "分享一个仍然让你微笑的童年记忆。",
    Hindi: "एक बचपन की याद साझा करें जो आपको अभी भी मुस्कुराती है।",
    Arabic: "شارك ذكرى من الطفولة لا تزال تجعلك تبتسم.",
  },
  "If you could pass down one piece of wisdom to future generations, what would it be?": {
    Spanish: "Si pudieras transmitir un consejo de sabiduría a las generaciones futuras, ¿cuál sería?",
    French: "Si vous pouviez transmettre un conseil de sagesse aux générations futures, quel serait-il ?",
    Chinese: "如果你能向后代传授一条智慧，那会是什么？",
    Hindi: "अगर आप भविष्य की पीढ़ियों को एक ज्ञान दे सकते हैं, तो वह क्या होगा?",
    Arabic: "إذا كان بإمكانك تمرير قطعة واحدة من الحكمة للأجيال القادمة، فماذا ستكون؟",
  },
}

export default function TranslationSelector({ text, language, onLanguageChange }: TranslationSelectorProps) {
  const [translatedText, setTranslatedText] = useState("")

  useEffect(() => {
    // In a real app, this would call a translation API
    // For demo purposes, we're using mock translations
    if (mockTranslations[text] && mockTranslations[text][language]) {
      setTranslatedText(mockTranslations[text][language])
    } else {
      // Fallback for prompts without mock translations
      setTranslatedText(`[${language} translation would appear here]`)
    }
  }, [text, language])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#4a5568]">Translate to:</span>
        {/* 3D Select */}
        <Select value={language} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-[140px] border-[#6B46C1]/30 focus:ring-[#6B46C1] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE0FF]/0 to-[#ECE0FF]/0 group-hover:from-[#ECE0FF]/10 group-hover:to-[#ECE0FF]/20 transition-colors duration-300"></div>
            <SelectValue placeholder="Select language" className="relative z-10" />
          </SelectTrigger>
          <SelectContent className="border-[#6B46C1]/20 bg-white/95 backdrop-blur-sm">
            <SelectItem value="Spanish" className="focus:bg-[#ECE0FF]/30 focus:text-[#6B46C1]">
              Spanish
            </SelectItem>
            <SelectItem value="French" className="focus:bg-[#ECE0FF]/30 focus:text-[#6B46C1]">
              French
            </SelectItem>
            <SelectItem value="Chinese" className="focus:bg-[#ECE0FF]/30 focus:text-[#6B46C1]">
              Chinese
            </SelectItem>
            <SelectItem value="Hindi" className="focus:bg-[#ECE0FF]/30 focus:text-[#6B46C1]">
              Hindi
            </SelectItem>
            <SelectItem value="Arabic" className="focus:bg-[#ECE0FF]/30 focus:text-[#6B46C1]">
              Arabic
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 3D Card */}
      <Card className="bg-gradient-to-br from-[#6B46C1]/5 to-[#8A63D2]/10 border-none shadow-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <CardContent className="p-3 relative z-10">
          <p className="text-[#4a5568] italic">{translatedText}</p>
        </CardContent>
      </Card>

      {/* 3D Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center p-0.5 rounded-full bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] shadow-sm relative overflow-hidden">
          <div className="relative px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm">
            <p className="text-xs text-[#6B46C1] text-center relative z-10">
              Powered by Meta's Seamless AI Translation
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}
