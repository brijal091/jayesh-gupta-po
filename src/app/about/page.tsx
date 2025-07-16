import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          <div className="text-white">
            <p className="text-lg mb-4">
              Welcome to my about page. Here you can learn more about my
              background, skills, and experience.
            </p>
            {/* Add your about content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
