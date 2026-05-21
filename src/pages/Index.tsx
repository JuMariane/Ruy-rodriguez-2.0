import SchoolNav from "@/components/SchoolNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SchedulesSection from "@/components/SchedulesSection";
import SchoolLifeSection from "@/components/SchoolLifeSection";
import AntiracistSection from "@/components/AntiracistSection";
import DownloadsSection from "@/components/DownloadsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SchoolFooter from "@/components/SchoolFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchoolNav />
      <HeroSection />
      <AboutSection />
      <SchedulesSection />
      <SchoolLifeSection />
      <AntiracistSection />
      <DownloadsSection />
      <FAQSection />
      <ContactSection />
      <SchoolFooter />
    </div>
  );
};

export default Index;
