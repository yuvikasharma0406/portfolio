import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
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
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#141517] text-white hover:bg-[#FF4D2E] shadow-sm hover:shadow-md active:scale-[0.98]",
    secondary:
      "bg-[#FF4D2E] text-white hover:bg-[#E03E20] shadow-sm hover:shadow-md active:scale-[0.98]",
    outline:
      "bg-transparent text-[#141517] border border-[#D5D0C5] hover:border-[#141517] hover:bg-[#FAF9F6]",
    ghost:
      "bg-transparent text-[#141517] hover:text-[#FF4D2E] hover:bg-[#F3F0E9]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
