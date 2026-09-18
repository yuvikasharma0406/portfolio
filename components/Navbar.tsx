"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Tighten navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E7E3DA] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_12px_rgba(18,19,22,0.06)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-[68px] flex items-center justify-between">

        {/* Monogram Brand */}
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
          <motion.div
            className="w-8 h-8 rounded-full bg-[#121316] text-[#FAF8F5] flex items-center justify-center font-display italic text-base shrink-0"
            whileHover={shouldReduceMotion ? {} : { backgroundColor: "#FF3E1D", scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Y
          </motion.div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[#121316] group-hover:text-[#FF3E1D] transition-colors duration-200 whitespace-nowrap">
              Yuvika Sharma
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#8C8F96] font-medium hidden xs:block truncate">
              Branding × Creative Strategy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs uppercase tracking-wider font-medium">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#121316] font-bold"
                    : "text-[#5F6368] hover:text-[#121316]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[#FF3E1D] rounded-full"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 500, damping: 40 }
                    }
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-[#FAF8F5] hover:bg-[#FF3E1D] transition-colors duration-200 shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button (Min 44px Touch Target) */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center -mr-2 text-[#121316] hover:text-[#FF3E1D] focus:outline-none transition-colors rounded-xl"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
          transition={{ duration: 0.12 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span
                key="close"
                initial={shouldReduceMotion ? {} : { rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={shouldReduceMotion ? {} : { rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={shouldReduceMotion ? {} : { rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={shouldReduceMotion ? {} : { rotate: -45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] as const }}
            className="md:hidden border-b border-[#E7E3DA] bg-[#FAF8F5] px-6 py-6 space-y-2 overflow-hidden shadow-lg"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center text-sm uppercase tracking-wider font-medium min-h-[44px] px-4 rounded-2xl transition-colors ${
                      isActive
                        ? "bg-[#F0ECE5] text-[#121316] font-semibold"
                        : "text-[#5F6368] hover:text-[#121316] hover:bg-[#F5F2EC]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            <div className="pt-3 border-t border-[#E7E3DA]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full min-h-[48px] rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121316] text-[#FAF8F5] hover:bg-[#FF3E1D] transition-colors shadow-sm"
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
