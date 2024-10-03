// components/ScrollToTopButton.tsx
"use client"
import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="mt-10 text-3xl font-bold">
      BackToTop
    </button>
  );
};

export default BackToTop;
