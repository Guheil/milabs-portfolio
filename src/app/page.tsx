import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
