"use client";

import { Lightbulb, Clapperboard, TrendingUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function PositioningStatement() {
  const pillars = [
    {
      num: "01",
      title: "The Strategic Why",
      desc: "Deconstructing audience psychology, category white spaces, and consumer triggers before concepting a single creative asset.",
    },
    {
      num: "02",
      title: "The Creative Voice",
      desc: "Transforming strategic positioning into arresting hooks, high-retention video scripts, visual identity systems, and authentic narrative tone.",
    },
    {
      num: "03",
      title: "The Distribution & Reach",
      desc: "Executing across digital platforms, orchestrating creator/influencer partnerships, and analyzing performance data so communication actually cuts through the noise.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 lg:sticky lg:top-28"
          >
            <span className="editorial-num">
              [ 02 // Core Philosophy ]
            </span>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal leading-snug text-[#121316]">
              &ldquo;{portfolioData.personal.corePhilosophy}&rdquo;
            </blockquote>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#8C8F96] font-semibold">
                — Yuvika Sharma / Brand &amp; Content Strategist
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Numbered Pillars */}
          <div className="lg:col-span-6 space-y-8 pt-4 lg:pt-0">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="pb-8 border-b border-[#E7E3DA] last:border-b-0 space-y-3 group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xl sm:text-2xl text-[#FF3E1D] italic">
                    {pillar.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#121316] tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed pl-8">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
