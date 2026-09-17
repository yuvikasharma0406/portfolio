"use client";

import { portfolioData } from "@/data/portfolio";
import {
  GraduationCap,
  Award,
  Sparkles,
  Heart,
  Users,
  Compass,
  FileText,
  ArrowUpRight,
  Lightbulb,
  Eye,
  Music,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const OBSERVATIONS = [
  {
    topic: "On Scrolling",
    title: "Why someone stopped scrolling",
    note: "The first two seconds are rarely about information — they're about emotional friction. If the visual doesn't disrupt cognitive autopilot, the best copy goes unread.",
  },
  {
    topic: "On Luxury & Restraint",
    title: "Why one brand feels premium",
    note: "It isn't gold foil or high prices — it's the discipline of restraint. Premium brands have the confidence to use whitespace and say fewer words with absolute clarity.",
  },
  {
    topic: "On Memory",
    title: "Why certain campaigns linger",
    note: "They didn't pitch a product feature; they named and validated an unsaid human feeling that people recognized instantly.",
  },
  {
    topic: "On Visual Details",
    title: "How micro-details change perception",
    note: "Pacing, the pause before a punchline, font kerning, and color temperature quietly tell the viewer whether a brand is trustworthy before their brain even analyzes the argument.",
  },
];

export default function AboutPage() {
  const { personal, education, skillsCategorized, certifications, creativeInterests } =
    portfolioData;

  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Eyebrow & Header */}
        <header className="space-y-4 mb-16 pb-12 border-b border-[#E7E3DA]">
          <span className="editorial-num">[ 01 // About Me ]</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-[#121316] leading-[1.05] tracking-tight">
            Curious about human behavior. Passionate about brand storytelling.
          </h1>
        </header>

        {/* 1. Who I Am & Story Narrative */}
        <section className="space-y-8 mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E3DA] space-y-6 shadow-sm">
            <span className="editorial-num">[ Who I Am ]</span>

            <p className="text-xl sm:text-2xl font-display text-[#121316] leading-relaxed">
              I am an MBA + PGPCE student specialising in Marketing, with a growing focus on branding, brand communication, content and creative strategy.
            </p>

            <div className="space-y-5 text-base sm:text-lg text-[#5F6368] leading-relaxed pt-2">
              <p>
                My journey into marketing is driven by a genuine curiosity about brands — not just how they look on a billboard or social feed, but <span className="text-[#121316] font-medium">why</span> they position themselves the way they do, and how they carve out a distinct emotional territory in people&apos;s minds.
              </p>
              <p>
                I thrive in the space where analytical strategy meets creative storytelling. A spreadsheet or market research report reveals the consumer insight; creative strategy turns that insight into words, scripts, and visual moments that make people pause and remember.
              </p>
              <p>
                I believe in learning through real execution. Rather than treating marketing as purely theoretical concepts, I&apos;ve tested ideas directly in the field — whether that meant authoring video scripts and stepping in for on-camera brand modeling across seven accounts at Vacha.inc, or building a social media brand from ground zero to achieve 600K+ reach for TEDxNBS.
              </p>
              <p>
                My working style is deeply collaborative. The best brand work doesn&apos;t happen in a silo; it happens when strategists, designers, creators, and client teams share an aligned vision and execute with high creative standards.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Things I Notice (Personality & Observational Instincts) */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
            <Eye className="w-4 h-4" />
            <span>02 // Beyond The Brief: Things I Notice</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
            Everyday Observations on Communication
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OBSERVATIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-3 shadow-sm hover:border-[#121316] transition-colors"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FF3E1D] block">
                  // {item.topic}
                </span>
                <h3 className="text-lg font-display font-normal text-[#121316]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed pt-1">
                  &ldquo;{item.note}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Education */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
            <GraduationCap className="w-4 h-4" />
            <span>03 // Academic Foundation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-3 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF8F5] text-[#8C8F96] border border-[#E7E3DA] inline-block">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-display font-normal text-[#121316]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF3E1D]">
                    {edu.field}
                  </p>
                  <p className="text-xs text-[#5F6368] font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
                {edu.details && (
                  <p className="text-xs text-[#8C8F96] leading-relaxed pt-2 border-t border-[#F0ECE4]">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Skills (Restrained & Categorized) */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="editorial-num">[ 04 // Competencies ]</span>
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
                Skills &amp; Capabilities
              </h2>
            </div>
            <span className="text-xs text-[#8C8F96] hidden sm:inline-block italic">
              Demonstrated through project execution
            </span>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E3DA] space-y-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF3E1D] block">
                  Brand
                </span>
                <ul className="space-y-2">
                  {skillsCategorized.brand.map((s, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#5F6368] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7E3DA] mt-2 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#121316] block">
                  Content
                </span>
                <ul className="space-y-2">
                  {skillsCategorized.content.map((s, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#5F6368] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7E3DA] mt-2 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF3E1D] block">
                  Social
                </span>
                <ul className="space-y-2">
                  {skillsCategorized.social.map((s, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#5F6368] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7E3DA] mt-2 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#121316] block">
                  Strategy
                </span>
                <ul className="space-y-2">
                  {skillsCategorized.strategy.map((s, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#5F6368] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7E3DA] mt-2 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="space-y-3 sm:col-span-2 lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C8F96] block">
                  Tools &amp; Analytics
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {skillsCategorized.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E3DA] text-[#121316] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Certifications & Creative Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Certifications */}
          <div className="p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </div>

            <div className="space-y-4">
              {certifications.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] space-y-1">
                  <p className="text-xs font-semibold text-[#121316]">{c.name}</p>
                  <p className="text-[11px] font-medium text-[#FF3E1D]">{c.issuer}</p>
                  <p className="text-[11px] text-[#5F6368] leading-relaxed pt-1">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Interests */}
          <div className="p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
              <Sparkles className="w-4 h-4" />
              <span>Creative Interests &amp; Expression</span>
            </div>

            <div className="space-y-4">
              {creativeInterests.map((interest, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] space-y-1">
                  <span className="text-xs font-semibold text-[#121316] block">
                    {interest.title}
                  </span>
                  <span className="text-xs text-[#5F6368] leading-relaxed block">
                    {interest.desc}
                  </span>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] space-y-1">
                <span className="text-xs font-semibold text-[#121316] block">
                  Languages
                </span>
                <span className="text-xs text-[#5F6368] block">
                  English (Fluent) • Hindi (Fluent) • Marwari (Native)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Work / Contact */}
        <footer className="pt-12 border-t border-[#E7E3DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-white hover:bg-[#FF3E1D] transition-colors"
          >
            <span>Explore my work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#121316] hover:text-[#FF3E1D] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#FF3E1D]" />
            <span>Download Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8C8F96]" />
          </a>
        </footer>
      </div>
    </div>
  );
}
