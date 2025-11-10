import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo.svg"
                alt="Scrubbed Cleaning Solutions"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-muted-foreground leading-relaxed">
              Professional commercial cleaning services across Greater Sydney. Trusted by businesses for over 15 years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>(02) 9999 9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@scrubbedcleaning.com.au</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Melbourne, VIC Australia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Commercial & Industrial
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Strata & Body Corporate
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Deep Cleaning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#why-us" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#areas" className="text-muted-foreground transition-colors hover:text-foreground">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="#quote" className="text-muted-foreground transition-colors hover:text-foreground">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">© 2025 Scrubbed Cleaning Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
