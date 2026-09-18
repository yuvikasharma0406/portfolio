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
  metadataBase: new URL("https://yuvikasharma.com"),
  title: {
    default: "Yuvika Sharma — Branding × Content × Creative Strategy",
    template: "%s | Yuvika Sharma",
  },
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
  authors: [{ name: "Yuvika Sharma", url: "https://yuvikasharma.com" }],
  creator: "Yuvika Sharma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yuvika Sharma — Branding × Content × Creative Strategy",
    description:
      "Where strategic thinking meets creativity — understanding what a brand wants to communicate, why it should communicate it, and how to turn that thinking into content people notice.",
    url: "https://yuvikasharma.com",
    siteName: "Yuvika Sharma Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvika Sharma — Branding × Content × Creative Strategy",
    description:
      "Where strategic thinking meets creativity — turning insights into brand stories and digital campaigns that get noticed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuvika Sharma",
    url: "https://yuvikasharma.com",
    jobTitle: "Brand Communicator & Creative Strategist",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Narayana Business School",
    },
    knowsAbout: [
      "Brand Strategy",
      "Creative Strategy",
      "Content Strategy",
      "Social Media Marketing",
      "Video Storytelling",
    ],
    sameAs: [
      "https://www.linkedin.com/in/yuvika-sharma-513689255/",
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF9F6] text-[#141517] font-sans antialiased selection:bg-[#FF4D2E] selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
