"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "818 Docklands",
    location: "Melbourne CBD",
    beforeImage: "/dirty-office-space-before-cleaning.jpg",
    afterImage: "/clean-modern-office-space-after-cleaning.jpg",
  },
  {
    id: 2,
    title: "Warehouse Facility",
    location: "Western Suburbs",
    beforeImage: "/dusty-warehouse-floor-before-cleaning.jpg",
    afterImage: "/spotless-warehouse-floor-after-cleaning.jpg",
  },
  {
    id: 3,
    title: "Retail Shopping Center",
    location: "North Shore",
    beforeImage: "/messy-retail-space-before-cleaning.jpg",
    afterImage: "/pristine-retail-space-after-cleaning.jpg",
  },
  {
    id: 4,
    title: "Medical Facility",
    location: "Eastern Suburbs",
    beforeImage: "/medical-facility-before-cleaning.jpg",
    afterImage: "/sanitized-medical-facility-after-cleaning.jpg",
  },
  {
    id: 5,
    title: "Apartment Complex",
    location: "Inner West",
    beforeImage: "/apartment-lobby-before-cleaning.jpg",
    afterImage: "/luxurious-apartment-lobby-after-cleaning.jpg",
  },
]

export function ProjectsGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="border-b border-border py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-20 flex items-end justify-between">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-balance font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">
              Completed Projects
            </h2>
            <p className="text-balance text-muted-foreground text-xl leading-relaxed">
              See the transformation. Before and after photos of our recent commercial cleaning projects.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="h-12 w-12">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="h-12 w-12">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div ref={scrollContainerRef} className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0" style={{ width: "min(600px, 90vw)" }}>
              <div className="grid grid-rows-2 gap-4">
                <div className="relative overflow-hidden border border-border">
                  <div className="absolute top-4 left-4 z-10 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Before
                  </div>
                  <img
                    src={project.beforeImage || "/placeholder.svg"}
                    alt={`${project.title} - Before`}
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden border border-border">
                  <div className="absolute top-4 left-4 z-10 bg-foreground px-3 py-1 text-background text-xs font-semibold uppercase tracking-wider">
                    After
                  </div>
                  <img
                    src={project.afterImage || "/placeholder.svg"}
                    alt={`${project.title} - After`}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 font-bold text-xl">{project.title}</h3>
                <p className="text-muted-foreground">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
