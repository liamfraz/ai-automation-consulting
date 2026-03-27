"use client";

import { siteConfig } from "@/config/site";
import { FadeIn } from "./animations";
import { ArrowRight, Calendar } from "lucide-react";

export function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="relative p-10 md:p-16 rounded-3xl border border-border bg-bg-card/50 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent-glow)_0%,_transparent_60%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Free 15-Minute Call
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                {contact.headline}
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                {contact.subtitle}
              </p>

              {/* Calendly placeholder */}
              <div className="bg-bg-primary/50 border border-border rounded-2xl p-12 mb-8">
                <p className="text-text-muted text-sm mb-4">
                  Calendly booking widget loads here
                </p>
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-all hover:shadow-[0_0_32px_rgba(37,99,235,0.3)]"
                >
                  Book Your Free Audit Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="text-text-muted text-sm">
                No sales pitch. Just a genuine conversation about what&apos;s possible.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
