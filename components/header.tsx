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
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 100) // Small delay to ensure initial render

    return () => clearTimeout(timer)
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
      {/* Hero Header Section */}
      <header 
        id="home"
        className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-secondary to-accent/30 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Side - Circular Logo with Animation */}
            <div 
              className={`flex-shrink-0 transition-all duration-1000 ease-out ${
                animationComplete 
                  ? "translate-x-0 lg:translate-x-0" 
                  : "translate-x-[calc(50vw-50%)] lg:translate-x-[calc(50vw-200px)]"
              }`}
            >
              <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border-2 border-primary/30 flex items-center justify-center shadow-2xl shadow-primary/20">
                <div className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="SN Art & Crafty Adda Logo"
                    width={200}
                    height={200}
                    className="rounded-full object-cover shadow"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Title and Caption with Animation */}
            <div 
              className={`flex-1 text-center lg:text-left max-w-2xl transition-all duration-1000 ease-out delay-500 ${
                animationComplete 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Welcome Text with Script Font */}
              <p 
                className={`text-3xl md:text-4xl lg:text-5xl text-primary mb-3 transition-all duration-700 delay-700 ${
                  animationComplete ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Welcome to
              </p>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground tracking-wide leading-tight">
                SN_Art&Crafty_Adda
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                Every handmade creation holds a memory. We craft personalized gifts and creative designs that turn your precious moments into timeless memories.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, "#products")}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Explore Collection
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
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
        <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden -m-2.5 p-2.5 text-foreground"
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/50 ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/98 px-8 py-4">
            <nav className="flex flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center justify-between py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/30 last:border-b-0"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="font-serif">{item.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </>
  )
}
