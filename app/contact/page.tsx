"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, FileText, ArrowUpRight, Copy, Check, Send, Sparkles } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export default function ContactPage() {
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
      subject || "Creative Strategy / Brand Collaboration Inquiry"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF4D2E]">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#141517] leading-tight">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-lg text-[#5A5E67] font-normal leading-relaxed">
            Whether you are building a brand from scratch, looking for a creative content strategist, or want to discuss campaigns, let&apos;s connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Links & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-8 bg-white rounded-3xl border border-[#E7E4DD] space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E7E4DD] flex items-center justify-center text-[#FF4D2E]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8B82] block mb-1">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg font-serif font-normal text-[#141517] hover:text-[#FF4D2E] transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>
              <div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF4D2E] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-8 bg-white rounded-3xl border border-[#E7E4DD] space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E7E4DD] flex items-center justify-center text-[#0077B5]">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8B82] block mb-1">
                  Professional Network
                </span>
                <h3 className="text-lg font-serif font-normal text-[#141517]">
                  LinkedIn
                </h3>
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141517] hover:text-[#FF4D2E] transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Resume Card */}
            <div className="p-8 bg-white rounded-3xl border border-[#E7E4DD] space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E7E4DD] flex items-center justify-center text-[#FF4D2E]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8B82] block mb-1">
                  Curriculum Vitae
                </span>
                <h3 className="text-lg font-serif font-normal text-[#141517]">
                  Official Resume
                </h3>
              </div>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#141517] hover:text-[#FF4D2E] transition-colors"
              >
                <span>Download PDF Format</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E7E4DD] p-8 sm:p-12 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF4D2E]">
                  Quick Note
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#141517]">
                  Send a message
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Fill in your idea or project inquiry to immediately launch your email client with pre-filled details.
                </p>
              </div>

              <form onSubmit={handleMailto} className="space-y-5 pt-2">
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#141517] mb-2">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Brand Strategy Opportunity / Creative Project"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DD] text-sm text-[#141517] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#FF4D2E] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#141517] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a bit about your brand, role, or campaign idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DD] text-sm text-[#141517] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#FF4D2E] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141517] text-white text-sm font-semibold hover:bg-[#FF4D2E] transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Email App</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
