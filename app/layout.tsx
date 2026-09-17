import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Yuvika Sharma — Branding × Content × Creative Strategy",
  description:
    "Portfolio of Yuvika Sharma — MBA in Marketing, Brand Communicator, and Content Strategist. Specializing in brand identity, video storytelling, and creative direction.",
  keywords: [
    "Yuvika Sharma",
    "Brand Strategy",
    "Creative Strategy",
    "Content Strategy",
    "Brand Communication",
    "Social Media Marketing",
    "Narayana Business School",
    "TEDx",
    "Vacha.inc",
  ],
  authors: [{ name: "Yuvika Sharma" }],
  openGraph: {
    title: "Yuvika Sharma — Branding × Content × Creative Strategy",
    description:
      "Where strategic thinking meets creativity — understanding what a brand wants to communicate, why it should communicate it, and how to turn that thinking into content people notice.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF9F6] text-[#141517] font-sans antialiased selection:bg-[#FF4D2E] selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
