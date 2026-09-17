import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16",
        isCenter && "text-center md:items-center justify-center",
        className
      )}
    >
      <div className={cn("space-y-3", isCenter && "max-w-2xl mx-auto")}>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF4D2E] block">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#141517] tracking-tight leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-base sm:text-lg text-[#5A5E67] font-normal leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
