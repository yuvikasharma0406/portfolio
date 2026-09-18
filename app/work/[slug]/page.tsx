import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData, type Project } from "@/data/portfolio";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Target,
  Compass,
  Film,
  TrendingUp,
  BookOpen,
  Image as ImageIcon,
  CheckCircle2,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";

import type { Metadata } from "next";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Case Study Not Found — Yuvika Sharma",
    };
  }
  return {
    title: `${project.title} — Case Study | Yuvika Sharma`,
    description: `${project.subtitle} Strategic breakdown covering ${project.category.toLowerCase()} and verified results.`,
    openGraph: {
      title: `${project.title} — Yuvika Sharma`,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Yuvika Sharma`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = portfolioData.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects[projectIndex];
  const nextProject =
    portfolioData.projects[(projectIndex + 1) % portfolioData.projects.length];

  return (
    <article className="py-12 sm:py-20 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C8F96] hover:text-[#121316] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all work</span>
          </Link>
        </div>

        {/* 1. Header: Category, Title & One-line Description */}
        <header className="space-y-6 pb-12 border-b border-[#E7E3DA]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="editorial-num">
              [ Case Study // {project.category} ]
            </span>
            <span className="text-xs text-[#8C8F96]">•</span>
            <span className="text-xs text-[#8C8F96]">{project.timeline}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-normal text-[#121316] leading-[1.1] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl font-display text-[#5F6368] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Quick Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#F0ECE4] text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-1">
                Role
              </span>
              <p className="font-semibold text-[#121316]">{project.role}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-1">
                Timeline
              </span>
              <p className="font-semibold text-[#121316]">{project.timeline}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-1">
                Context / Client
              </span>
              <p className="font-semibold text-[#121316]">{project.clientOrContext}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block mb-1">
                Category
              </span>
              <p className="font-semibold text-[#121316]">{project.category}</p>
            </div>
          </div>
        </header>

        {/* 2. Key Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="my-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E3DA] shadow-sm">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8F96] block mb-6">
              Verified Highlights &amp; Scope
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-display text-[#121316]">
                    {m.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#5F6368] font-medium">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. The Context & The Challenge */}
        <div className="space-y-16 py-10">
          {/* Context */}
          <section className="space-y-4">
            <span className="editorial-num">[ 01 // Context ]</span>
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
              The Context
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
              {project.context}
            </p>
          </section>

          {/* The Challenge / Objective */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E3DA] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
              <Target className="w-4 h-4" />
              <span>02 // The Challenge &amp; Objective</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
              What problem needed solving?
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* My Approach (Strategy & Thinking) */}
          <section className="space-y-4">
            <span className="editorial-num">[ 03 // My Approach ]</span>
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
              Strategic Thinking &amp; Formulation
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
              {project.approach}
            </p>
          </section>

          {/* Execution (What I Created) */}
          <section className="space-y-6">
            <span className="editorial-num">[ 04 // Execution ]</span>
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
              What I Created &amp; Delivered
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {project.execution.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E7E3DA] space-y-2 shadow-sm"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg sm:text-xl text-[#FF3E1D] italic">
                      0{sIdx + 1}
                    </span>
                    <h3 className="text-base sm:text-xl font-semibold text-[#121316] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed pt-1 sm:pt-0 sm:pl-8">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Gallery / Structural Placeholders */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="space-y-6 pt-6">
              <span className="editorial-num">[ 05 // Visual Gallery &amp; Artifacts ]</span>
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
                Campaign &amp; Strategic Assets
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((item, gIdx) => (
                  <div
                    key={gIdx}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-4 flex flex-col justify-between shadow-sm group hover:border-[#121316] transition-colors"
                  >
                    <div className="aspect-[16/10] w-full rounded-2xl bg-[#FAF8F5] border border-dashed border-[#D9D5CC] flex flex-col items-center justify-center p-6 text-center space-y-2 group-hover:bg-[#F2EFE9] transition-colors">
                      <ImageIcon className="w-8 h-8 text-[#8C8F96]" />
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FF3E1D]">
                        [PROJECT VISUAL TO BE ADDED]
                      </span>
                      <p className="text-xs font-medium text-[#121316]">
                        {item.placeholderLabel || item.caption}
                      </p>
                      {item.highlight && (
                        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#E7E3DA] text-[#5F6368]">
                          {item.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#8C8F96] italic text-center">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Result / Outcome (What Happened) */}
          <section className="p-6 sm:p-12 rounded-3xl bg-[#121316] text-white space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
              <TrendingUp className="w-4 h-4" />
              <span>06 // Outcome &amp; Verified Results</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-normal text-white">
              What happened?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#E5E7EB] leading-relaxed">
              {project.outcome}
            </p>
          </section>

          {/* Key Learning */}
          {project.learnings && (
            <section className="p-6 sm:p-10 rounded-3xl bg-white border-l-4 border-[#FF3E1D] border-y border-r border-[#E7E3DA] space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF3E1D]">
                <BookOpen className="w-4 h-4" />
                <span>07 // Core Strategic Learning</span>
              </div>
              <blockquote className="text-base sm:text-xl font-display italic text-[#121316] leading-relaxed">
                &ldquo;{project.learnings}&rdquo;
              </blockquote>
            </section>
          )}
        </div>

        {/* Next Case Study Navigation */}
        <footer className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[#E7E3DA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <Link
            href="/work"
            className="inline-flex items-center justify-center sm:justify-start gap-2 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[#8C8F96] hover:text-[#121316] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View all work index</span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between gap-3 p-4 sm:p-6 rounded-2xl bg-white border border-[#E7E3DA] hover:border-[#121316] transition-all shadow-sm"
          >
            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block">
                Next Case Study
              </span>
              <span className="text-sm font-semibold text-[#121316] group-hover:text-[#FF3E1D] transition-colors line-clamp-1">
                {nextProject.title}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#121316] group-hover:bg-[#FF3E1D] group-hover:text-white transition-colors shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </footer>
      </div>
    </article>
  );
}
