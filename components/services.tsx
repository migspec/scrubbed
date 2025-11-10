import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Office Cleaning",
    description: "Professional cleaning services for offices and corporate environments",
    image: "/modern-luxury-office-interior.jpg",
  },
  {
    title: "Commercial Spaces",
    description: "Comprehensive cleaning solutions for retail and commercial properties",
    image: "/luxury-commercial-building-lobby.jpg",
  },
  {
    title: "Window Cleaning",
    description: "Crystal-clear window cleaning for buildings of all sizes",
    image: "/professional-window-cleaning-high-rise-building.jpg",
  },
  {
    title: "Post-Construction",
    description: "Detailed cleaning services for newly constructed or renovated spaces",
    image: "/luxury-new-construction-building-site-clean.jpg",
  },
  {
    title: "Caulking",
    description: "Regular maintenance cleaning for apartment complexes and shared spaces",
    image: "/luxury-apartment-building-common-area.jpg",
  },
  {
    title: "Deep Cleaning",
    description: "Intensive cleaning services for thorough sanitization and restoration",
    image: "/professional-deep-cleaning-commercial-kitchen.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy via-luxury-navy/95 to-luxury-navy/90">
          <img
            src="/luxury-modern-commercial-building-exterior-evening.jpg"
            alt="Services"
            className="h-full w-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="mb-6 font-bold text-5xl text-white tracking-tight md:text-6xl lg:text-7xl">
                Our Services
              </h1>
              <p className="mb-8 text-luxury-cream/90 text-xl leading-relaxed">
                We finish premium projects for commercial & residential builders who care.
              </p>
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy">
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-luxury-cream py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href="#"
                className="group relative aspect-[4/5] overflow-hidden border border-luxury-navy/10"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="mb-2 font-bold text-3xl text-white tracking-tight">{service.title}</h3>
                  <p className="text-luxury-cream/90 text-sm leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
