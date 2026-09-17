"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

export default function ExperienceSnapshot() {
  const experiences = portfolioData.experiences;

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeading
          eyebrow="05 // Experience"
          title="Hands-on brand execution."
          description="Leadership, agency internship, and institutional communication responsibilities."
          action={
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] hover:text-[#FF3E1D] transition-colors group"
            >
              <span>View full timeline</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          }
        />

        {/* Experience Ledger Cards */}
        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-[#E7E3DA] p-8 sm:p-12 transition-all duration-300 hover:border-[#C4C0B6] hover:shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Left Column: Role Details */}
                <div className="md:col-span-4 space-y-3 md:border-r md:border-[#F0ECE4] md:pr-8">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#FAF8F5] text-[#FF3E1D] border border-[#E7E3DA]">
                    {exp.type}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-display font-normal text-[#121316] leading-snug">
                    {exp.role}
                  </h3>

                  <p className="text-sm font-semibold text-[#121316]">
                    {exp.organization}
                  </p>

                  <div className="space-y-1 text-xs text-[#8C8F96] pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF3E1D]" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF3E1D]" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Narrative & Highlights */}
                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-[#4B5563] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E1D] mt-2 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F0ECE4]">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E7E3DA] text-[#6B7280]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
