import type { Metadata } from "next";
import { CaseStudiesPage } from "./case-studies-page";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real automation ROI examples for Australian small businesses. See how AI chatbots, workflow automation, and Power Automate save hours every week.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
