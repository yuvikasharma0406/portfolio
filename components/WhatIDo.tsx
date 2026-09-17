"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { MessageSquare, Feather, Share2, Compass } from "lucide-react";
import { EASE_EXPO } from "@/components/motion/MotionFade";

const CAPABILITIES = [
  {
    num: "01",
    title: "Brand Communication",
    icon: MessageSquare,
    desc: "Crafting clear brand positioning, distinct tone of voice, and messaging hierarchies that differentiate a brand in crowded categories.",
    deliverables: ["Brand Voice & Tone", "Core Messaging", "Positioning Frameworks"],
  },
  {
    num: "02",
    title: "Content & Storytelling",
    icon: Feather,
    desc: "Translating business objectives into emotional, human-centric narratives that capture consumer curiosity and drive brand recall.",
    deliverables: ["Narrative Architecture", "Scriptwriting", "Editorial Strategy"],
  },
  {
    num: "03",
    title: "Social Media & Growth",
    icon: Share2,
    desc: "Building digital communities from zero, planning dynamic content calendars, and producing high-reach campaigns that sustain organic engagement.",
    deliverables: ["Channel Launch Strategy", "Content Calendars", "Community Building"],
  },
  {
    num: "04",
    title: "Creative Strategy",
    icon: Compass,
    desc: "Bridging the gap between strategy and execution through short-form video direction, creator/influencer briefings, and campaign concepting.",
    deliverables: ["Video Production", "Influencer Briefs", "Campaign Concepts"],
  },
];

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="02 // Focus Areas"
          title="WHAT I DO"
          description="Where strategic insight meets creative execution across brands, channels, and campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.52, delay: shouldReduceMotion ? 0 : idx * 0.09, ease: EASE_EXPO }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="bg-white rounded-3xl border border-[#E7E3DA] p-8 sm:p-10 space-y-6 hover:border-[#121316] hover:shadow-lg transition-[border-color,box-shadow] duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[#FF3E1D] italic">
                      {item.num}
                    </span>
                    <motion.div
                      className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#121316] group-hover:bg-[#FF3E1D] group-hover:text-white transition-colors duration-200"
                      whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-display font-normal text-[#121316] group-hover:text-[#FF3E1D] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0ECE4] flex flex-wrap gap-2">
                  {item.deliverables.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E7E3DA] text-[#6B7280]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

