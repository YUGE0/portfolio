// components/ScrollToTopButton.tsx
"use client"
import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-fcolor/20 bg-white text-fcolor shadow-sm transition hover:-translate-y-0.5 hover:border-fcolor/40"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
