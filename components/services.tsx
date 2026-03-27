"use client";

import { MessageSquareText, Workflow, Settings, RefreshCcw } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn, FadeInStagger, StaggerItem } from "./animations";
import { Check } from "lucide-react";

const iconMap = {
  MessageSquareText,
  Workflow,
  Settings,
  RefreshCcw,
} as const;

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            Automation That Pays for Itself
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            Every service is designed to save you more time and money than it costs.
            No lock-in contracts — just results.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-6">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.title}>
                <div className="group h-full p-8 rounded-2xl border border-border hover:border-border-hover bg-bg-card/50 hover:bg-bg-card transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {service.title}
                      </h3>
                      <p className="text-accent font-semibold mt-1">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
