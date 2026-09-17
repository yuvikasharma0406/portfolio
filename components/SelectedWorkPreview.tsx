"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWorkPreview() {
  // Pick the top 3 featured projects
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <section id="selected-work" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E7E3DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeading
          eyebrow="03 // Selected Work"
          title="Featured Projects &amp; Case Studies"
          description="Real-world execution across brand launches, multi-account management, video direction, and field research."
          action={
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] hover:text-[#FF3E1D] transition-colors group"
            >
              <span>Explore all case studies</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          }
        />

        {/* Project Editorial Stack */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              layout="detailed"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
