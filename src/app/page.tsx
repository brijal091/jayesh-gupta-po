import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/offering/Services";
import HeroSection from "@/pages/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <HeroSection />
        <Services/>
      </main>
      <Footer />
    </div>
  );
}
