import { useState, useEffect } from "react";
import SchoolNav from "@/components/SchoolNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SchedulesSection from "@/components/SchedulesSection";
import SchoolLifeSection from "@/components/SchoolLifeSection";
import MuralSection from "@/components/MuralSection";
import AntiracistSection from "@/components/AntiracistSection";
import DownloadsSection from "@/components/DownloadsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SchoolFooter from "@/components/SchoolFooter";
import LoginModal, { UserType } from "@/components/LoginModal";

const Index = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("ruy_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Erro ao carregar usuário:", e);
      }
    }
  }, []);

  const handleLogin = (newUser: UserType) => {
    setUser(newUser);
    localStorage.setItem("ruy_user", JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("ruy_user");
  };

  return (
    <div className="min-h-screen bg-background">
      <SchoolNav 
        user={user} 
        onLogout={handleLogout} 
        onOpenLogin={() => setIsLoginOpen(true)} 
      />
      <HeroSection />
      <AboutSection />
      <SchedulesSection />
      <SchoolLifeSection />
      <MuralSection 
        user={user} 
        onOpenLogin={() => setIsLoginOpen(true)} 
      />
      <AntiracistSection />
      <DownloadsSection />
      <FAQSection />
      <ContactSection />
      <SchoolFooter />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default Index;
