"use client";

import { createContext, useContext, useState, ReactNode, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ComingSoonContext = createContext<{ open: () => void }>({ open: () => {} });

export function useComingSoon() {
  return useContext(ComingSoonContext);
}

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO: Wire up to Supabase/Resend/API endpoint
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  const handleClose = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form after dialog closes (with slight delay so user doesn't see reset)
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 300);
    }
  };

  return (
    <ComingSoonContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <DialogHeader className="items-center">
                <DialogTitle className="text-2xl">You&apos;re on the list!</DialogTitle>
                <DialogDescription>
                  We&apos;ll email you as soon as Stella launches on the Chrome Web Store.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={() => handleClose(false)} variant="outline" className="mt-4 rounded-full">
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader className="items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <DialogTitle className="text-2xl">Get Early Access</DialogTitle>
                <DialogDescription>
                  Stella is launching soon. Join the waitlist and be the first to know.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors"
                />
                <Button type="submit" disabled={loading} className="rounded-full">
                  {loading ? "Joining..." : "Join the Waitlist"}
                </Button>
                <p className="text-xs text-center text-gray-500">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ComingSoonContext.Provider>
  );
}
