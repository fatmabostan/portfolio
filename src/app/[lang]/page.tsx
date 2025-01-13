import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectSection } from "@/sections/Project";
import { TapeSection } from "@/sections/Tape";
import { ExperienceSection } from "@/sections/Experience";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { getDictionary } from "./dictionaries";
export default async function Home({params}: {params: Promise<{lang: 'en' | 'tr'}> }) {
  const lang = (await params).lang
  const dict = await getDictionary(lang);
  return (
    <div>
      <Header t={dict.header} />
      <HeroSection t={dict.hero} />
      <ProjectSection t={dict.projects} />
      <AboutSection t={dict.about} />
      <TapeSection t={dict.tape} />
      <ExperienceSection t={dict.experiences} />
      <ContactSection t={dict.contact} />
      <Footer />
    </div>
  );
}
