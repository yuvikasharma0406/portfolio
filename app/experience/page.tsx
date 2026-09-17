"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const { experiences, education, personal } = portfolioData;

  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-12 border-b border-[#E7E3DA]">
          <div className="max-w-3xl space-y-4">
            <span className="editorial-num">
              [ 01 // Professional Track Record ]
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-[#121316] leading-[1.05] tracking-tight">
              Experience &amp; Leadership
            </h1>
            <p className="text-lg sm:text-xl text-[#5F6368] font-normal leading-relaxed">
              Demonstrated responsibility across agency brand management, high-reach social platforms, and creative committees.
            </p>
          </div>

          <div>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-white hover:bg-[#FF3E1D] transition-all duration-300 shadow-sm"
            >
              <FileText className="w-4 h-4 text-[#FF3E1D]" />
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C8F96]" />
            </a>
          </div>
        </header>

        {/* 1. Timeline-Style Experience Ledger */}
        <section className="space-y-12 mb-20">
          {experiences.map((exp, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-[#E7E3DA] p-8 sm:p-12 lg:p-14 shadow-sm hover:border-[#C4C0B6] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Role Header */}
                  <div className="lg:col-span-4 space-y-4 lg:border-r lg:border-[#F0ECE4] lg:pr-8">
                    <div className="flex items-center justify-between">
                      <span className="editorial-num">
                        {num} // {exp.type}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316] leading-tight">
                      {exp.role}
                    </h2>

                    <p className="text-base font-semibold text-[#121316]">
                      {exp.organization}
                    </p>

                    <div className="space-y-1.5 text-xs text-[#8C8F96] pt-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#FF3E1D]" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#FF3E1D]" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Narrative & Verified Achievements */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#121316] block">
                        Verified Execution &amp; Key Highlights
                      </span>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs sm:text-sm text-[#4B5563] flex items-start gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E1D] mt-2 shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Applied */}
                    <div className="pt-4 border-t border-[#F0ECE4]">
                      <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-2">
                        Core Competencies Applied
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-3 py-1.5 rounded-md bg-[#FAF8F5] border border-[#E7E3DA] text-[#374151]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* 2. Education Section */}
        <section className="space-y-6 mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
            <GraduationCap className="w-4 h-4" />
            <span>02 // Academic Background</span>
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

        {/* Bottom CTA */}
        <footer className="pt-12 border-t border-[#E7E3DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#121316] hover:text-[#FF3E1D] transition-colors"
          >
            <span>Explore Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-white hover:bg-[#FF3E1D] transition-colors"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
