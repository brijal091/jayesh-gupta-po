import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          <div className="text-white">
            <p className="text-lg mb-4">
              Welcome to my blog. Here I share my thoughts, experiences, and
              insights about development, design, and technology.
            </p>
            {/* Add your blog content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
