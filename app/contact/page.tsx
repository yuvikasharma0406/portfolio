import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Yuvika Sharma | Let's Talk",
  description:
    "Get in touch with Yuvika Sharma for brand communication, content strategy, video production, and creative collaboration opportunities.",
  openGraph: {
    title: "Let's Make Something Worth Noticing — Yuvika Sharma",
    description:
      "Open to brand communication, creative strategy, content roles, and collaborative projects. Let's connect.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yuvika Sharma",
    description:
      "Open to brand communication, creative strategy, content roles, and collaborative projects.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
