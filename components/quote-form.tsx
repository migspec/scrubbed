"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function QuoteForm() {
  return (
    <section id="quote" className="border-b border-border py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-balance font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">
              Get Your Free Quote
            </h2>
            <p className="text-balance text-muted-foreground text-xl leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your
              commercial cleaning needs.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input id="name" placeholder="John Smith" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <Input id="company" placeholder="ABC Corporation" required />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="0400 000 000" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Service Required
              </label>
              <Input id="service" placeholder="e.g., Office Cleaning, Warehouse Cleaning" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-medium">
                Additional Details
              </label>
              <Textarea
                id="details"
                placeholder="Tell us about your facility size, frequency needed, and any specific requirements..."
                rows={6}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              Request Free Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
