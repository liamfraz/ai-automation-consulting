"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn, FadeInStagger, StaggerItem } from "./animations";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            Real Results for Real Businesses
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            Here&apos;s what automation looks like in practice.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-6">
          {siteConfig.caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <div className="group h-full flex flex-col p-8 rounded-2xl border border-border hover:border-border-hover bg-bg-card/50 hover:bg-bg-card transition-all duration-300">
                {/* Industry tag */}
                <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
                  {study.industry}
                </span>

                {/* Metric */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-text-primary">
                    {study.metric}
                  </span>
                  <span className="block text-sm text-text-muted mt-1">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Title & description */}
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {study.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs text-text-muted bg-bg-primary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-border-hover text-text-secondary hover:text-text-primary transition-all duration-300"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
