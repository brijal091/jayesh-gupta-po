import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Let&apos;s Talk</h1>
          <div className="text-white">
            <p className="text-lg mb-4">
              I&apos;d love to hear from you! Whether you have a project in mind,
              want to collaborate, or just want to say hello.
            </p>
            {/* Add your contact form or contact information here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
