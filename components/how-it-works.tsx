"use client";

import { siteConfig } from "@/config/site";
import { FadeIn, FadeInStagger, StaggerItem } from "./animations";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            From Audit to Autopilot
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            A simple, transparent process. No surprises, no scope creep.
          </p>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.howItWorks.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative p-8 rounded-2xl border border-border bg-bg-card/30 h-full">
                <span className="text-6xl font-bold text-accent/10 absolute top-4 right-6">
                  {step.step}
                </span>
                <div className="relative">
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < siteConfig.howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
