import Link from "next/link";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
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
            <span className="text-xl font-semibold text-gray-900">Stella</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-gray-900 transition-colors"
          >
            Privacy
          </Link>
          <a
            href="mailto:hello@stillkettle.com"
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
