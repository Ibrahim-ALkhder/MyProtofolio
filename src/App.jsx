import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#1f2937]">
      <Navbar />

      <main>
        <HeroSection />

        <div className="section-blend-light-to-dark" />
        <ProjectsSection />

        <div className="section-blend-dark-to-light" />
        <SkillsSection />

        <div className="section-blend-light-to-dark" />
      </main>

      <Footer />
    </div>
  );
}