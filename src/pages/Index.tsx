import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';
import { CinematicIntro } from '@/components/CinematicIntro';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}
      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <VideoSection />
          <AboutSection />
          <ProjectsSection />
          <PartnersSection />
          <TestimonialsSection />
          <MissionSection />
          <CTASection />
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </>
  );
};

export default Index;
