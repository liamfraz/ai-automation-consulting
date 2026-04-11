export const siteConfig = {
  name: "Liam Frazer | AI Automation Consulting",
  url: "https://aiautomation.com.au",
  description:
    "AI automation consulting for Australian small businesses. Power Automate, AI chatbots, and workflow automation to save you time and money.",
  keywords: [
    "AI automation consultant Australia",
    "Power Automate consultant Sydney",
    "AI chatbot setup Australia",
    "workflow automation small business",
    "business process automation Australia",
    "Power Automate developer",
    "AI consulting Melbourne",
    "automation consultant Brisbane",
  ],

  hero: {
    badge: "Serving Australian Businesses",
    title: "Stop Doing Manually\nWhat AI Can Do\nin Seconds",
    subtitle:
      "I help small businesses across Australia automate repetitive work with AI chatbots, Power Automate workflows, and smart integrations — so you can focus on growing your business.",
    cta: { text: "Book a Free Audit Call", href: "#contact" },
    secondaryCta: { text: "See How It Works", href: "#how-it-works" },
  },

  services: [
    {
      icon: "MessageSquareText" as const,
      title: "AI Chatbot Setup",
      price: "$2K – $5K",
      description:
        "Custom AI chatbots that handle customer enquiries, book appointments, and qualify leads 24/7 — trained on your business data.",
      features: [
        "Trained on your FAQs & documents",
        "Integrates with your website & socials",
        "Handles bookings & lead capture",
        "Escalates complex queries to your team",
      ],
    },
    {
      icon: "Workflow" as const,
      title: "Workflow Automation",
      price: "$1K – $3K per workflow",
      description:
        "Eliminate manual data entry, approvals, and repetitive tasks. I build automations that connect your tools and run on autopilot.",
      features: [
        "Connect CRM, email, invoicing & more",
        "Automated data entry & reporting",
        "Approval workflows & notifications",
        "Error handling & monitoring built in",
      ],
    },
    {
      icon: "Settings" as const,
      title: "Power Automate Consulting",
      price: "$150/hr",
      description:
        "Expert help with Microsoft Power Automate — from fixing broken flows to architecting enterprise-grade automations across your Microsoft 365 stack.",
      features: [
        "Flow debugging & optimisation",
        "SharePoint & Teams integrations",
        "Custom connectors & API integration",
        "Training for your team",
      ],
    },
    {
      icon: "RefreshCcw" as const,
      title: "Monthly Retainer",
      price: "$500 – $2K/mo",
      description:
        "Ongoing automation support. I monitor your workflows, fix issues, and build new automations as your business grows.",
      features: [
        "Priority support & monitoring",
        "Monthly automation health checks",
        "New workflow builds included",
        "Quarterly strategy sessions",
      ],
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Free Audit",
      description:
        "15-minute call to understand your business and identify the biggest automation opportunities.",
    },
    {
      step: "02",
      title: "Custom Proposal",
      description:
        "You receive a clear plan with timelines, costs, and expected ROI — no jargon, no fluff.",
    },
    {
      step: "03",
      title: "Build & Deploy",
      description:
        "I build, test, and deploy your automations. You get full documentation and training.",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description:
        "Optional retainer to keep everything running smoothly and scale as you grow.",
    },
  ],

  recentProjects: [
    {
      client: "Brisbane Accounting Practice",
      scope: "ATO BAS compliance automation + Xero invoice sync",
      description:
        "Built a Power Automate flow that pulls lodgement deadlines from the ATO portal, creates Teams reminders for each client, and syncs approved invoices from Xero into their practice management system — eliminating manual data entry across two platforms.",
      outcome: "6 hrs/week saved, zero missed BAS deadlines since go-live",
      tags: ["Power Automate", "Xero API", "ATO Compliance", "Microsoft Teams"],
      completedLabel: "Completed Mar 2025",
    },
    {
      client: "Allied Health Clinic (Melbourne)",
      scope: "Appointment reminder + cancellation backfill system",
      description:
        "Integrated Microsoft Bookings with Power Automate to send SMS and email reminders at 48hrs and 24hrs before appointments. Cancellations automatically trigger a waitlist notification to the next patient, filling gaps in real time.",
      outcome: "40% reduction in no-shows, 12 extra billable appointments per week",
      tags: ["Power Automate", "Microsoft Bookings", "SMS Integration"],
      completedLabel: "Completed Feb 2025",
    },
    {
      client: "Sydney Construction Contractor",
      scope: "Job card creation and supervisor notification pipeline",
      description:
        "Automated the flow from email quote acceptance to job card creation in SharePoint, site supervisor notification in Teams, and subcontractor briefing documents. What took 45 minutes of admin per job now happens in seconds.",
      outcome: "3 hrs/day returned to the owner, zero lost job cards",
      tags: ["Power Automate", "SharePoint", "Microsoft Teams", "Document Gen"],
      completedLabel: "Completed Jan 2025",
    },
  ],

  caseStudies: [
    {
      industry: "Real Estate",
      title: "Agency saves 20+ hours per week",
      description:
        "A Sydney real estate agency was drowning in manual property listing updates, tenant enquiries, and maintenance requests. I automated their listing syndication, built an AI chatbot for tenant queries, and connected their CRM to their property management platform.",
      metric: "20hrs",
      metricLabel: "saved per week",
      tags: ["AI Chatbot", "Workflow Automation", "CRM Integration"],
    },
    {
      industry: "Trades & Services",
      title: "Tradesperson automates invoicing end-to-end",
      description:
        "A Melbourne-based electrician was spending evenings on invoicing and job tracking. I built a Power Automate flow that generates invoices from completed job forms, sends them to clients, and reconciles payments automatically.",
      metric: "95%",
      metricLabel: "less invoicing time",
      tags: ["Power Automate", "Invoicing", "Job Tracking"],
    },
    {
      industry: "Hospitality",
      title: "Restaurant automates review responses",
      description:
        "A Brisbane restaurant was ignoring online reviews because staff didn't have time. I set up an AI-powered system that monitors Google and TripAdvisor reviews, drafts personalised responses, and flags negative reviews for immediate attention.",
      metric: "4.6★",
      metricLabel: "avg rating (up from 3.9)",
      tags: ["AI Responses", "Review Monitoring", "Reputation Management"],
    },
  ],

  about: {
    name: "Liam Frazer",
    title: "AI & Automation Consultant",
    bio: [
      "I'm a specialist in Microsoft Power Automate and AI-driven business automation, based in Australia. I help small businesses eliminate repetitive manual work so they can focus on what actually matters — serving their customers and growing their business.",
      "With deep experience across Power Automate, AI integrations, and business process design, I've helped businesses across real estate, trades, hospitality, and professional services reclaim hundreds of hours each year.",
      "I don't do cookie-cutter solutions. Every automation is built specifically for your business, your tools, and your workflows.",
    ],
  },

  contact: {
    headline: "Let's Find Your Biggest Automation Win",
    subtitle:
      "Book a free 15-minute audit call. I'll identify the #1 workflow costing you the most time — and show you exactly how to automate it.",
    calendlyUrl: "https://calendly.com/liamfrazer",
  },

  footer: {
    tagline: "Helping Australian businesses work smarter with AI and automation.",
    links: [
      { text: "Services", href: "#services" },
      { text: "How It Works", href: "#how-it-works" },
      { text: "Case Studies", href: "#case-studies" },
      { text: "About", href: "#about" },
      { text: "Contact", href: "#contact" },
    ],
  },
};
