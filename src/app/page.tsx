import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/navbar";

// Lazy load do componente 3D para melhor performance inicial
const Background3D = dynamic(() => import("@/components/background-3d"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
