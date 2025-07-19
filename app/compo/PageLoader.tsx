'use client';
import React, { ReactNode, useState, useEffect } from 'react';

interface PageLoaderProps {
  children: ReactNode;
  page?: string;
  speed?: number;
} 

const PageLoader = ({ children, page, speed }: PageLoaderProps) => {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setLoading(false), 800);
    }, speed);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`flex bgl-loop items-center justify-center h-screen text-fcolor text-3xl md:text-5xl font-bold text-center px-4 border-b-8 md:border-b-[1rem] border-fcolor ${
          animateOut ? 'animate-slide-up' : ''
        }`}
      >
        <h1 className="uppercase">{page ?? 'Loading...'}</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
