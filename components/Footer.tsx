"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

const NAV = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="bg-[#121316] text-[#FAF8F5]">

      {/* ── Upper: Name, discipline, links ──────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-12 border-b border-white/8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          {/* Identity */}
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-3 group w-fit"
            >
              <div className="w-9 h-9 rounded-full bg-[#FF3E1D] text-white flex items-center justify-center font-display italic text-base">
                Y
              </div>
              <div>
                <span className="block font-semibold text-base tracking-tight text-white group-hover:text-[#FF3E1D] transition-colors">
                  Yuvika Sharma
                </span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
                  Branding <span className="text-[#FF3E1D]">×</span> Content{" "}
                  <span className="text-[#FF3E1D]">×</span> Creative Strategy
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#4B5563] max-w-xs leading-relaxed">
              MBA (Marketing) · Narayana Business School, Ahmedabad
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF3E1D] shrink-0" />
              <span className="break-all">{personal.email}</span>
            </a>

            <span className="hidden sm:inline text-[#374151]">·</span>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-[#60A5FA] shrink-0" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Lower: Nav + copyright ───────────────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-7">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-wider text-[#4B5563] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[11px] text-[#374151]">
            © {currentYear} Yuvika Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}
