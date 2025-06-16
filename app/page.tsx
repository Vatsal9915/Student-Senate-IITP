import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { EventsHighlights } from "@/components/events-highlights"
import { NoticesSection } from "@/components/notices-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ResourcesSection } from "@/components/resources-section"
import { ContactForm } from "@/components/contact-form"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <EventsHighlights />
      <NoticesSection />
      <UpcomingEvents />
      <TestimonialsSection />
      <ResourcesSection />
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg lg:text-xl text-gray-600">Have questions? We'd love to hear from you</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <CTASection />
    </div>
  )
}
