"use client";

import Link from "next/link";
import { ComingSoonProvider } from "@/components/coming-soon-dialog";
import PricingSection from "@/components/sections/pricing-section";

export default function PricingPageClient() {
  return (
    <ComingSoonProvider>
      <div className="min-h-screen flex flex-col">
        {/* Sticky header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Stella
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          {/* Page header */}
          <div className="pt-16 pb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Start free and upgrade when you need more. All plans include core
              invoice scanning features.
            </p>
          </div>

          {/* Pricing section */}
          <PricingSection showHeader={false} />

          {/* Money-back guarantee banner */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center gap-4">
              <svg
                className="w-8 h-8 text-green-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">
                  14-day money-back guarantee on Pro plans
                </p>
                <Link
                  href="/refund"
                  className="text-green-700 text-sm hover:text-green-900 underline underline-offset-2"
                >
                  Learn more about our refund policy
                </Link>
              </div>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can cancel your Pro subscription at any time.
                  You&apos;ll continue to have access until the end of your
                  billing period.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What happens when I hit my limits?
                </h3>
                <p className="text-gray-600 text-sm">
                  On the Free plan, you&apos;ll be notified when approaching
                  limits. You can upgrade to Pro anytime for unlimited scans.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes. We use Google OAuth for secure authentication and never
                  store your Gmail password. See our{" "}
                  <Link
                    href="/privacy"
                    className="text-gray-900 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Simple footer */}
        <footer className="border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 Still Kettle. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ComingSoonProvider>
  );
}
