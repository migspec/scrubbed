import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-balance font-bold text-5xl tracking-tight md:text-6xl lg:text-7xl">
            Professional Commercial Cleaning Services
          </h1>
          <p className="mb-12 max-w-3xl text-balance text-muted-foreground text-xl leading-relaxed md:text-2xl">
            Scrubbed Cleaning Solutions delivers exceptional commercial cleaning services for offices, warehouses, and
            facilities. Trusted by businesses across the region.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-base">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-24 px-4">
        <div className="grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
          <div>
            <div className="mb-2 font-bold text-4xl md:text-5xl">500+</div>
            <div className="text-muted-foreground">Clients Served</div>
          </div>
          <div>
            <div className="mb-2 font-bold text-4xl md:text-5xl">24/7</div>
            <div className="text-muted-foreground">Available Service</div>
          </div>
          <div>
            <div className="mb-2 font-bold text-4xl md:text-5xl">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
