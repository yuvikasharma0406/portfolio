import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience & Leadership — Yuvika Sharma",
  description:
    "Professional track record of Yuvika Sharma — Brand Executive Intern across 7+ accounts at Vacha.inc, Social Media Manager at TEDxNBS (600K+ reach), and Vice Head of NBS Social Media Committee.",
  openGraph: {
    title: "Experience & Track Record — Yuvika Sharma",
    description:
      "Agency brand execution, social media management, video direction, and creative leadership experience by Yuvika Sharma.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience & Track Record — Yuvika Sharma",
    description:
      "Agency brand execution, social media management, video direction, and creative leadership experience.",
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
