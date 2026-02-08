import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Successful - Stella",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto px-4 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
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
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for upgrading to Pro.
        </p>

        {/* Next Steps */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h2 className="font-semibold text-gray-900 mb-4">Next steps:</h2>
          <ol className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium mr-3">
                1
              </span>
              <span>
                Install the Stella extension (if you haven&apos;t already)
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium mr-3">
                2
              </span>
              <span>
                Sign in with the same email you used for checkout
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium mr-3">
                3
              </span>
              <span>
                Your Pro features will be activated automatically
              </span>
            </li>
          </ol>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <a
            href="#"
            className="block w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Install Extension
          </a>
          <a
            href="https://mail.google.com"
            className="block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            Go to Gmail
          </a>
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="inline-block mt-8 text-sm text-gray-500 hover:text-gray-700"
        >
          &larr; Back to Stella
        </Link>
      </div>
    </div>
  );
}
