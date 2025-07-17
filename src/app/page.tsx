// import Image from "next/image";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="h-[2000px]">
          <p className="font-bold text-primary-100">Hello World</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
