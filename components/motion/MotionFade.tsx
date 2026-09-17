"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   Shared easing – matches the editorial "precision" feel
   ───────────────────────────────────────────────────────── */
export const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

/* ─────────────────────────────────────────────────────────
   FadeIn — single element reveal with vertical drift
   ───────────────────────────────────────────────────────── */
interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 18,
  className = "",
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: shouldReduceMotion ? 0.2 : duration, delay, ease: EASE_EXPO }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   FadeInStagger — parent that staggers its FadeInChild
   ───────────────────────────────────────────────────────── */
export function FadeInStagger({
  children,
  className = "",
  delay = 0,
  stagger = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: shouldReduceMotion ? 0 : stagger, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
};

const childVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export function FadeInChild({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={shouldReduceMotion ? childVariantsReduced : childVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   ScaleIn — gentle scale reveal for cards / CTAs
   ───────────────────────────────────────────────────────── */
export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SlideInLeft — for left-column editorial text
   ───────────────────────────────────────────────────────── */
export function SlideInLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: EASE_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
