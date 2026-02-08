import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stella.stillkettle.com"),
  title: "Stella - Extract Gmail Invoices to Google Sheets Automatically",
  description:
    "Extract invoice data from Gmail to Google Sheets automatically. AI-powered scanning, no manual entry required. Free Chrome extension.",
  keywords:
    "gmail invoice scanner, invoice to google sheets, extract invoice data, email invoice extractor, expense tracker, billing automation",
  openGraph: {
    url: "https://stella.stillkettle.com/",
    title: "Stella - Gmail Invoice Scanner",
    description:
      "Stop manually copying invoice data. Extract from Gmail to Sheets in seconds.",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stella - Gmail Invoice Scanner",
    description:
      "Stop manually copying invoice data. Extract from Gmail to Sheets in seconds.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>%E2%9A%A1</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
