"use client";

import { ComingSoonProvider } from "@/components/coming-soon-dialog";
import { Navbar } from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Features from "@/components/sections/features";
import SocialProof from "@/components/sections/social-proof";
import PricingSection from "@/components/sections/pricing-section";
import FAQ from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <ComingSoonProvider>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <SocialProof />
      <PricingSection />
      <FAQ />
      <Footer />
    </ComingSoonProvider>
  );
}
