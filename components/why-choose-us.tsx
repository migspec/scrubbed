import { Shield, Clock, Users, Award } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured & Licensed",
    description:
      "Complete public liability insurance and all necessary licenses. Your property is protected with every service.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "We work around your business hours. Early morning, late night, or weekend services available to minimize disruption.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description:
      "All staff undergo rigorous training and background checks. Consistent, reliable team members you can trust.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "100% satisfaction guarantee on every job. If you're not happy, we'll make it right at no additional cost.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="border-b border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl">
          <h2 className="mb-6 text-balance font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Why Choose Scrubbed Cleaning Solutions
          </h2>
          <p className="text-balance text-muted-foreground text-xl leading-relaxed">
            Professional commercial cleaning backed by experience, reliability, and a commitment to excellence.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-sm border-2 border-foreground bg-background">
                <reason.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-3 font-bold text-2xl">{reason.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
