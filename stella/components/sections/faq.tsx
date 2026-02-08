"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "item-1",
    question: "Is my data secure?",
    answer:
      "Yes. Stella runs entirely in your browser as a Chrome extension. Invoice data goes directly from Gmail to your Google Sheet using your own Google account credentials. We never store your emails or invoice data on our servers.",
  },
  {
    value: "item-2",
    question: "Which email providers are supported?",
    answer:
      "Currently Gmail only. We use Google's official API with OAuth for secure access. This ensures we only have permission to read your emails, and you can revoke access at any time from your Google account settings.",
  },
  {
    value: "item-3",
    question: "What invoice formats are supported?",
    answer:
      "Stella works with most invoice emails\u2014plain text, HTML formatted, and PDF attachments (Pro plan). Our AI learns vendor patterns over time, so it gets better at extracting data from your specific vendors the more you use it.",
  },
  {
    value: "item-4",
    question: "Can I cancel anytime?",
    answer:
      "Yes. Pro subscriptions can be canceled anytime with just a few clicks. You\u2019ll keep your Pro features until the end of your current billing period. No questions asked, no hoops to jump through.",
  },
  {
    value: "item-5",
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 14-day money-back guarantee. If you\u2019re not satisfied with Pro for any reason, just email us within 14 days of your purchase and we\u2019ll refund you in full.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Stella
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="border border-gray-200 rounded-xl px-6"
              >
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
