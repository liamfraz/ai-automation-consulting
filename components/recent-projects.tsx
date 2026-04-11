"use client";

import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn, FadeInStagger, StaggerItem } from "./animations";

export function RecentProjects() {
  return (
    <section id="recent-projects" className="py-20 md:py-28 bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Recent Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            What I&apos;ve Been Building
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            A selection of recent automation builds for Australian businesses.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-4">
          {siteConfig.recentProjects.map((project) => (
            <StaggerItem key={project.client}>
              <div className="flex flex-col md:flex-row md:items-start gap-6 p-6 md:p-8 rounded-2xl border border-border hover:border-border-hover bg-bg-card/50 hover:bg-bg-card transition-all duration-300">
                {/* Left: client + completed */}
                <div className="md:w-56 shrink-0">
                  <p className="font-semibold text-text-primary text-sm leading-snug">
                    {project.client}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    {project.completedLabel}
                  </p>
                </div>

                {/* Middle: scope + description */}
                <div className="flex-grow">
                  <p className="text-sm font-medium text-accent mb-2">
                    {project.scope}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs text-text-muted bg-bg-primary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: outcome */}
                <div className="md:w-64 shrink-0 flex items-start gap-2 md:justify-end">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-text-secondary leading-snug">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
