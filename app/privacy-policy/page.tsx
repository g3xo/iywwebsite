"use client"

import Link from "next/link"
import { BadgeHeader } from "@/components/ui/badge-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <section className="container mx-auto px-4">
        <Link href="/" className="text-sm text-[#4a5568] hover:text-[#6B46C1] mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="text-center mb-12">
          <BadgeHeader text="Privacy Policy" className="mx-auto mb-4" />
          <p className="text-sm text-[#4a5568]"><em>Last updated: Apr 16, 2025</em></p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-4 text-[#6B46C1]">
            <li><a href="#data-we-collect" className="hover:underline">Data We Collect</a></li>
            <li><a href="#how-we-use-data" className="hover:underline">How We Use Your Data</a></li>
            <li><a href="#protection-security" className="hover:underline">Protection & Security</a></li>
            <li><a href="#data-sharing" className="hover:underline">Data Sharing</a></li>
            <li><a href="#your-rights" className="hover:underline">Your Rights</a></li>
            <li><a href="#changes-policy" className="hover:underline">Changes to Policy</a></li>
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-8">
          <section id="data-we-collect">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#2d3748]">Data We Collect</h2>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-[#4a5568]">
                  <li><strong>Email address</strong></li>
                  <li><strong>Name</strong></li>
                  <li><strong>Voice recordings</strong></li>
                  <li><strong>Photos</strong></li>
                  <li><strong>Usage data / Analytics</strong></li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="how-we-use-data">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#2d3748]">How We Use Your Data</h2>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-[#4a5568]">
                  <li>To provide you with a personalized experience.</li>
                  <li>To help improve our app's functionality.</li>
                  <li>To maintain the security and performance of our app.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="protection-security">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#2d3748]">Data Protection & Security</h2>
              </CardHeader>
              <CardContent>
                <p className="text-[#4a5568]">
                  We take your privacy seriously and employ encryption and best practices to keep your data secure and
                  stored safely.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="data-sharing">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#2d3748]">Data Sharing</h2>
              </CardHeader>
              <CardContent>
                <p className="text-[#4a5568]">
                  We do not sell or share your personal data except to deliver the services you’ve requested or as
                  required by law.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="your-rights">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#2d3748]">Your Rights</h2>
              </CardHeader>
              <CardContent>
                <p className="text-[#4a5568]">
                  You have control over your data, including deleting memories and managing account settings within our
                  app.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="changes-policy">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#2d3748]">Changes to Privacy Policy</h2>
              </CardHeader>
              <CardContent>
                <p className="text-[#4a5568]">
                  We may update this policy periodically. Updates appear here along with the effective date.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  )
}
