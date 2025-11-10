"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Scrubbed Cleaning Solutions" width={200} height={50} className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Why Choose Us
          </Link>
          <Link
            href="#areas"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Service Areas
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="lg" className="hidden md:inline-flex">
            Get Free Quote
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link href="#services" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#why-us" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Why Choose Us
            </Link>
            <Link href="#areas" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Service Areas
            </Link>
            <Button size="lg" className="w-full">
              Get Free Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
