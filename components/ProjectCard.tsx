"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_EXPO } from "@/components/motion/MotionFade";

interface ProjectCardProps {
  project: Project;
  layout?: "detailed" | "compact";
  index?: number;
  className?: string;
}

export default function ProjectCard({
  project,
  layout = "detailed",
  index = 0,
  className,
}: ProjectCardProps) {
  const indexStr = String(index + 1).padStart(2, "0");
  const shouldReduceMotion = useReducedMotion();

  if (layout === "compact") {
    return (
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.05, ease: EASE_EXPO }}
        whileHover={shouldReduceMotion ? {} : { y: -3 }}
        className={cn("group", className)}
      >
        <Link
          href={`/work/${project.slug}`}
          className="block p-6 sm:p-8 bg-white rounded-2xl border border-[#E7E3DA] hover:border-[#121316] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between text-xs text-[#8C8F96] mb-4">
            <span className="font-semibold text-[#FF3E1D] uppercase tracking-wider text-[11px]">
              {project.category}
            </span>
            <span>{project.timeline}</span>
          </div>
          <h3 className="text-xl font-display font-normal text-[#121316] group-hover:text-[#FF3E1D] transition-colors duration-200 leading-snug mb-3">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#5F6368] line-clamp-2 leading-relaxed mb-6">
            {project.summary}
          </p>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] group-hover:text-[#FF3E1D] transition-colors duration-200">
            <span>Read Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.08, ease: EASE_EXPO }}
      className={cn(
        "bg-white rounded-3xl border border-[#E7E3DA] p-8 sm:p-12 lg:p-14 transition-all duration-300 group",
        "hover:border-[#C4C0B6] hover:shadow-[0_8px_40px_rgba(18,19,22,0.08)]",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

        {/* Left Column: Metadata & Metrics */}
        <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-[#F0ECE4] lg:pr-10">
          <div className="flex items-center justify-between">
            <span className="editorial-num">
              {indexStr} // {project.category}
            </span>
            <span className="text-xs text-[#8C8F96]">{project.timeline}</span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-1">
              Context / Brand
            </span>
            <p className="text-base font-semibold text-[#121316]">
              {project.clientOrContext}
            </p>
          </div>

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
            <motion.div
              whileHover={shouldReduceMotion ? {} : { x: 2 }}
              transition={{ duration: 0.15 }}
              className="inline-flex"
            >
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] group-hover:text-[#FF3E1D] transition-colors duration-200"
              >
                <span>View Full Strategy Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Title, Summary & Strategic Architecture */}
        <div className="lg:col-span-8 space-y-6">
          <Link href={`/work/${project.slug}`} className="block">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-[#121316] group-hover:text-[#FF3E1D] transition-colors duration-300 leading-[1.2]">
              {project.title}
            </h3>
          </Link>

          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed font-normal">
            {project.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DA] transition-colors duration-200 group-hover:border-[#E0DDD5]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#121316] block mb-1.5">
                The Challenge:
              </span>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DA] transition-colors duration-200 group-hover:border-[#E0DDD5]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF3E1D] block mb-1.5">
                Strategy &amp; Voice:
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
                className="text-xs px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E3DA] text-[#5F6368] transition-colors duration-200 hover:border-[#121316] hover:text-[#121316]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
