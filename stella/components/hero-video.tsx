"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function HeroVideo() {
  const [showReplay, setShowReplay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReplay = () => {
    setShowReplay(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden shadow-2xl relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full aspect-video object-cover"
        onEnded={() => setShowReplay(true)}
      >
        <source
          src="https://xskhorblxsvtotpsmcwk.supabase.co/storage/v1/object/public/marketing-assets/stellacomparison0205.mp4"
          type="video/mp4"
        />
      </video>

      <motion.div
        className="absolute inset-0 bg-black/40 flex items-center justify-center"
        animate={{
          opacity: showReplay ? 1 : 0,
          pointerEvents: showReplay ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={handleReplay}
          className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Replay video"
        >
          <svg
            className="w-7 h-7 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
