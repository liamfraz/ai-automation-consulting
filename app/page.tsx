import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { CaseStudies } from "@/components/case-studies";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
