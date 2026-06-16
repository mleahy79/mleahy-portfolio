'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ITEMS = ['React', 'Next.js', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Stripe', 'JavaScript', 'Tailwind', 'GSAP', 'Vercel', 'Jest'];

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !trackRef.current) return;

    gsap.to(trackRef.current, { xPercent: -25, duration: 28, ease: 'none', repeat: -1 });
  }, []);

  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track" ref={trackRef}>
        {items.map((t, i) => (
          <span key={i}><i>▸</i>{t}</span>
        ))}
      </div>
    </div>
  );
}
