"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  FileText,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  MapPin,
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function ContactContent() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject || "Brand / Creative Collaboration"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="pt-16 sm:pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.header {...fadeUp()} className="max-w-4xl space-y-5 pb-16 border-b border-[#E7E3DA]">
            <span className="editorial-num">[ Get In Touch ]</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-normal text-[#121316] leading-[1.02] tracking-tight">
              Let&apos;s make something{" "}
              <span className="italic text-[#FF3E1D]">worth noticing.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#5F6368] max-w-2xl font-normal leading-relaxed pt-2">
              Open to brand communication, creative strategy, content roles, and
              collaborative projects. If you&apos;re building something interesting —
              let&apos;s talk.
            </p>
          </motion.header>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────── */}
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── Left: Contact Cards ─────────────────── */}
            <motion.section {...fadeUp(0.1)} aria-label="Direct Contact Details" className="lg:col-span-5 space-y-4">

              {/* Email */}
              <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E7E3DA] shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#FF3E1D]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-[#121316]">
                      Preferred channel
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${personal.email}`}
                  className="block text-base sm:text-lg font-display text-[#121316] hover:text-[#FF3E1D] transition-colors break-all underline underline-offset-4 decoration-[#E7E3DA] hover:decoration-[#FF3E1D]"
                >
                  {personal.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[#5F6368] hover:text-[#FF3E1D] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy address</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 sm:p-6 bg-white rounded-3xl border border-[#E7E3DA] shadow-sm hover:border-[#121316] transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EBF5FB] flex items-center justify-center">
                    <LinkedInIcon className="w-5 h-5 text-[#0077B5]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block">
                      Connect
                    </span>
                    <span className="text-sm font-semibold text-[#121316]">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C8F96] group-hover:text-[#121316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Resume */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 sm:p-6 bg-white rounded-3xl border border-[#E7E3DA] shadow-sm hover:border-[#121316] transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#FF3E1D]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C8F96] block">
                      Download
                    </span>
                    <span className="text-sm font-semibold text-[#121316]">
                      Resume (PDF)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C8F96] group-hover:text-[#121316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Location note */}
              <div className="flex items-start gap-2 pt-2 text-xs text-[#8C8F96]">
                <MapPin className="w-3.5 h-3.5 text-[#FF3E1D] mt-0.5 shrink-0" />
                <span>
                  Based in Ahmedabad, India — open to remote &amp; on-site opportunities.
                </span>
              </div>
            </motion.section>

            {/* ── Right: Mailto Form ──────────────────── */}
            <motion.section {...fadeUp(0.2)} aria-label="Send a direct message" className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#E7E3DA] p-6 sm:p-12 shadow-sm">
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FF3E1D]">
                    Quick Note
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#121316]">
                    Send a message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                    Fill in your subject and message below — clicking the button
                    will open your email client with everything pre-filled.{" "}
                    <span className="text-[#8C8F96]">
                      No backend, no data stored.
                    </span>
                  </p>
                </div>

                <form onSubmit={handleMailto} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#121316] mb-2"
                    >
                      Subject / What&apos;s it about?
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Brand collaboration / Creative role / Campaign idea"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] text-base sm:text-sm text-[#121316] placeholder:text-[#C4C0B6] focus:outline-none focus:border-[#121316] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#121316] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a little about what you're building, what you need, or what you'd like to discuss..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DA] text-base sm:text-sm text-[#121316] placeholder:text-[#C4C0B6] focus:outline-none focus:border-[#121316] transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 min-h-[48px] px-6 py-4 rounded-full bg-[#121316] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#FF3E1D] transition-all duration-300 cursor-pointer shadow-sm group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>Open in Email App</span>
                  </button>

                  <p className="text-center text-[11px] text-[#8C8F96]">
                    This opens your default email client. No data is sent to any server.
                  </p>
                </form>
              </div>
            </motion.section>

          </div>
        </div>
      </main>
    </div>
  );
}
