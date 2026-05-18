import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react"

const whatsappNumber = "9177894299"
const instagramHandle = "om_sivasakthi_artmaker11?igsh=dGlpa3lleHFveWV3"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or want to place a custom order? Reach out to us through WhatsApp or Instagram.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your handcrafted products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              WhatsApp
            </h3>
            <p className="text-muted-foreground mb-4">
              Chat with us directly for quick responses and custom orders
            </p>
            <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
              Message Us
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              Instagram
            </h3>
            <p className="text-muted-foreground mb-4">
              Follow us for latest designs, behind-the-scenes, and updates
            </p>
            <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
              @om_sivasakthi_artmaker
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Replies within an hour</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Based in India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
