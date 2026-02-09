"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useComingSoon } from "@/components/coming-soon-dialog";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-300 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

const freePlan = {
  included: [
    "100 emails per month",
    "3 trusted vendors",
    "6 basic extraction fields",
    "Google Sheets export",
  ],
  excluded: ["No PDF processing", "No scheduled scans"],
};

const proPlan = {
  included: [
    <>
      <strong>Unlimited</strong> emails per month
    </>,
    "10 trusted vendors",
    <>
      <strong>All 16</strong> extraction fields
    </>,
    "Google Sheets export",
    <>
      <strong>100 PDFs</strong> per month
    </>,
    "Scheduled scans (daily/weekly/monthly)",
  ],
};

export default function PricingSection({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const { open } = useComingSoon();

  return (
    <section
      id="pricing"
      className={showHeader ? "py-20 bg-gray-50" : "py-20"}
    >
      <div className="max-w-6xl mx-auto px-4">
        {showHeader && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free, upgrade when you need more power
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  Free
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">&euro;0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {freePlan.included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
                {freePlan.excluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <XIcon />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full rounded-full cursor-pointer"
                onClick={open}
              >
                Install Free
              </Button>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-primary p-8 h-full relative">
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                Most Popular
              </Badge>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-600 mb-2">Pro</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">&euro;12</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {proPlan.included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                onClick={open}
              >
                Start Pro
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
