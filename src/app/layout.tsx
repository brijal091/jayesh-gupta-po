
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Jayesh Gupta",
  description: "Fullstack developer  - Personal portfolio of Jayesh Gupta, showcasing projects and skills.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased no-scroll font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
