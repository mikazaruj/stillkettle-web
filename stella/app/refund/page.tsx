import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy - Stella | Gmail Invoice Scanner",
  description:
    "Refund Policy for Stella - Gmail Invoice Scanner. 14-day money-back guarantee for Pro subscriptions.",
};

export default function RefundPage() {
  return (
    <LegalLayout>
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Refund Policy
        </h1>
        <p className="text-gray-500">Last updated: February 2, 2026</p>
      </div>

      {/* Money Back Guarantee Banner */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
        <div className="flex items-start">
          <svg
            className="w-8 h-8 text-green-600 mr-4 flex-shrink-0"
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
            <h2 className="text-xl font-bold text-green-800 mb-2">
              14-Day Money-Back Guarantee
            </h2>
            <p className="text-green-700">
              We offer a 14-day money-back guarantee for all new Pro
              subscriptions. If you&apos;re not satisfied with Stella Pro,
              we&apos;ll refund your payment in full.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8">
        {/* Eligibility */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Eligibility for Refunds
          </h2>
          <p className="text-gray-700 mb-4">
            To be eligible for a refund under our money-back guarantee:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              You must be a <strong>first-time Pro subscriber</strong>
            </li>
            <li>
              Your refund request must be made{" "}
              <strong>within 14 days</strong> of your initial subscription
              purchase
            </li>
            <li>
              The guarantee applies to the{" "}
              <strong>first payment only</strong>, not to subsequent renewal
              payments
            </li>
          </ul>
        </section>

        {/* How to Request */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How to Request a Refund
          </h2>
          <p className="text-gray-700 mb-4">
            To request a refund, please contact us with the following
            information:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
            <li>Your account email address</li>
            <li>The date of your purchase</li>
            <li>
              A brief reason for your refund request (optional, but helps us
              improve)
            </li>
          </ol>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@stillkettle.com"
                className="text-gray-900 hover:underline"
              >
                hello@stillkettle.com
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Please include &quot;Refund Request&quot; in your email subject
              line.
            </p>
          </div>
        </section>

        {/* Processing */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Refund Processing
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              We aim to process refund requests within{" "}
              <strong>5-10 business days</strong>
            </li>
            <li>
              Refunds are processed through <strong>Paddle</strong>, our payment
              processor
            </li>
            <li>
              The refund will be returned to your{" "}
              <strong>original payment method</strong>
            </li>
            <li>
              Depending on your bank or payment provider, it may take an
              additional <strong>5-10 business days</strong> for the refund to
              appear in your account
            </li>
          </ul>
        </section>

        {/* After Refund */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            After Your Refund
          </h2>
          <p className="text-gray-700 mb-4">
            Once your refund is processed:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Your Pro subscription will be cancelled immediately</li>
            <li>Your account will be downgraded to the Free plan</li>
            <li>
              You will retain access to any data you&apos;ve already exported
            </li>
            <li>You can continue using Stella with Free plan features</li>
          </ul>
        </section>

        {/* Cancellation vs Refund */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Cancellation vs. Refund
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Cancellation</strong> and <strong>refund</strong> are
            different:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Cancellation</h3>
              <p className="text-gray-600 text-sm">
                You can cancel your subscription anytime. You&apos;ll keep Pro
                access until the end of your billing period. No partial refunds
                for unused time.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Refund</h3>
              <p className="text-gray-600 text-sm">
                Available only within 14 days of first purchase. Full refund of
                your payment. Pro access ends immediately upon refund.
              </p>
            </div>
          </div>
        </section>

        {/* EU Consumer Rights */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            EU Consumer Rights
          </h2>
          <p className="text-gray-700 mb-4">
            If you are a consumer in the European Union, you have the right to
            withdraw from your purchase within 14 days under the EU Consumer
            Rights Directive (2011/83/EU).
          </p>
          <p className="text-gray-700 mb-4">
            Our 14-day money-back guarantee provides protection that meets or
            exceeds these statutory requirements.
          </p>
          <p className="text-gray-700">
            For more information about your rights as an EU consumer, please see
            our{" "}
            <Link
              href="/terms#eu-consumer-rights"
              className="text-gray-900 hover:underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </section>

        {/* Exceptions */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Exceptions
          </h2>
          <p className="text-gray-700 mb-4">
            Refunds may not be available in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Requests made after the 14-day period has expired
            </li>
            <li>
              Renewal payments (subsequent months after the first payment)
            </li>
            <li>
              If you have previously received a refund for a Stella Pro
              subscription
            </li>
            <li>
              Accounts terminated due to violation of our{" "}
              <Link
                href="/terms"
                className="text-gray-900 hover:underline"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Questions?
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our refund policy, please don&apos;t
            hesitate to contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-800 font-medium">Li Hanchen</p>
            <p className="text-gray-700">Trading as Still Kettle</p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@stillkettle.com"
                className="text-gray-900 hover:underline"
              >
                hello@stillkettle.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
