import Hero from "../components/Hero";
import Services from "../components/Services";
import Clinic from "../components/Clinic";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Clinic />
        <About />
        <Reviews />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}
