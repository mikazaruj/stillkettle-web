import { Metadata } from "next";
import PricingPageClient from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing - Stella | Gmail Invoice Scanner",
  description:
    "Pricing plans for Stella - Gmail Invoice Scanner Chrome Extension. Free and Pro plans available.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
