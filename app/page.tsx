import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { TechnologySection } from "@/components/technology-section"
import { PlansSection } from "@/components/plans-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <TechnologySection />
        <PlansSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
