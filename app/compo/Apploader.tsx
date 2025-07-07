'use client';
import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

interface AppLoaderProps {
  children: ReactNode;
}

const loadingMessages = [
  { type: 'text', content: 'HEY' },
  { type: 'text', content: "It's Me YUG" },
  // { type: 'image', content: '/ProfileLoad.webp' },
  { type: 'text', content: 'Welcome to my...' },
  { type: 'text', content: 'Space...' },
  { type: 'text', content: 'Initializing...' },
];

export default function AppLoader({ children }: AppLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 800);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-fcolor text-3xl md:text-5xl font-bold text-center px-4 transition-all duration-500 ease-in-out bgs-loop lg:bgw-loop">
        {loadingMessages[messageIndex].type === 'text' ? (
          <h1 className="uppercase animate-fade-in">{loadingMessages[messageIndex].content}</h1>
        ) : (
          <Image
            src={loadingMessages[messageIndex].content}
            alt="Loading Visual"
            width={1200}
            height={0}
            className="animate-slide-in object-contain"
            priority
          />
        )}
      </div>
    );
  }

  return <>{children}</>;
}
