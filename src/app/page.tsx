import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import TalentPool from "@/components/TalentPool";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <TalentPool />
      <Process />
      {/* <Stats /> */}
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
