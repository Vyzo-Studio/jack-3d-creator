import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactFooter } from './sections/ContactFooter';

export default function App() {
  return (
    <main className="overflow-x-clip bg-ink text-mist selection:bg-fuchsia-500 selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
