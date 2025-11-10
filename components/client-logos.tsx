export function ClientLogos() {
  const clients = [
    { name: "Company 1", logo: "/logos/client-1.jpg" },
    { name: "Company 2", logo: "/logos/client-2.jpg" },
    { name: "Company 3", logo: "/logos/client-3.jpg" },
    { name: "Company 4", logo: "/logos/client-4.jpg" },
    { name: "Company 5", logo: "/logos/client-5.jpg" },
    { name: "Company 6", logo: "/logos/client-6.jpg" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted By Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve some of the most prestigious commercial properties and businesses across the region
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
