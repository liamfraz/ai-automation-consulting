#!/usr/bin/env python3
"""
Send Follow-Up #2 to all 20 AU cold outreach contacts.
Updates outreach-log.csv with date_followup2_sent after each send.

Usage:
  1. Set GMAIL_USER and GMAIL_APP_PASSWORD (get app password at
     https://myaccount.google.com/apppasswords — requires 2FA enabled)
  2. Run: python3 send-followup2.py
  3. Use --dry-run to preview without sending

Requirements: pip install python-dotenv (optional, for .env loading)
"""

import csv
import smtplib
import ssl
import argparse
import os
import sys
from datetime import date
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path

# ── Config ─────────────────────────────────────────────────────────────────────
GMAIL_USER = os.environ.get("GMAIL_USER", "")          # e.g. liam@yourdomain.com
GMAIL_APP_PASSWORD = os.environ.get("GMAIL_APP_PASSWORD", "")
SEND_DATE = date.today().isoformat()                    # 2026-04-11

BASE_DIR = Path(__file__).parent
LOG_CSV = BASE_DIR / "outreach-log.csv"

# ── Email content ───────────────────────────────────────────────────────────────
# Each entry: (first_name_or_greeting, email, business_name, personalized_line)
CONTACTS = [
    (
        "Nivek",
        "nivek@ipb.com.au",
        "IPB",
        "For a 3-person team managing 200+ properties, so much of the day gets absorbed by maintenance coordination — the back-and-forth with tenants, trades, and landlords that rarely resolves itself cleanly without someone manually chasing it.",
    ),
    (
        "Iain",
        "iain@managedproperty.com.au",
        "Managed Property",
        "Managing properties across all of Brisbane with a 5-person team means your maintenance dispatch cycle is probably one of the biggest drains — every tenant call, tradie text, and landlord status update that still happens manually adds up fast.",
    ),
    (
        "Andrew",
        "info@coronis.com.au",
        "Coronis Group",
        "With the volume of tenant enquiries and maintenance coordination across your offices, even shaving 30 minutes per property per month adds up to significant time back for your property managers — without changing how they work.",
    ),
    (
        "Andrew",
        "admin@rwsp.com.au",
        "Ray White Surfers Paradise",
        "In a high-turnover holiday rental market, the changeover admin and inspection scheduling between guests is one of those tasks that eats hours every week but rarely gets scrutinised — until someone automates it and wonders why it wasn't done sooner.",
    ),
    (
        "Mark",
        "kensington@ljhooker.com.au",
        "LJ Hooker Kensington",
        "Rent arrears follow-ups and lease renewal tracking are two of the highest-volume manual tasks in any franchise office — and they're also the most predictable, which makes them ideal candidates for automation that runs in the background without your team thinking about it.",
    ),
    (
        "Helen",
        "helen@redlandsaccounting.com.au",
        "Redlands Accounting",
        "Every quarter the same chase plays out — clients who haven't sent their docs, follow-up emails that feel like pulling teeth, and BAS prep that can't start until the pile finally arrives. It's one of the most automatable workflows in practice management.",
    ),
    (
        "Martine",
        "martine@bookwiz.biz",
        "Bookwiz",
        "With 12+ bookkeepers coordinating document intake and BAS prep across multiple locations, the admin overhead of managing the coordination itself is probably one of your biggest invisible time costs — the kind that doesn't show up in a client bill but eats real hours every week.",
    ),
    (
        "Michael",
        "info@agredshaw.com.au",
        "Archer Gowland Redshaw",
        "New client onboarding in accounting looks simple on paper — collect docs, set up ATO, run the engagement letter — but when it's all manual, it drains 2-3 hours per client before the real work begins. That's one of the first places I'd look.",
    ),
    (
        "Kerryn",
        "info@numericeight.com.au",
        "Numeric Eight",
        "For an outsourced bookkeeping firm, the document handoffs and deadline coordination across multiple client accounts is often the biggest efficiency leak — especially when each client runs a slightly different process and your team has to adapt manually each time.",
    ),
    (
        "Meryl",
        "hello@beanninjas.com",
        "Bean Ninjas",
        "For a remote bookkeeping firm with e-commerce clients across time zones, the monthly reporting and onboarding workflows are the kind of thing that should be running on autopilot — standardised, triggered automatically, and consistent regardless of who's doing it.",
    ),
    (
        "Graeme",
        "graeme@gvhconstructions.biz",
        "GVH Constructions",
        "After 25+ years building your trade network, I imagine compliance cert tracking is still the piece without a clean system — insurance expiry alerts, SWMS updates, and council approvals scattered across email threads that you have to check manually before anyone sets foot on site.",
    ),
    (
        "Kevin",
        "kevin@dualcon.com.au",
        "Dualcon",
        "In commercial fitouts, compiling subcontractor quotes into client proposals and tracking compliance expiry dates across concurrent sites is one of those admin layers that's essential but shouldn't need a human doing it every time.",
    ),
    (
        "there",
        "melbourne@jimsfencing.com.au",
        "Jim's Fencing Melbourne",
        "In a fencing franchise, every quote that doesn't get a timely follow-up is a job that probably went to a competitor — and chasing quotes manually via phone is the piece most likely to fall through the cracks when you're busy on site.",
    ),
    (
        "there",
        "info@fallonsolutions.com.au",
        "Fallon Solutions",
        "With high-volume job bookings and invoice follow-ups across electrical, plumbing, and AC divisions, even a modest automation on the invoicing and scheduling side could eliminate hours of manual reconciliation across your team every week.",
    ),
    (
        "Daniel",
        "info@dynamicplumbing.com.au",
        "Dynamic Plumbing",
        "For a growing plumbing business, manual scheduling and invoice follow-ups are the admin tasks most likely to eat into time that should be spent in the field — and they're usually the first to get dropped when things get busy.",
    ),
    (
        "Erika",
        "erika@yourtherapysa.com",
        "Your Therapy SA",
        "Across 4 disciplines with different NDIS line items and reporting requirements, the paperwork burden on your clinical team doesn't scale linearly — it grows faster than the practice itself, which is exactly where automation pays for itself quickly.",
    ),
    (
        "Anne",
        "anne@backinstrength.com.au",
        "Back In Strength",
        "With 7 physios writing NDIS session notes after hours, even a 20-minute reduction per note per day is 2+ hours back per week per clinician — time that could go toward patients or simply not be worked after hours.",
    ),
    (
        "there",
        "chermside@ndc.com.au",
        "National Dental Care Chermside",
        "In a multi-dentist practice, appointment reminders and no-show follow-ups are almost always handled manually by reception — and it's one of the highest-ROI automations I see, since even a 10% reduction in no-shows pays for itself within the first month.",
    ),
    (
        "there",
        "info@smilefocusdental.com.au",
        "SmileFocus Dental",
        "Google review management and patient recall reminders are two of the most common manual tasks at independent dental practices — and they're also two of the easiest to automate in a way that feels personal, not robotic.",
    ),
    (
        "there",
        "reception@cooparoomedical.com.au",
        "Coorparoo Family Practice",
        "In a busy GP clinic, patient appointment reminders and chronic disease management follow-ups are high-volume, repetitive tasks that automation handles more consistently than any manual process — no calls dropped, no patients slipping through the recall list.",
    ),
]


def build_email(first_name: str, business_name: str, personalised_line: str) -> str:
    return f"""Hi {first_name},

No reply needed — just wanted to follow up on my note about {business_name}.

{personalised_line}

A Melbourne tradie we worked with automated their job quoting process — saved 6 hours/week and closed 23% more quotes because follow-ups went out instantly instead of sitting on a to-do list.

Is manual data entry or client follow-up eating more of your team's time right now?

Happy to send a 5-min Loom showing exactly what this looks like for a business like yours.

Cheers,
Liam Frazer
AI Automation Consultant
https://ai-automation-consulting.vercel.app"""


def update_log(business_name: str, send_date: str) -> None:
    rows = []
    with open(LOG_CSV, newline="") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            if row["business_name"] == business_name:
                row["date_followup2_sent"] = send_date
            rows.append(row)

    with open(LOG_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def send_email(to_email: str, subject: str, body: str, dry_run: bool = False) -> bool:
    if dry_run:
        print(f"  [DRY RUN] Would send to: {to_email}")
        return True

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = GMAIL_USER
    msg["To"] = to_email
    msg.attach(MIMEText(body, "plain"))

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(GMAIL_USER, GMAIL_APP_PASSWORD)
            server.sendmail(GMAIL_USER, to_email, msg.as_string())
        return True
    except Exception as e:
        print(f"  ERROR sending to {to_email}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Send follow-up #2 to all 20 AU outreach contacts")
    parser.add_argument("--dry-run", action="store_true", help="Preview without sending")
    args = parser.parse_args()

    if not args.dry_run:
        if not GMAIL_USER or not GMAIL_APP_PASSWORD:
            print("ERROR: Set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.")
            print("  export GMAIL_USER='your@gmail.com'")
            print("  export GMAIL_APP_PASSWORD='xxxx xxxx xxxx xxxx'")
            print("  Get an app password: https://myaccount.google.com/apppasswords")
            sys.exit(1)

    sent = 0
    failed = 0

    for first_name, to_email, business_name, personalised_line in CONTACTS:
        subject = f"Quick follow-up: {business_name} + AI automation ROI"
        body = build_email(first_name, business_name, personalised_line)

        print(f"\n{'─' * 60}")
        print(f"To:      {to_email}")
        print(f"Subject: {subject}")
        if args.dry_run:
            print(f"\n{body}\n")

        success = send_email(to_email, subject, body, dry_run=args.dry_run)

        if success:
            sent += 1
            if not args.dry_run:
                update_log(business_name, SEND_DATE)
                print(f"  ✓ Sent + log updated")
        else:
            failed += 1

    print(f"\n{'═' * 60}")
    print(f"{'DRY RUN' if args.dry_run else 'DONE'}: {sent} sent, {failed} failed")
    if not args.dry_run and sent > 0:
        print(f"outreach-log.csv updated with date_followup2_sent = {SEND_DATE}")


if __name__ == "__main__":
    main()
