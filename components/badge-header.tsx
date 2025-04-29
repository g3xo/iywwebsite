import { cn } from "@/lib/utils"

interface BadgeHeaderProps {
  text: string
  className?: string
}

export function BadgeHeader({ text, className }: BadgeHeaderProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center p-1.5 mb-4 rounded-full bg-gradient-to-r from-[#ECE0FF] to-[#DCE8FF] shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300",
        className,
      )}
    >
      {/* Multi-color outline effect */}
      <div className="absolute inset-0 rounded-full border-2 border-[#6B46C1] opacity-20"></div>
      <div className="absolute inset-0 rounded-full border-2 border-[#9F7AEA] opacity-20 scale-[1.03] rotate-[5deg]"></div>
      <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-20 scale-[1.06] rotate-[-5deg]"></div>

      <div className="relative px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-inner">
        <span className="text-xs font-medium bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] bg-clip-text text-transparent relative z-10">
          {text}
        </span>
      </div>
    </div>
  )
}
