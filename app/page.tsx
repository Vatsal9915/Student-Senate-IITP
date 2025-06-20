import { HeroSection } from "@/components/hero-section"
import { EventsHighlights } from "@/components/events-highlights"
import { NoticesSection } from "@/components/notices-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ResourcesSection } from "@/components/resources-section"
import { ContactForm } from "@/components/contact-form"
import { CTASection } from "@/components/cta-section"
import StatsSection from "@/components/stats-section"
import WingsSection from "@/components/WingsSection"
import CoreValues from "@/components/coreValues"
import FaQ from "@/components/FaQ"
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection/>
      <WingsSection/>
      <CoreValues/>
      <NoticesSection />
      <FaQ/>
    </div>
  )
}
