"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#E7E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 lg:space-y-14"
        >
          {/* Top Status Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF3E1D] animate-ping" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#121316]">
                Portfolio Index // 2026
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#5F6368] font-medium hidden sm:block">
              Ahmedabad, India • Available for Opportunities
            </div>
          </motion.div>

          {/* Main Giant Name & Typography Composition */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-normal tracking-tight text-[#121316] leading-[0.9] uppercase select-none">
                YUVIKA
              </h1>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-normal tracking-tight text-[#121316] leading-[0.9] uppercase select-none flex flex-wrap items-baseline gap-4 sm:gap-6">
                <span>SHARMA</span>
                <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FF3E1D] py-1 px-3.5 rounded-full border border-[#FF3E1D]/30 bg-[#FF3E1D]/5 align-middle">
                  Brand &amp; Creative Strategy
                </span>
              </h1>
            </div>

            {/* Positioning Statement Tagline */}
            <div className="pt-4 border-t border-[#E7E3DA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#FF3E1D]">
                  Branding × Content × Creative Strategy
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-xl sm:text-2xl font-display text-[#121316] leading-relaxed">
                  I enjoy turning strategic clarity into brand stories, scripts, and digital experiences that people actually notice and remember.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="#selected-work" variant="primary" size="md">
                    <span>Explore my work</span>
                    <ArrowDown className="w-4 h-4 ml-1" />
                  </Button>

                  <Button href="/contact" variant="outline" size="md">
                    <span>Let&apos;s connect</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 text-[#8C8F96]" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fast Proof Points Bar */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-[#E7E3DA] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8F96]">
                TEDx Launch
              </span>
              <p className="text-2xl sm:text-3xl font-display text-[#121316]">600K+ Reach</p>
              <p className="text-xs text-[#5F6368]">Built from 0 in Month 1</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8F96]">
                Agency Internship
              </span>
              <p className="text-2xl sm:text-3xl font-display text-[#121316]">7+ Brands</p>
              <p className="text-xs text-[#5F6368]">Managed independently</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8F96]">
                Creative Execution
              </span>
              <p className="text-2xl sm:text-3xl font-display text-[#121316]">Script → Screen</p>
              <p className="text-xs text-[#5F6368]">Video &amp; Content Production</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8F96]">
                Academic Rigor
              </span>
              <p className="text-2xl sm:text-3xl font-display text-[#121316]">MBA Marketing</p>
              <p className="text-xs text-[#5F6368]">Narayana Business School</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
