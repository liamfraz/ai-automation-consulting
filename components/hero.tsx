"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-glow)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {hero.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight text-text-primary"
        >
          {hero.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={hero.cta.href}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-all hover:shadow-[0_0_32px_rgba(37,99,235,0.3)]"
          >
            {hero.cta.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border hover:border-border-hover text-text-secondary hover:text-text-primary font-medium text-lg transition-all"
          >
            <Play className="w-4 h-4" />
            {hero.secondaryCta.text}
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-sm text-text-muted"
        >
          Trusted by small businesses across Sydney, Melbourne, Brisbane & beyond
        </motion.p>
      </div>
    </section>
  );
}
