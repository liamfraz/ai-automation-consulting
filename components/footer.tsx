import { siteConfig } from "@/config/site";
import { Zap } from "lucide-react";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2 text-text-primary font-bold">
              <Zap className="w-4 h-4 text-accent" />
              Liam Frazer
            </a>
            <p className="text-sm text-text-muted">{footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Liam Frazer. All rights reserved. ABN pending.
          </p>
        </div>
      </div>
    </footer>
  );
}
