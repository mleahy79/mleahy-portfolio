'use client';

import { useEffect, useRef } from 'react';

export default function ScrollRail() {
  const markerRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const barFill = document.getElementById('barFill') as HTMLElement | null;

    function update() {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, scrollY / max) : 0;
      const pctStr = Math.round(p * 100) + '%';
      if (markerRef.current) markerRef.current.style.top = (p * 100) + '%';
      if (pctRef.current) pctRef.current.textContent = pctStr;
      if (barFill) barFill.style.width = (p * 100) + '%';
    }

    addEventListener('scroll', update, { passive: true });
    update();
    return () => removeEventListener('scroll', update);
  }, []);

  return (
    <aside className="rail" aria-hidden="true">
      <div className="rail-ticks">
        <div className="rail-marker" ref={markerRef} />
      </div>
      <div className="rail-readout">
        DEPTH <strong ref={pctRef}>0%</strong>
      </div>
    </aside>
  );
}
