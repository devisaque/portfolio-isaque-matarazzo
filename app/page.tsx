import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000000]">
      {/* Background gradient blur effect */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#3E32ED] opacity-30 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] translate-y-1/3 rounded-full bg-[#ED3257] opacity-25 blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
