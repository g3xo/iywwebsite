import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MagicalParticles from "@/components/magical-particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "In Your World - Turn Memories Into Legacies",
  description:
    "A seamless blend of voice preservation, legacy planning, and human emotional connection that ensures family histories live on.",
  icons: {
    icon: "https://media-hosting.imagekit.io/ab3d581935dd4c00/logo.png?Expires=1838497850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=faYBQaLljDuPtGxXjKMxbNZWqHmmy7DkqPwzNasujRB2ngIactQ5lplU05ZizfmW6JrxbIQGszzYs2GH~71DpShQVtANsj1CBMSfcXFMdyLHRMWb3~85tGgLx~CUg7aZ7lE8xc574UgnjLwmg8f8aaNNvT0h28pkT8VagHo3jbNqJ84g-LH7omPn1s5jUj-OAV2YhOJmBHDSzwbEHWqMiSv0fe7ON8fDIWAFvIdXLHl8vywSBh86FXU6xdnCGMFtZbMcHEMSoIOmm2bCi3IPMLfH845z8-OrsM1TZapFjsRtPkn0UwNAPMiz5ELWb5iy8nqXxQ9jykCfTuifa4Ag7g__",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <MagicalParticles />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
