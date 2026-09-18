import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Yuvika Sharma | Branding & Creative Strategist",
  description:
    "Learn about Yuvika Sharma — MBA in Marketing, Brand Communicator, and Storyteller. Discover background, perspectives on consumer communication, competencies, and academic credentials.",
  openGraph: {
    title: "About Yuvika Sharma — Marketing & Brand Strategy",
    description:
      "Rooted in marketing fundamentals, driven by creative storytelling. Discover Yuvika Sharma's background, perspective, and core competencies.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Yuvika Sharma — Brand & Creative Strategy",
    description:
      "Rooted in marketing fundamentals, driven by creative storytelling. Discover Yuvika Sharma's background and perspective.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
