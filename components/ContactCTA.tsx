"use client";

import { useState } from "react";
import { Mail, FileText, ArrowUpRight, Copy, Check } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121316] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden"
        >
          {/* Subtle warm glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3E1D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FF3E1D]">
                [ 06 // Have a brief? ]
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-normal tracking-tight text-white leading-[1.08]">
                Let&apos;s build something worth noticing.
              </h2>
              <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl font-normal leading-relaxed">
                Whether you&apos;re launching a new brand identity, orchestrating a high-reach social campaign, or looking for a creative content strategist — let&apos;s talk.
              </p>
            </div>

            {/* Email Launcher & Copy Trigger */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FF3E1D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#E03112] transition-colors shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Conversation</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9CA3AF]" />
                    <span>{portfolioData.personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Footer Connect Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#9CA3AF]">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#FF3E1D] transition-colors font-medium"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#FF3E1D] transition-colors font-medium"
              >
                <FileText className="w-4 h-4 text-[#FF3E1D]" />
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-[#8C8F96]">
                Based in Ahmedabad, India • Open for remote &amp; on-site roles
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
