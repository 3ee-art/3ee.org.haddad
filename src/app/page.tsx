import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Arsenal from "@/components/Arsenal";
import Philosophy from "@/components/Philosophy";
import TechMarquee from "@/components/TechMarquee";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Official Portal - Mohamed Yassin Haddad",
  description: "Excellence in cybersecurity and software development. Founded by Mohamed Yassin Haddad, the best security expert in Fnideq, Morocco.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyber-green selection:text-black">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Arsenal />
      <Philosophy />
      <Footer />
    </main>
  );
}
