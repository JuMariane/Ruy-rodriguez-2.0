import SchoolNav from "@/components/SchoolNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AntiracistSection from "@/components/AntiracistSection";
import ContactSection from "@/components/ContactSection";
import SchoolFooter from "@/components/SchoolFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchoolNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AntiracistSection />
      <ContactSection />
      <SchoolFooter />
    </div>
  );
};

export default Index;
