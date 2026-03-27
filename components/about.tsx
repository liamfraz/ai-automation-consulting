"use client";

import { siteConfig } from "@/config/site";
import { FadeIn } from "./animations";
import { Award, Cpu, Zap } from "lucide-react";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: credentials */}
          <FadeIn>
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8">
              {about.name}
            </h2>
            <p className="text-accent font-medium mb-6">{about.title}</p>
            <div className="space-y-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Right: highlights */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {[
                {
                  icon: Cpu,
                  title: "Power Automate Specialist",
                  description:
                    "Deep expertise in Microsoft Power Platform — flows, custom connectors, and enterprise integrations.",
                },
                {
                  icon: Zap,
                  title: "AI-First Approach",
                  description:
                    "I integrate AI where it makes a real difference — not for the sake of it, but to solve genuine bottlenecks.",
                },
                {
                  icon: Award,
                  title: "Australian Business Focus",
                  description:
                    "I understand the Australian small business landscape — the tools you use, the challenges you face, and what actually moves the needle.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl border border-border bg-bg-card/30"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0 h-fit">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
