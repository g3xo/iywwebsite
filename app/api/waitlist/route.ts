import { type NextRequest, NextResponse } from "next/server"

// Mock storage for preview environments
let mockEmails: string[] = []

// Add an email to the waitlist set
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 })
    }

    const normalizedEmail = email.trim().toLowerCase()

    // Try to use Vercel KV if available, otherwise use mock storage
    try {
      // Dynamically import Vercel KV to avoid errors when it's not available
      const { kv } = await import("@vercel/kv")
      await kv.sadd("waitlist_emails", normalizedEmail)
    } catch (error) {
      console.log("Vercel KV not available, using mock storage")
      // If KV is not available, use our mock storage
      if (!mockEmails.includes(normalizedEmail)) {
        mockEmails.push(normalizedEmail)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ success: false, error: "Server error processing request" }, { status: 500 })
  }
}

// Fetch all emails
export async function GET() {
  try {
    let emails: string[] = []

    // Try to use Vercel KV if available, otherwise use mock storage
    try {
      const { kv } = await import("@vercel/kv")
      emails = await kv.smembers("waitlist_emails")
    } catch (error) {
      console.log("Vercel KV not available, using mock storage")
      emails = [...mockEmails]
    }

    return NextResponse.json({ emails })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ success: false, error: "Server error fetching emails" }, { status: 500 })
  }
}

// Clear all emails (for admin use)
export async function DELETE() {
  try {
    try {
      const { kv } = await import("@vercel/kv")
      await kv.del("waitlist_emails")
    } catch (error) {
      console.log("Vercel KV not available, using mock storage")
      mockEmails = []
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ success: false, error: "Server error clearing emails" }, { status: 500 })
  }
}
