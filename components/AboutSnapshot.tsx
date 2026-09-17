"use client";

import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function AboutSnapshot() {
  const { skillsCategorized, certifications } = portfolioData;

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Marketing Perspective */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="editorial-num">
              [ 04 // About Me ]
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#121316] leading-tight">
              Rooted in marketing fundamentals, driven by creative storytelling.
            </h2>

            <div className="space-y-4 text-base text-[#5F6368] leading-relaxed">
              <p>
                I am an MBA + PGPCE student specialising in Marketing at <span className="text-[#121316] font-medium">Narayana Business School</span>, with a growing focus on branding, brand communication, content, and creative strategy.
              </p>
              <p>
                I thrive in the space where strategic consumer insight meets memorable execution. Whether building the brand voice for TEDxNBS to achieve 600K+ reach or managing communication across seven distinct brands at Vacha.inc, I treat every project as an opportunity to craft stories that resonate with genuine human intent.
              </p>
            </div>

            {/* Academic Highlight */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E3DA] space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3E1D]">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <p className="text-base font-medium text-[#121316]">
                MBA + PGPCE in Marketing (2025–2027)
              </p>
              <p className="text-xs text-[#8C8F96]">
                Narayana Business School, Ahmedabad
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] hover:text-[#FF3E1D] transition-colors"
              >
                <span>Read full background &amp; perspective</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Strategic & Creative Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Core Competencies Box */}
            <div className="bg-white rounded-3xl border border-[#E7E3DA] p-8 sm:p-10 space-y-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#121316] block">
                Skills &amp; Capabilities
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF3E1D] block mb-2">
                    Brand &amp; Content
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsCategorized.brand.concat(skillsCategorized.content).slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E7E3DA] text-[#374151]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#121316] block mb-2">
                    Social &amp; Strategy
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsCategorized.social.concat(skillsCategorized.strategy).slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E7E3DA] text-[#374151]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-[#F0ECE4]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C8F96] block mb-2">
                    Tools &amp; Analytics
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsCategorized.tools.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#F4F1EA] text-[#5F6368]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Highlight */}
            <div className="bg-white rounded-3xl border border-[#E7E3DA] p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#121316]">
                <Award className="w-4 h-4 text-[#FF3E1D]" />
                <span>Recognized Certifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {certifications.slice(0, 2).map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] space-y-1">
                    <span className="text-xs font-semibold text-[#121316] block">
                      {cert.name}
                    </span>
                    <span className="text-[11px] font-medium text-[#FF3E1D] block">
                      {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
