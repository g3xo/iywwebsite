"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MessageSquare, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="https://media-hosting.imagekit.io/ab3d581935dd4c00/logo.png?Expires=1838497850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=faYBQaLljDuPtGxXjKMxbNZWqHmmy7DkqPwzNasujRB2ngIactQ5lplU05ZizfmW6JrxbIQGszzYs2GH~71DpShQVtANsj1CBMSfcXFMdyLHRMWb3~85tGgLx~CUg7aZ7lE8xc574UgnjLwmg8f8aaNNvT0h28pkT8VagHo3jbNqJ84g-LH7omPn1s5jUj-OAV2YhOJmBHDSzwbEHWqMiSv0fe7ON8fDIWAFvIdXLHl8vywSBh86FXU6xdnCGMFtZbMcHEMSoIOmm2bCi3IPMLfH845z8-OrsM1TZapFjsRtPkn0UwNAPMiz5ELWb5iy8nqXxQ9jykCfTuifa4Ag7g__"
                  alt="In Your World Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#2d3748]">In Your World</h3>
            </div>
            <p className="text-sm text-[#4a5568]">Preserving family voices and stories for generations to come.</p>
          </div>

          {/* Company: only Privacy Policy */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-[#2d3748]">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4a5568] hover:text-[#6B46C1]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-[#2d3748]">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="mailto:inyourworld360@gmail.com"
                className="text-[#4a5568] hover:text-[#6B46C1] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://discord.gg/WygYUADjqZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a5568] hover:text-[#6B46C1] transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/inyourworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a5568] hover:text-[#6B46C1] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            {/* Add App Store link */}
            <div className="mt-3">
              <Link
                href="https://apps.apple.com/us/app/in-your-world/id6744776315?platform=iphone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#4a5568] hover:text-[#6B46C1] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download iOS App
              </Link>
            </div>
            <p className="text-xs text-[#718096] italic">“Turn memories into legacies that last forever.”</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <p className="text-xs text-center text-[#718096]">
            © {new Date().getFullYear()} In Your World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
