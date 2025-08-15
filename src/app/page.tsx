import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Tools from "@/components/sections/tools";
import Footer from "@/components/footer";
import DarkModeStars from "@/components/ui/dark-mode-stars";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DarkModeStars />
      <Navigation />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Experience />
        <Tools />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
