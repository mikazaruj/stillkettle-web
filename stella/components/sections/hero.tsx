"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeroVideo from "@/components/hero-video";
import { useComingSoon } from "@/components/coming-soon-dialog";

export default function Hero() {
  const { open } = useComingSoon();

  return (
    <section className="py-20 sm:py-32">
      <motion.div
        className="text-center max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6 text-sm px-3 py-1">
            <svg
              className="w-4 h-4 text-green-500"
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
            Free Chrome Extension
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Extract invoices from Gmail to Google Sheets
          <span className="text-gray-400"> automatically</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stop manually copying invoice data. Stella AI scans your emails and
          exports billing details in seconds.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            onClick={open}
            className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-4 h-auto text-base cursor-pointer"
          >
            <svg
              className="w-5 h-5 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.09V16.9c-2.78-.47-4.65-2.24-4.82-4.51h1.93c.17 1.24 1.12 2.19 2.89 2.41v-4.44l-.63-.15C7.73 9.59 6.64 8.41 6.64 6.82c0-1.86 1.55-3.27 3.95-3.5V2h1.44v1.32c2.33.27 3.94 1.68 4.12 3.74h-1.89c-.17-1.12-1.03-1.94-2.23-2.17v4.12l.73.17c2.48.6 3.65 1.74 3.65 3.55 0 2.03-1.6 3.44-4.15 3.68v1.68h-1.44l-.03.02-.04-.02z" />
            </svg>
            Install Free Extension
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 rounded-full px-8 py-4 text-base font-medium hover:bg-gray-50 transition-colors"
          >
            See how it works
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <HeroVideo />
      </motion.div>
    </section>
  );
}
