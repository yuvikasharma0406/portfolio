"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  title?: string;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  icon,
  showArrow,
  onClick,
  type = "button",
  disabled,
  title,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3E1D] focus-visible:ring-offset-2 cursor-pointer tracking-wide select-none";

  const sizeStyles: Record<string, string> = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles: Record<string, string> = {
    primary:
      "bg-[#121316] text-white hover:bg-[#FF3E1D] shadow-sm",
    secondary:
      "bg-[#FF3E1D] text-white hover:bg-[#CC3018] shadow-sm",
    outline:
      "bg-transparent text-[#121316] border border-[#D5D0C5] hover:border-[#121316] hover:bg-[#FAF8F5]",
    ghost:
      "bg-transparent text-[#121316] hover:text-[#FF3E1D] hover:bg-[#F3F0E9]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] ?? sizeStyles.md,
    variantStyles[variant] ?? variantStyles.primary,
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const tapProps = shouldReduceMotion
    ? {}
    : { whileTap: { scale: 0.97 }, whileHover: { y: -1 } };

  if (href) {
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group", combinedClasses)}
          title={title}
          {...tapProps}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div
        {...tapProps}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="inline-flex"
      >
        <Link href={href} className={cn("group", combinedClasses)} title={title}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={cn("group", combinedClasses)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
      {...tapProps}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {content}
    </motion.button>
  );
}
