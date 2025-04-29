import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BadgeHeader } from "@/components/ui/badge-header"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <BadgeHeader text="Testimonials" className="mx-auto" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Working with this company has transformed our business operations. Their solutions are innovative and effective."
            name="Sarah Johnson"
            role="CEO, TechStart"
            avatar="S"
          />
          <TestimonialCard
            quote="The team's expertise and dedication to our project exceeded our expectations. Highly recommended!"
            name="Michael Chen"
            role="CTO, GrowthLabs"
            avatar="M"
          />
          <TestimonialCard
            quote="Their attention to detail and customer service is unmatched. We've seen tremendous growth since partnering with them."
            name="Emily Rodriguez"
            role="Marketing Director, Elevate Inc"
            avatar="E"
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatar: string
}

function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="relative">
          <div className="text-2xl font-bold text-muted-foreground">"</div>
          <p className="mt-2 text-muted-foreground">{quote}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>{avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
