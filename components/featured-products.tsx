"use client"

const products = [
  // Bangles
  {
    id: 1,
    name: "Resin Bangles",
    description: "Elegant handmade resin bangles crafted beautifully with floral artistic designs",
    image: "/products/bangles.jpeg",
  },

  // Wedding Crafts
  {
    id: 5,
    name: "Wedding Coconut Art",
    description: "Traditional handcrafted wedding coconut decorated elegantly with artistic pearl details",
    image: "/products/marriage_coconut.jpeg",
  },
  {
    id: 6,
    name: "Wedding Memory Frame",
    description: "Elegant handmade wedding frame crafted beautifully with memorable couple moments",
    image: "/products/marriage2.jpeg",
  },
  {
    id: 7,
    name: "Wedding Memory Collage",
    description: "Handmade wedding collage frame preserving beautiful ceremonies and memorable couple moments",
    image: "/products/marriage3.jpeg",
  },
  {
    id: 8,
    name: "Wedding Memory Tray",
    description: "Elegant handmade wedding tray beautifully designed with flowers and memorable moments",
    image: "/products/marriage4.jpeg",
  },

  // Couple & Love Frames
  {
    id: 9,
    name: "Couple Resin Frame",
    description: "Customized resin couple frame designed artistically with flowers and beautiful memories",
    image: "/products/marriage1.jpeg",
  },
  {
    id: 10,
    name: "Love Memory Frame",
    description: "Customized handmade love frame crafted beautifully with photos and artistic decorations",
    image: "/products/marriage_frame.jpeg",
  },
  {
    id: 11,
    name: "Memory Couple Frame",
    description: "Customized handmade frame preserving beautiful memories with creative artistic personalized designs",
    image: "/products/birthday1.jpeg",
  },
  {
    id: 12,
    name: "Memory Quote Frame",
    description: "Customized handmade quote frame expressing emotions, memories, love, and relationships",
    image: "/products/birthday2.jpeg",
  },
  {
    id: 13,
    name: "Emotional Quote Frame",
    description: "Personalized handmade quote frame expressing love, emotions, and meaningful relationships",
    image: "/products/birthday3.jpeg",
  },
  {
    id: 14,
    name: "Photo Memory Frame",
    description: "Creative handmade memory frame designed with photos and artistic decorative elements",
    image: "/products/calender3.jpeg",
  },

  // Rakhis
  {
    id: 2,
    name: "Personalized Rakhis",
    description: "Handmade colorful rakhis crafted beautifully with names, beads, and love",
    image: "/products/rakhi2.jpeg",
  },
  {
    id: 3,
    name: "Designer Rakhis",
    description: "Handmade designer rakhis crafted beautifully with colorful beads and personalized names",
    image: "/products/brace_lights.jpeg",
  },

  // Clocks
  {
    id: 4,
    name: "Couple Clock",
    description: "Elegant customized clock crafted beautifully with couple memories and floral designs",
    image: "/products/clock1.jpeg",
  },

  // Calendar Frames
  {
    id: 15,
    name: "Memory Calendar",
    description: "Personalized handmade calendar beautifully designed with memorable photos and special dates",
    image: "/products/calender2.jpeg",
  },
  {
    id: 16,
    name: "Birthday Calendar Frame",
    description: "Customized birthday calendar frame preserving precious memories with elegant handmade designs",
    image: "/products/calender1.jpeg",
  },
  // Baby Frames
  {
    id: 18,
    name: "Baby Memory Board",
    description: "Customized handmade baby board preserving precious birth memories and special moments",
    image: "/products/babyborn.jpeg",
  },
  {
    id: 19,
    name: "Custom Resin Name Board",
    description: "Personalized handmade resin name board crafted beautifully with seashell artistic designs",
    image: "/products/shopname1.jpeg",
  },
]

export function FeaturedProducts() {

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

        {/* Products Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-background rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
