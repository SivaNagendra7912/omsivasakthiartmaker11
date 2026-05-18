"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Our Products", href: "#products" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Full Page Hero Header - Before Scroll */}
      <header 
        id="home"
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-accent/30 transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Side - Circular Logo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border-2 border-primary/30 flex items-center justify-center shadow-2xl shadow-primary/20">
                <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full bg-card border border-border flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="SN Art & Crafty Adda Logo"
                    width={220}
                    height={220}
                    className="rounded-full object-cover shadow"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Title and Caption */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground tracking-wide leading-none">
                SN_Art&Crafty_Adda
              </h1>
              <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                Every handmade creation holds a memory. We craft personalized gifts and creative designs that turn your precious moments into timeless memories.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, "#products")}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Explore Collection
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all duration-300"
                >
                  Reach Us
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Navbar - After Scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-500 ${
          scrolled 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Small Logo on Left */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
            </Link>

            {/* Title in Center */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground tracking-wide">
                  SN_Art&Crafty_Adda
                </span>
              </Link>
            </div>

            {/* Mobile Title */}
            <Link href="#home" className="md:hidden">
              <span className="font-serif text-lg font-semibold text-foreground tracking-wide">
                SN_Art&Crafty_Adda
              </span>
            </Link>

            {/* Navigation Links on Right */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden -m-2.5 p-2.5 text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <div 
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background px-6 py-6 shadow-xl border-l border-border">
              <div className="flex items-center justify-between">
                <Link href="#home" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-serif text-xl font-semibold text-foreground tracking-wide">
                    SN_Art&Crafty_Adda
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 p-2.5 text-foreground"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-10 flow-root">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
