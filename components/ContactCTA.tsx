"use client";

import { useState } from "react";
import { Mail, FileText, ArrowUpRight, Copy, Check } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";

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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#121316] text-[#FAF8F5] rounded-3xl p-10 sm:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Decorative warm glow */}
          <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-[#FF3E1D]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#FF3E1D]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Headline & Description */}
            <div className="lg:col-span-7 space-y-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF3E1D]">
                [ Let&apos;s Talk ]
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal tracking-tight text-white leading-[1.07]">
                Let&apos;s make something worth noticing.
              </h2>

              <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl font-normal leading-relaxed">
                Whether you&apos;re building a brand identity from the ground up, planning a high-reach campaign, or looking for a creative strategy partner — I&apos;d love to hear about it.
              </p>

              {/* Email CTA row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FF3E1D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#121316] transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/8 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/12 transition-all duration-200 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#10B981]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#9CA3AF]" />
                      <span>{portfolioData.personal.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Contact Links */}
            <div className="lg:col-span-5 space-y-5 lg:pt-10">
              {/* LinkedIn */}
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/6 hover:bg-white/10 border border-white/8 hover:border-white/18 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0077B5]/20 flex items-center justify-center">
                    <LinkedInIcon className="w-4 h-4 text-[#60A5FA]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6B7280] block">
                      Connect
                    </span>
                    <span className="text-sm font-medium text-white">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Resume */}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/6 hover:bg-white/10 border border-white/8 hover:border-white/18 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF3E1D]/15 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#FF3E1D]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#6B7280] block">
                      Download
                    </span>
                    <span className="text-sm font-medium text-white">
                      Resume (PDF)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Or view full contact */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B7280] hover:text-white transition-colors group"
                >
                  <span>Or use the contact form</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Location note */}
              <p className="text-[11px] text-[#4B5563] leading-relaxed">
                Based in Ahmedabad, India<br />
                Available for brand, content &amp; creative strategy roles
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
