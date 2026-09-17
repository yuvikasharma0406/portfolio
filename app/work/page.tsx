"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData, type Project } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Sparkles, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "social-media", label: "Social Media & Growth" },
  { id: "brand-communication", label: "Brand Communication & Video" },
  { id: "campaigns", label: "Creative Campaigns" },
  { id: "research", label: "Market Research & Strategy" },
] as const;

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.categorySlug === activeTab);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <span className="editorial-num">
            [ Index // Selected Work ]
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-[#121316] leading-[1.05] tracking-tight">
            Selected Work &amp; Strategic Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-[#5F6368] font-normal leading-relaxed pt-2">
            A curated index of brand communication systems, multi-account campaigns, short-form video direction, and behavioral market research.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-[#E7E3DA]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#121316] text-white shadow-sm"
                  : "bg-white text-[#5F6368] border border-[#E7E3DA] hover:text-[#121316] hover:border-[#121316]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Project Stack */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
            >
              {filteredProjects.map((project: Project, idx) => {
                const indexStr = String(idx + 1).padStart(2, "0");
                return (
                  <article
                    key={project.id}
                    className="bg-white rounded-3xl border border-[#E7E3DA] p-8 sm:p-12 lg:p-14 hover:border-[#C4C0B6] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                      {/* Left Column: Index, Role & Scope */}
                      <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-[#F0ECE4] lg:pr-10">
                        <div className="flex items-center justify-between">
                          <span className="editorial-num">
                            {indexStr} // {project.categorySlug}
                          </span>
                          <span className="text-xs text-[#8C8F96]">{project.timeline}</span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-1">
                            Role &amp; Context
                          </span>
                          <p className="text-sm font-semibold text-[#121316]">
                            {project.role}
                          </p>
                          <p className="text-xs text-[#5F6368] mt-0.5">
                            {project.clientOrContext}
                          </p>
                        </div>

                        {/* Metrics Bar */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F0ECE4]">
                            {project.metrics.map((m, mIdx) => (
                              <div key={mIdx}>
                                <span className="text-2xl sm:text-3xl font-display text-[#121316] block">
                                  {m.value}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-[#5F6368] font-medium">
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="pt-2">
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-white hover:bg-[#FF3E1D] transition-colors"
                          >
                            <span>Read Full Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Title, Subtitle, Summary & Strategy */}
                      <div className="lg:col-span-8 space-y-6">
                        <Link href={`/work/${project.slug}`} className="block group">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-[#121316] group-hover:text-[#FF3E1D] transition-colors leading-[1.2]">
                            {project.title}
                          </h2>
                          <p className="text-sm sm:text-base font-display text-[#5F6368] mt-2 italic">
                            {project.subtitle}
                          </p>
                        </Link>

                        <p className="text-base text-[#5F6368] leading-relaxed">
                          {project.summary}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DA]">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#121316] block mb-1.5">
                              The Objective:
                            </span>
                            <p className="text-xs text-[#5F6368] leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>

                          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DA]">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF3E1D] block mb-1.5">
                              Strategic Thinking:
                            </span>
                            <p className="text-xs text-[#5F6368] leading-relaxed">
                              {project.approach}
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E3DA] text-[#5F6368]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
