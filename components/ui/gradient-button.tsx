import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface GradientButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  className?: string
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, className, ...props }, ref) => {
    // Don't use asChild by default
    const { asChild, ...restProps } = props

    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-[#6B46C1] to-[#7C3AED] hover:from-[#553C9A] hover:to-[#6B46C1] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(107,70,193,0.9)] relative overflow-hidden rounded-xl group",
          className,
        )}
        {...restProps}
      >
        {/* Animated gradient overlay */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#6B46C1]/0 via-white/20 to-[#6B46C1]/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

        {/* Sparkle effects */}
        <span className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"></span>
        <span
          className="absolute bottom-0 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"
          style={{ animationDelay: "300ms" }}
        ></span>
        <span
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"
          style={{ animationDelay: "600ms" }}
        ></span>

        {/* Content */}
        {typeof children === "string" ? (
          <span className="relative z-10">{children}</span>
        ) : (
          <div className="relative z-10 flex items-center justify-center">{children}</div>
        )}
      </Button>
    )
  },
)

GradientButton.displayName = "GradientButton"
