import { Header } from "@/components/header"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FeaturedProducts />
      <Testimonials />
      <ContactSection />
    </main>
  )
}
