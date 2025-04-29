"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch("/api/waitlist")
      .then(res => res.json())
      .then(data => {
        setEmails(data.emails || [])
      })
      .catch(err => {
        toast({ title: "Error loading emails", description: err.message, variant: "destructive" })
      })
      .finally(() => setIsLoading(false))
  }, [toast])

  const handleCopy = () => {
    if (!emails.length) {
      return toast({ title: "No emails", description: "Waitlist is empty", variant: "destructive" })
    }
    navigator.clipboard.writeText(emails.join("\n"))
    toast({ title: "Copied!", description: `${emails.length} emails copied.` })
  }

  const handleClear = async () => {
    if (!confirm("Clear all waitlist entries?")) return
    setIsLoading(true)
    // Vercel KV has no batch‑delete on sets, so we just delete the key
    await fetch("/api/waitlist", { method: "DELETE" })
    setEmails([])
    toast({ title: "Cleared" })
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Waitlist Emails
                <div className="flex gap-2">
                  <Button onClick={handleCopy} disabled={emails.length === 0}>Copy All</Button>
                  <Button variant="destructive" onClick={handleClear} disabled={emails.length === 0}>
                    Clear
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-center py-8">Loading…</p>
              ) : emails.length === 0 ? (
                <p className="text-center py-8 text-gray-500">No entries yet.</p>
              ) : (
                <ul className="space-y-1">
                  {emails.map((e, i) => (
                    <li key={i} className="flex justify-between border-b py-2">
                      <span>#{i + 1}</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
