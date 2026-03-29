"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, DollarSign, TrendingUp, Zap } from "lucide-react";
import { FadeIn } from "@/components/animations";

const caseStudies = [
  {
    industry: "Real Estate",
    title: "Property Agency Saves 20+ Hours Per Week",
    slug: "property-agency",
    headline: "From drowning in admin to running on autopilot",
    challenge:
      "A Sydney real estate agency with 3 staff managing 200+ rental properties was spending most of their week on maintenance request triage, tenant communications, and listing updates. Every maintenance call required manual logging, phone calls to trades, and follow-up emails to landlords and tenants — often taking 3-4 touchpoints per request.",
    solution: [
      "Built an automated maintenance intake form that tenants access via QR code at the property — requests are auto-categorised by urgency and type",
      "Connected to a dispatch workflow that routes requests to preferred trades based on category, with automatic quote approval flows for landlords",
      "Deployed an AI chatbot on the agency website handling tenant enquiries (lease terms, payment dates, inspection schedules) 24/7",
      "Automated listing syndication across realestate.com.au, Domain, and the agency website from a single data entry point",
    ],
    results: [
      { metric: "20hrs", label: "saved per week", icon: "clock" },
      { metric: "85%", label: "maintenance requests auto-triaged", icon: "trending" },
      { metric: "$2,400", label: "monthly labour cost avoided", icon: "dollar" },
      { metric: "< 2min", label: "avg tenant query response time", icon: "zap" },
    ],
    tools: ["Power Automate", "AI Chatbot", "SharePoint", "Microsoft Forms"],
    timeline: "3 weeks from kickoff to live",
    investment: "$4,500 one-time + $500/mo retainer",
    tags: ["AI Chatbot", "Workflow Automation", "CRM Integration"],
  },
  {
    industry: "Trades & Services",
    title: "Electrician Automates Invoicing End-to-End",
    slug: "electrician-invoicing",
    headline: "No more evenings lost to paperwork",
    challenge:
      "A Melbourne-based electrician running a 4-person team was spending 6-8 hours every week on invoicing and job tracking. Completed job forms sat in a folder until someone manually created invoices in Xero, sent them to clients, and then chased overdue payments. Jobs were tracked in a spreadsheet that was always out of date.",
    solution: [
      "Created a mobile-friendly digital job completion form that captures job details, photos, and client sign-off on-site",
      "Built a Power Automate flow that auto-generates Xero invoices from completed job forms within minutes of submission",
      "Set up automated payment reminders at 7, 14, and 30 days overdue — escalating tone with each reminder",
      "Replaced the spreadsheet with an auto-updating job tracker dashboard that syncs from the forms and Xero data",
    ],
    results: [
      { metric: "95%", label: "less time on invoicing", icon: "clock" },
      { metric: "Same day", label: "invoices sent (was 5-7 days)", icon: "zap" },
      { metric: "35%", label: "faster payment collection", icon: "dollar" },
      { metric: "0hrs", label: "evening admin work", icon: "trending" },
    ],
    tools: ["Power Automate", "Xero", "Microsoft Forms", "Power BI"],
    timeline: "2 weeks from kickoff to live",
    investment: "$2,800 one-time",
    tags: ["Power Automate", "Invoicing", "Job Tracking"],
  },
  {
    industry: "Hospitality",
    title: "Restaurant Lifts Rating from 3.9 to 4.6 Stars",
    slug: "restaurant-reviews",
    headline: "AI-powered review management that runs itself",
    challenge:
      "A popular Brisbane restaurant with 50+ Google reviews per month was ignoring most of them — staff didn't have time to read and respond. Negative reviews sat unanswered for weeks, hurting their rating and deterring new customers. The owner had no visibility into review trends or common complaints.",
    solution: [
      "Set up automated monitoring across Google Business and TripAdvisor, pulling new reviews into a central dashboard every hour",
      "Built an AI response generator that drafts personalised replies matching the restaurant's voice — positive reviews get a thank-you, negative reviews get an empathetic acknowledgment and resolution offer",
      "Created an alert system that flags negative reviews (< 3 stars) for immediate human attention via SMS to the owner",
      "Added a monthly trends report showing sentiment analysis, common praise themes, and recurring complaints",
    ],
    results: [
      { metric: "4.6★", label: "avg rating (was 3.9★)", icon: "trending" },
      { metric: "100%", label: "reviews responded to", icon: "zap" },
      { metric: "< 1hr", label: "avg response time (was 5+ days)", icon: "clock" },
      { metric: "22%", label: "increase in new bookings", icon: "dollar" },
    ],
    tools: ["AI Response Generator", "Google Business API", "Power Automate", "Twilio SMS"],
    timeline: "1 week from kickoff to live",
    investment: "$3,200 one-time + $300/mo retainer",
    tags: ["AI Responses", "Review Monitoring", "Reputation Management"],
  },
  {
    industry: "Accounting",
    title: "Bookkeeper Cuts BAS Turnaround by 40%",
    slug: "accounting-bas",
    headline: "Clients send docs on time — without being chased",
    challenge:
      "A Queensland accounting practice spent the first two weeks of every BAS quarter chasing clients for bank statements, invoices, and receipts. The team of 3 would send manual reminder emails, make follow-up phone calls, and then manually organise documents into client folders before starting the actual BAS work.",
    solution: [
      "Built an automated document request system that sends scheduled reminders to each client 30, 14, and 7 days before the BAS deadline",
      "Created a secure client upload portal that auto-categorises documents by type (bank statements, invoices, receipts) and files them into the correct client folder",
      "Set up a BAS preparation dashboard showing which clients are document-complete and ready for processing",
      "Added automated confirmation emails to clients when their documents are received, reducing 'did you get my docs?' calls",
    ],
    results: [
      { metric: "40%", label: "faster BAS turnaround", icon: "clock" },
      { metric: "90%", label: "clients submit docs on time (was 30%)", icon: "trending" },
      { metric: "12hrs", label: "saved per BAS cycle on chasing", icon: "zap" },
      { metric: "$0", label: "late lodgement penalties (was $2K+/yr)", icon: "dollar" },
    ],
    tools: ["Power Automate", "SharePoint", "Microsoft Forms", "Xero Integration"],
    timeline: "2 weeks from kickoff to live",
    investment: "$2,200 one-time + $400/mo retainer",
    tags: ["Document Automation", "Client Portal", "BAS Workflow"],
  },
  {
    industry: "Allied Health",
    title: "Physio Practice Reclaims 15 Hours/Week from NDIS Admin",
    slug: "physio-ndis",
    headline: "Clinicians treating patients, not writing reports after hours",
    challenge:
      "An Adelaide allied health practice with 8 practitioners across physio, OT, and behaviour support was buried in NDIS paperwork. Service agreements were created manually in Word for each participant, progress reports required compiling months of session notes by hand, and claims were submitted one-by-one through the NDIS portal. Clinicians routinely spent 2-3 hours after clinic on documentation.",
    solution: [
      "Built templated service agreement generation that pulls participant data, plan details, and line items automatically — reducing creation time from 45 minutes to 5 minutes per participant",
      "Created a structured session note system that auto-populates key fields and tags notes to NDIS plan goals, making progress report compilation near-instant",
      "Automated NDIS claim submission with batch processing and error validation before submission",
      "Set up plan review reminders 90/60/30 days before expiry with auto-generated review summaries",
    ],
    results: [
      { metric: "15hrs", label: "saved per week on NDIS admin", icon: "clock" },
      { metric: "5min", label: "to generate a service agreement (was 45min)", icon: "zap" },
      { metric: "$18K", label: "annual labour cost saved", icon: "dollar" },
      { metric: "Zero", label: "missed plan review deadlines", icon: "trending" },
    ],
    tools: ["Power Automate", "SharePoint", "Word Templates", "NDIS Portal Integration"],
    timeline: "4 weeks from kickoff to live",
    investment: "$5,500 one-time + $750/mo retainer",
    tags: ["NDIS Automation", "Clinical Notes", "Claim Processing"],
  },
];

const iconMap = {
  clock: Clock,
  dollar: DollarSign,
  trending: TrendingUp,
  zap: Zap,
};

export function CaseStudiesPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-bg-primary/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-primary font-bold text-lg"
          >
            <Zap className="w-5 h-5 text-accent" />
            <span>Liam Frazer</span>
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors"
          >
            Free Audit Call
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
                Case Studies
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary max-w-3xl">
                Real Results for
                <br />
                Real Businesses
              </h1>
              <p className="mt-6 text-text-secondary max-w-2xl text-lg leading-relaxed">
                Every project below is a real automation engagement with an
                Australian small business. Specific metrics, tools used,
                timelines, and investment — so you can see exactly what to
                expect.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-6 space-y-20">
            {caseStudies.map((study) => (
              <FadeIn key={study.slug}>
                <article className="rounded-2xl border border-border bg-bg-card/50 overflow-hidden">
                  {/* Header */}
                  <div className="p-8 md:p-12 border-b border-border">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                        {study.industry}
                      </span>
                      <span className="text-xs text-text-muted">
                        {study.timeline}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                      {study.title}
                    </h2>
                    <p className="text-text-secondary text-lg">
                      {study.headline}
                    </p>
                  </div>

                  {/* Results grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
                    {study.results.map((result) => {
                      const Icon =
                        iconMap[result.icon as keyof typeof iconMap];
                      return (
                        <div
                          key={result.label}
                          className="p-6 md:p-8 border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
                        >
                          <Icon className="w-5 h-5 text-accent mb-3" />
                          <div className="text-3xl md:text-4xl font-bold text-text-primary">
                            {result.metric}
                          </div>
                          <div className="text-sm text-text-muted mt-1">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Body */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    {/* Challenge */}
                    <div className="p-8 md:p-12">
                      <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                        The Challenge
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-8 md:p-12">
                      <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                        What I Built
                      </h3>
                      <ul className="space-y-3">
                        {study.solution.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                          >
                            <span className="text-accent mt-0.5 shrink-0">
                              &bull;
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-8 md:px-12 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-xs text-text-muted bg-bg-primary/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-text-muted">
                      Investment:{" "}
                      <span className="text-text-secondary font-medium">
                        {study.investment}
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Want Results Like These?
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Book a free 15-minute audit call. I&apos;ll identify your #1
                automation opportunity and show you exactly how to capture it.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold transition-colors"
              >
                Book Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Liam Frazer. All rights reserved.
        </div>
      </footer>
    </>
  );
}
