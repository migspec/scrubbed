const areas = [
  "Melbourne CBD",
  "Inner North",
  "Inner South",
  "Inner East",
  "Inner West",
  "Northern Suburbs",
  "Eastern Suburbs",
  "South-Eastern Suburbs",
  "Western Suburbs",
  "Bayside",
  "Yarra Ranges",
  "Mornington Peninsula",
  "Outer East",
  "Outer West",
  "North-West",
  "Geelong Region"
]

export function ServiceAreas() {
  return (
    <section id="areas" className="border-b border-border py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl">
          <h2 className="mb-6 text-balance font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">Service Areas</h2>
          <p className="text-balance text-muted-foreground text-xl leading-relaxed">
            Proudly serving commercial clients across Greater Melbourne and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <div key={area} className="border border-border p-6 text-center transition-colors hover:border-foreground">
              <p className="font-medium text-lg">{area}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            Don't see your area? <span className="font-semibold text-foreground">Contact us</span> - we may be able to
            accommodate special requests.
          </p>
        </div>
      </div>
    </section>
  )
}
