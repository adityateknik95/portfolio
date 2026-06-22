import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only z-[60] rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <FeaturedProjects />
        <Skills />
        <About />
        <Footer />
      </main>
    </>
  );
}
