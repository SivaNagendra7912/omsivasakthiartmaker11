"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The Rakhi is beautiful 😊 The beadwork, colors, and quality are amazing. Every detail feels special, and I truly appreciate your effort. Loved your work — I’ll definitely order again. Thank you ❤️",
  },
  {
    id: 2,
    rating: 5,
    text: "The frame turned out really beautiful and even better than I expected. I’m truly happy and fully satisfied with the work. Thank you so much for the amazing effort 🥰❤️",
  },
  {
    id: 3,
    rating: 5,
    text: "I only had a small idea, but you turned it into something beautiful. I’m fully satisfied with the order. Your hard work truly shows in your work. Wishing you more success ahead ❤️",
  },
  {
    id: 4,
    rating: 5,
    text: "Beautiful handcrafted clock that is unique and elegant. I receive compliments every time guests visit. Truly one-of-a-kind pieces from SN Art & Crafty Adda!",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            What our customers say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          {/* Desktop View - Show 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} featured={index === 1} />
            ))}
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} featured />
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-border">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex ? "bg-primary w-6" : "bg-border"
                    )}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full border-border">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ 
  testimonial, 
  featured = false 
}: { 
  testimonial: typeof testimonials[0]
  featured?: boolean 
}) {
  return (
    <div className={cn(
      "relative p-8 rounded-2xl border transition-all",
      featured 
        ? "bg-secondary border-primary/20 shadow-lg" 
        : "bg-card border-border hover:border-primary/20"
    )}>
      {/* Quote Icon */}
      <Quote className="h-10 w-10 text-primary/20 mb-4" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground leading-relaxed mb-6">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Star className="h-5 w-5 fill-primary text-primary" />
        </div>
        <p className="font-medium text-muted-foreground">Happy Customer</p>
      </div>
    </div>
  )
}
