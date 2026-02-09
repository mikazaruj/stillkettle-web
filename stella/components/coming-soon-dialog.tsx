"use client";

import { createContext, useContext, useState, ReactNode } from "react";
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

  return (
    <ComingSoonContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <DialogTitle className="text-2xl">Coming Soon!</DialogTitle>
            <DialogDescription>
              Stella is launching soon on the Chrome Web Store. Check back shortly!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsOpen(false)} className="mt-2 rounded-full">
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    </ComingSoonContext.Provider>
  );
}
