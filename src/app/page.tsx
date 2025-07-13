// import Image from "next/image";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
    <main>
    <Navbar/>
    <div className="h-full">
      <p className="font-bold text-primary-100">Hello World</p>
    </div>
    <Footer/>
    </main>
    </>
  );
}
