import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { HOME_CONTENT } from "@/constants/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container text-white mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary-100 text-2xl tracking-wider font-semibold">{HOME_CONTENT.TITLE_TAG}</p>
              <h1 className="text-5xl md:text-7xl font-milkwhite ">
                {HOME_CONTENT.GREETING} <span className="text-9xl">{HOME_CONTENT.NAME_HIGHLIGHT}</span> {HOME_CONTENT.SPEAKING}
              </h1>
              <p className="text-xl">
                <span className="font-semibold">{HOME_CONTENT.EXPERIENCE.YEARS}</span> <span className="text-primary-100">{HOME_CONTENT.EXPERIENCE.DESCRIPTION}</span>
              </p>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
