import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Selected Work & Strategic Case Studies — Yuvika Sharma",
  description:
    "Explore strategic case studies in brand communication, short-form video production, TEDx social media growth (600K+ reach), and agency brand management.",
  openGraph: {
    title: "Selected Work — Yuvika Sharma | Branding × Creative Strategy",
    description:
      "Strategic case studies in brand communication, short-form video storytelling, and audience growth by Yuvika Sharma.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work — Yuvika Sharma",
    description:
      "Strategic case studies in brand communication, short-form video storytelling, and audience growth.",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
