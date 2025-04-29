"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
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
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#6B46C1]">
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#6B46C1]"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#6B46C1]"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:flex border-[#6B46C1] text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white transition-all duration-300 relative overflow-hidden group shadow-sm hover:shadow-md"
          >
            <Link href="/#waitlist-section" className="relative z-10">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#6B46C1]/0 via-white/10 to-[#6B46C1]/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              Join Waitlist
            </Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-[#6B46C1]" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-[#6B46C1]"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-[#6B46C1]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#6B46C1] to-[#7C3AED] hover:from-[#553C9A] hover:to-[#6B46C1] text-white relative overflow-hidden group shadow-md hover:shadow-lg"
                  >
                    <Link href="/#waitlist-section" onClick={() => setIsOpen(false)} className="relative z-10">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#6B46C1]/0 via-white/10 to-[#6B46C1]/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      Join Waitlist
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
