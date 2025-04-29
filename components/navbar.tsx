"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { GradientButton } from "@/components/ui/gradient-button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-3",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10 group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/20 to-[#9F7AEA]/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Image
                src="https://media-hosting.imagekit.io/ab3d581935dd4c00/logo.png?Expires=1838497850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=faYBQaLljDuPtGxXjKMxbNZWqHmmy7DkqPwzNasujRB2ngIactQ5lplU05ZizfmW6JrxbIQGszzYs2GH~71DpShQVtANsj1CBMSfcXFMdyLHRMWb3~85tGgLx~CUg7aZ7lE8xc574UgnjLwmg8f8aaNNvT0h28pkT8VagHo3jbNqJ84g-LH7omPn1s5jUj-OAV2YhOJmBHDSzwbEHWqMiSv0fe7ON8fDIWAFvIdXLHl8vywSBh86FXU6xdnCGMFtZbMcHEMSoIOmm2bCi3IPMLfH845z8-OrsM1TZapFjsRtPkn0UwNAPMiz5ELWb5iy8nqXxQ9jykCfTuifa4Ag7g__"
                alt="In Your World Logo"
                width={40}
                height={40}
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <span className="font-bold text-xl text-[#6B46C1] group-hover:text-[#553C9A] transition-colors">
              In Your World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-[#4a5568] hover:text-[#6B46C1] transition-colors text-sm font-medium",
                pathname === "/" && "text-[#6B46C1] font-semibold",
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-[#4a5568] hover:text-[#6B46C1] transition-colors text-sm font-medium",
                pathname === "/about" && "text-[#6B46C1] font-semibold",
              )}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-[#4a5568] hover:text-[#6B46C1] transition-colors text-sm font-medium",
                pathname === "/contact" && "text-[#6B46C1] font-semibold",
              )}
            >
              Contact
            </Link>
            {/* Add App Store link */}
            <Link
              href="https://apps.apple.com/us/app/in-your-world/id6744776315?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-[#2d3748] hover:text-[#6B46C1]"
            >
              <span>Download App</span>
            </Link>
          </nav>

          {/* Join Waitlist Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/#waitlist-section">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-full opacity-70 blur group-hover:opacity-100 transition duration-300 animate-pulse-slow"></div>
                <GradientButton size="sm" className="relative px-5 py-2 rounded-full shadow-lg">
                  <div className="absolute inset-0 w-full h-full bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Join Waitlist</span>
                </GradientButton>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#4a5568] hover:text-[#6B46C1] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className={cn(
                  "py-2 text-[#4a5568] hover:text-[#6B46C1] transition-colors font-medium",
                  pathname === "/" && "text-[#6B46C1] font-semibold",
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "py-2 text-[#4a5568] hover:text-[#6B46C1] transition-colors font-medium",
                  pathname === "/about" && "text-[#6B46C1] font-semibold",
                )}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "py-2 text-[#4a5568] hover:text-[#6B46C1] transition-colors font-medium",
                  pathname === "/contact" && "text-[#6B46C1] font-semibold",
                )}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link href="/#waitlist-section">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6B46C1] to-[#9F7AEA] rounded-md opacity-70 blur"></div>
                    <GradientButton className="relative w-full py-2.5">Join Waitlist</GradientButton>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
