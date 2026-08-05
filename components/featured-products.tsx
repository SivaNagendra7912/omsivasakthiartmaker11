"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronDown, X } from "lucide-react"
import { LikeDislikeButtons } from "./like-dislike-buttons"

type Category = "all" | "bangles" | "wedding" | "couple" | "rakhis" | "clocks" | "calendars" | "baby" | "birthday" | "others" | "earrings" | "keychains"

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "bangles", label: "Bangles" },
  { value: "wedding", label: "Wedding" },
  { value: "couple", label: "Couple" },
  { value: "rakhis", label: "Rakhis" },
  { value: "clocks", label: "Clocks" },
  { value: "calendars", label: "Calendars" },
  { value: "baby", label: "Baby Frames" },
  { value: "birthday", label: "Birthday Gifts" },
  { value: "earrings", label: "Earrings" },
  { value: "keychains", label: "Keychains" },
  { value: "others", label: "Others" },
]

const products = [
  // Bangles
  {
    id: 1,
    name: "Resin Bangles",
    description: "Elegant handmade resin bangles crafted beautifully with floral artistic designs",
    image: "/products/bangles1.jpeg",
    category: "bangles" as Category,
    size: "Inner diameter ~2.2 in - 2.8 in",
  },
  {
    id: 26,
    name: "Resin Jewelry Set",
    description: "Elegant handmade resin jewelry set crafted beautifully with glitter art, earrings, and heart keychain designs",
    image: "/products/bangles2.jpeg",
    category: "bangles" as Category,
    size: "Earrings ~ 1.2 in, Pendant ~ 1.5 in",
  },

  // Wedding Crafts
  {
  id: 2,
  name: "Traditional Wedding Decoration",
  description: "Elegant handcrafted wedding decoration designed with traditional artistic detailing and pearl accents",
  image: "/products/wedding1.jpeg",
  category: "wedding" as Category,
  size: "Rectangular ~ 18 x 24 in",
},
  {
    id: 3,
    name: "Wedding Memory Frame",
    description: "Elegant handmade wedding frame crafted beautifully with memorable couple moments",
    image: "/products/wedding2.jpeg",
    category: "wedding" as Category,
    size: "Rectangular ~ 14 x 14 in",
  },
  {
    id: 4,
    name: "Wedding Memory Collage",
    description: "Handmade wedding collage frame preserving beautiful ceremonies and memorable couple moments",
    image: "/products/wedding3.jpeg",
    category: "wedding" as Category,
    size: "Rectangular ~ 14 x 16 in",
  },
  {
    id: 21,
    name: "Wedding Heart Coconut",
    description: "Traditional handmade wedding coconut crafted with heart-shaped designs, pearls, and elegant decorative artwork",
    image: "/products/coconut.jpeg",
    category: "wedding" as Category,
    size: "Varies",
  },

  // Couple & Love Frames
  {
    id: 5,
    name: "Couple Resin Frame",
    description: "Customized resin couple frame designed artistically with flowers and beautiful memories",
    image: "/products/couple1.jpeg",
    category: "couple" as Category,
    size: "Rectangular ~ 10 x 12 in",
  },
  {
    id: 6,
    name: "Love Memory Frame",
    description: "Customized handmade love frame crafted beautifully with photos and artistic decorations",
    image: "/products/coupl2.jpeg",
    category: "couple" as Category,
    size: "Circular ~ 10 in Diameter",
  },
  {
    id: 7,
    name: "Memory Couple Frame",
    description: "Customized handmade frame preserving beautiful memories with creative artistic personalized designs",
    image: "/products/couple3.jpeg",
    category: "couple" as Category,
    size: "Rectangular ~ 9 x 12 in",
  },
  {
    id: 8,
    name: "Memory Quote Frame",
    description: "Customized handmade quote frame expressing emotions, memories, love, and relationships",
    image: "/products/couple4.jpeg",
    category: "couple" as Category,
    size: "Rectangular ~ 9 x 12 in",
  },

  // Rakhis
  {
    id: 9,
    name: "Personalized Rakhis",
    description: "Handmade colorful rakhis crafted beautifully with names, beads, and love",
    image: "/products/rakhi1.jpeg",
    category: "rakhis" as Category,
    size: "Depends on design",
  },
  {
    id: 10,
    name: "Designer Rakhis",
    description: "Handmade designer rakhis crafted beautifully with colorful beads and personalized names",
    image: "/products/rakhi2.jpeg",
    category: "rakhis" as Category,
    size: "Depends on design",
  },

  // Clocks
  {
    id: 11,
    name: "Couple Clock",
    description: "Elegant customized clock crafted beautifully with couple memories and floral designs",
    image: "/products/clock2.jpeg",
    category: "clocks" as Category,
    size: "Circular ~ 12 in Diameter",
  },
  {
    id: 12,
    name: "Photo Frame Clock",
    description: "Beautiful handmade clock designed with personalized photo memories and elegant resin art patterns",
    image: "/products/clock1.jpeg",
    category: "clocks" as Category,
    size: "Circular ~ 10 in Diameter",
  },

  {
    id: 13,
    name: "New Born Baby Memory plate",
    description: "Customized handmade baby memory plate preserving precious birth memories and special moments",
    image: "/products/clock3.jpeg",
    category: "baby" as Category,
    size: "Circular ~ 8 in Diameter",
  },

  // Calendar Frames
  {
    id: 14,
    name: "Memory Calendar",
    description: "Personalized handmade calendar beautifully designed with memorable photos and special dates",
    image: "/products/calender1.jpeg",
    category: "calendars" as Category,
    size: "Circular ~ 8 in Diameter",
  },
  {
    id: 15,
    name: "Birthday Calendar Frame",
    description: "Customized birthday calendar frame preserving precious memories with elegant handmade designs",
    image: "/products/calender2.jpeg",
    category: "calendars" as Category,
    size: "Circular ~ 8 in Diameter",
  },

  // Baby Frames
  {
    id: 16,
    name: "Baby Memory Board",
    description: "Customized handmade baby board preserving precious birth memories and special moments",
    image: "/products/baby1.jpeg",
    category: "baby" as Category,
    size: "Rectangular ~ 10 x 12 in",
  },
  // Birthday Gifts
  {
    id: 17,
    name: "Birthday Memory Frame",
    description: "Customized handmade birthday frame crafted beautifully with memorable photos and decorative designs",
    image: "/products/birthday1.jpeg",
    category: "birthday" as Category,
    size: "Rectangular ~ 9 x 12 in",
  },

  {
    id: 18,
    name: "Birthday Resin Board",
    description: "Elegant personalized birthday resin board designed with names, wishes, and artistic decorations",
    image: "/products/birthday2.jpeg",
    category: "birthday" as Category,
    size: "Circular ~ 8 in Diameter",
  },

  {
    id: 19,
    name: "Birthday Photo Clock",
    description: "Creative birthday photo clock customized with special memories and stylish floral artwork",
    image: "/products/birthday3.jpeg",
    category: "birthday" as Category,
    size: "Circular ~ 8 in Diameter",
  },

  {
    id: 20,
    name: "Birthday Name Plate",
    description: "Handmade birthday name plate designed with glitter resin art and customized celebration themes",
    image: "/products/birthday4.jpeg",
    category: "birthday" as Category,
    size: "Circular ~ 10 in Diameter",
  },
  // Others
  {
    id: 22,
    name: "Resin Decorative Plate",
    description: "Handmade decorative resin plate crafted beautifully with pearls, stones, and elegant artistic designs",
    image: "/products/design.jpeg",
    category: "others" as Category,
    size: "Circular ~ 6 in Diameter",
  },

  {
    id: 23,
    name: "Customized Resin Ring",
    description: "Personalized resin ring designed creatively with initials, colorful art, and elegant finishing",
    image: "/products/nails.jpeg",
    category: "others" as Category,
    size: "Depends on finger size",
  },

  {
    id: 24,
    name: "Designer Mobile Cover",
    description: "Stylish handmade mobile cover decorated with pearls, crystals, and luxury artistic patterns",
    image: "/products/phonepouch.jpeg",
    category: "others" as Category,
    size: "Depends on phone model",
  },

  {
    id: 25,
    name: "Customized Resin Name Board",
    description: "Elegant personalized resin name board designed beautifully with seashells and artistic decorations",
    image: "/products/shopname.jpeg",
    category: "others" as Category,
    size: "Circular ~ 4 in Diameter",
  },

  {
  id: 29,
  name: "Premium Wedding Memory Frame",
  description: "Luxury handmade wedding memory frame featuring invitation card, photos, names, and elegant resin artwork",
  image: "/products/marriage6.jpeg",
  category: "wedding" as Category,
  size: "Rectangular ~ 14 x 26 in",
},
{
  id: 30,
  name: "Customized Wedding Resin Frame",
  description: "Personalized wedding resin frame crafted with invitation card, memorable photos, pearls, and premium decorations",
  image: "/products/marriage7.jpeg",
  category: "wedding" as Category,
  size: "Rectangular ~ 10 x 14 in",
},

  // Earrings
{
  id: 31,
  name: "Resin Earrings",
  description: "Elegant handmade resin earrings crafted beautifully with glitter art and premium artistic designs",
  image: "/products/earrings.jpeg",
  category: "earrings" as Category,
  size: "Depends on design",
},

// Keychains
{
  id: 32,
  name: "Heart Resin Keychain",
  description: "Handmade heart-shaped resin keychain crafted with colorful glitter and premium finish",
  image: "/products/keychains1.jpeg",
  category: "keychains" as Category,
  size: "Depends on design",
},
{
  id: 33,
  name: "Customized Doll Keychain",
  description: "Personalized handmade doll keychain with resin initial, name, and soft pom-pom decoration",
  image: "/products/keychains2.jpeg",
  category: "keychains" as Category,
  size: "Depends on design",
},

]

export function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const [voteCounts, setVoteCounts] = useState<Record<number, { likes: number; dislikes: number }>>({})
  const [userVotes, setUserVotes] = useState<Record<number, 'like' | 'dislike'>>({})
  const [deviceId, setDeviceId] = useState<string>("")
  const productsRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)

  const scrollToProducts = () => {
    const grid = productsRef.current
    const sticky = stickyRef.current
    if (!grid) return

    // Wait for layout to settle (after React updates) using two rAFs
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const firstCard = grid.querySelector('[data-product-id]') as HTMLElement | null
        const targetEl = firstCard || grid
        const targetTop = targetEl.getBoundingClientRect().top + window.scrollY
        const stickyHeight = sticky ? sticky.getBoundingClientRect().height : 0
        const gap = 24 // gap so cards are visible under the filter
        window.scrollTo({ top: Math.max(0, targetTop - stickyHeight - gap), behavior: 'smooth' })
      })
    })
  }

  // Generate or retrieve device ID for tracking votes
  useEffect(() => {
    let storedDeviceId = localStorage.getItem('device_vote_id')
    if (!storedDeviceId) {
      storedDeviceId = 'device_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
      localStorage.setItem('device_vote_id', storedDeviceId)
    }
    setDeviceId(storedDeviceId)
  }, [])

  // Fetch initial vote counts and user's votes
  useEffect(() => {
    const fetchVoteData = async () => {
      try {
        // Fetch all vote counts
        const countsRes = await fetch('/api/votes')
        if (countsRes.ok) {
          const counts = await countsRes.json()
          setVoteCounts(counts)
        }

        // Fetch user's votes if we have a device ID
        if (deviceId) {
          const userVotesRes = await fetch(`/api/votes/user?deviceId=${deviceId}`)
          if (userVotesRes.ok) {
            const votes = await userVotesRes.json()
            setUserVotes(votes)
          }
        }
      } catch (error) {
        console.error('Error fetching vote data:', error)
      }
    }

    fetchVoteData()
  }, [deviceId])

  const handleVote = useCallback(async (productId: number, voteType: 'like' | 'dislike') => {
    const res = await fetch('/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, deviceId, voteType }),
    })

    if (!res.ok) {
      throw new Error('Vote failed')
    }

    const data = await res.json()
    
    // Update local state
    setVoteCounts(prev => ({
      ...prev,
      [productId]: { likes: data.likes, dislikes: data.dislikes }
    }))

    if (data.userVote) {
      setUserVotes(prev => ({ ...prev, [productId]: data.userVote }))
    } else {
      setUserVotes(prev => {
        const newVotes = { ...prev }
        delete newVotes[productId]
        return newVotes
      })
    }

    return {
      likes: data.likes,
      dislikes: data.dislikes,
      userVote: data.userVote,
    }
  }, [deviceId])

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const selectedLabel = categories.find(c => c.value === selectedCategory)?.label || "All Products"

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary mb-2 sm:mb-3">
            Our Collection
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Handcrafted with Love
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Each piece is carefully crafted by skilled artisans, bringing traditional 
            craftsmanship to your special moments.
          </p>
        </div>

        {/* Category Filter Dropdown (sticky below navbar) */}
        <div ref={stickyRef} className="sticky top-16 z-30 bg-background/95 py-4 sm:py-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[720px] flex justify-center mx-auto">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-full shadow-sm hover:shadow-md transition-all duration-200 min-w-[200px] justify-between mx-auto"
              >
                <span className="font-medium text-foreground">{selectedLabel}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-xl z-20 max-h-[320px] overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => {
                          setSelectedCategory(category.value)
                          setDropdownOpen(false)
                          // smooth scroll so product cards begin below the sticky filter
                          setTimeout(() => scrollToProducts(), 60)
                        }}
                        className={`w-full px-5 py-3 text-left font-medium transition-colors ${
                          selectedCategory === category.value
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Products Count */}
        <p className="text-center text-sm text-muted-foreground mb-6">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </p>

        {/* Products Grid */}
        <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              data-product-id={product.id}
              className="group bg-background rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image - Clickable for Lightbox */}
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                onClick={() => setLightboxImage({ src: product.image, alt: product.name })}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-foreground/60 px-4 py-2 rounded-full text-sm font-medium">
                    View Image
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2">
                  {product.description}
                </p>
                {product.size && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 mb-3">
                    <span className="font-medium mr-1">Size:</span>
                    {product.size}
                  </p>
                )}
                
                {/* Like/Dislike Buttons */}
                <LikeDislikeButtons
                  productId={product.id}
                  initialLikes={voteCounts[product.id]?.likes || 0}
                  initialDislikes={voteCounts[product.id]?.dislikes || 0}
                  deviceId={deviceId}
                  userVote={userVotes[product.id] || null}
                  onVote={handleVote}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Full Image */}
          <img
            src={lightboxImage?.src}
            alt={lightboxImage?.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Title */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-3 rounded-full">
            <p className="text-white font-serif text-lg">{lightboxImage?.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
