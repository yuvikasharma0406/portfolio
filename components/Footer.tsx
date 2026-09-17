"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E7E3DA] bg-[#F2EFE9] text-[#121316] pt-16 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E7E3DA]">
          {/* Big Editorial Statement */}
          <div className="md:col-span-6 space-y-5">
            <span className="editorial-num">
              [ Connect ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-normal tracking-tight leading-snug">
              Have a brand to build, a story to tell, or a creative campaign in mind?
            </h2>
            <p className="text-sm text-[#5F6368] max-w-md leading-relaxed">
              Open for brand communication, content strategy, campaign direction, and creative roles.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-[#121316] hover:text-[#FF3E1D] underline underline-offset-8 decoration-1 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF3E1D]" />
                <span>{portfolioData.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-[11px] font-semibold tracking-widest uppercase text-[#8C8F96]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-medium">
              <li>
                <Link href="/" className="hover:text-[#FF3E1D] transition-colors">
                  Index
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#FF3E1D] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF3E1D] transition-colors">
                  About &amp; Perspective
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#FF3E1D] transition-colors">
                  Experience &amp; Roles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF3E1D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Resources Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-[11px] font-semibold tracking-widest uppercase text-[#8C8F96]">
              Network &amp; Files
            </h3>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-medium">
              <li>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#FF3E1D] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8C8F96]" />
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#FF3E1D] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#FF3E1D]" />
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8B82]" />
                </a>
              </li>
              <li className="pt-2 text-xs normal-case text-[#8C8F96] leading-relaxed">
                MBA + PGPCE (Marketing)<br />
                Narayana Business School, Ahmedabad
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8F96]">
          <p>© {currentYear} Yuvika Sharma. Designed with an editorial perspective.</p>
          <p className="flex items-center gap-1.5 tracking-wider uppercase text-[11px]">
            Branding <span className="text-[#FF3E1D]">×</span> Content <span className="text-[#FF3E1D]">×</span> Creative Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
