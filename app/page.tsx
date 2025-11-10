import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ClientLogos } from "@/components/client-logos"
import { ProjectsGallery } from "@/components/projects-gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceAreas } from "@/components/service-areas"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientLogos />
        <ProjectsGallery />
        <WhyChooseUs />
        <ServiceAreas />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
