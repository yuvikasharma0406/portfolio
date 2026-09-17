"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Selected Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E3DA] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Monogram Brand Identity */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#121316] text-[#FAF8F5] flex items-center justify-center font-display italic text-base group-hover:bg-[#FF3E1D] transition-colors duration-300">
            Y
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[#121316] group-hover:text-[#FF3E1D] transition-colors">
              Yuvika Sharma
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#8C8F96] font-medium">
              Branding × Creative Strategy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "text-[#121316] font-bold"
                    : "text-[#5F6368] hover:text-[#121316]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FF3E1D]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-[#FAF8F5] hover:bg-[#FF3E1D] transition-all duration-300 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#121316] hover:text-[#FF3E1D] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-[#E7E3DA] bg-[#FAF8F5] px-6 py-6 space-y-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-wider font-medium py-2 px-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-[#EFECE5] text-[#121316] font-semibold"
                      : "text-[#5F6368] hover:text-[#121316] hover:bg-[#F2EFE9]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-[#E7E3DA]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-[#FAF8F5] hover:bg-[#FF3E1D] transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
