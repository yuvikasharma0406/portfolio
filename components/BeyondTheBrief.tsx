"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, BookOpen, Music, Compass } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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

const PERSONAL_CURRENTS = [
  {
    icon: Music,
    tag: "Dance & Rhythm",
    title: "Timing & Physical Cadence",
    desc: "Dancing trains an instinct for tempo, tension, and release. That physical sense of rhythm directly influences how I edit video hooks, time scene cuts, and pace written copy.",
  },
  {
    icon: BookOpen,
    tag: "Journal Writing",
    title: "Everyday Human Observation",
    desc: "Keeping a daily written log of unfiltered moments, eavesdropped snippets, and street behavior. Great marketing copy always starts with honest real-world observation.",
  },
  {
    icon: Compass,
    tag: "Brand Architecture",
    title: "Deconstructing Packaging & Spaces",
    desc: "Obsessing over why café menus, retail checkout counters, and street stalls price things the way they do — understanding the unwritten cues of perceived value.",
  },
];

export default function BeyondTheBrief() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeading
          eyebrow="06 // Perspective"
          title="Beyond the brief."
          description="The instincts, habits, and daily observations that inform how I think about communication."
        />

        {/* 1. "Things I Notice" Editorial Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Eye className="w-4 h-4 text-[#FF3E1D]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#121316]">
              Things I Notice &amp; Deconstruct
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {OBSERVATIONS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-3 hover:border-[#121316] transition-colors shadow-sm group"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FF3E1D] block">
                  // {item.topic}
                </span>
                <h3 className="text-xl font-display font-normal text-[#121316] group-hover:text-[#FF3E1D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed pt-1">
                  &ldquo;{item.note}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Personal Currents (Dance, Journaling, Spatial Observation) */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#FF3E1D]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#121316]">
              Creative Influences Outside Office Hours
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PERSONAL_CURRENTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-[#E7E3DA] space-y-4 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8F96]">
                        {item.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#FF3E1D]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-lg font-display font-normal text-[#121316]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed pt-2 border-t border-[#F0ECE4]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
