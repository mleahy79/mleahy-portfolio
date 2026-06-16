'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number; vx: number; vy: number;
  r: number; life: number; max: number; hue: number;
}

const FPS = 30;
const INTERVAL = 1000 / FPS;

export default function SparkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const cv = ref.current!;
    const ctx = cv.getContext('2d')!;
    let W = 0, H = 0, parts: Particle[] = [], raf = 0, last = 0;
    const COUNT = () => Math.min(35, Math.floor(window.innerWidth / 36));

    function resize() {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W; cv.height = H;
    }

    function spawn(initial: boolean): Particle {
      return {
        x: Math.random() * W,
        y: initial ? Math.random() * H : H + 10,
        vx: (Math.random() - .5) * .35,
        vy: -(.4 + Math.random() * 1.1),
        r: .6 + Math.random() * 1.7,
        life: 0,
        max: 280 + Math.random() * 240,
        hue: 28 + Math.random() * 14,
      };
    }

    function tick(now: number) {
      raf = requestAnimationFrame(tick);
      if (now - last < INTERVAL) return;
      last = now;

      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.life++;
        p.vx += (Math.random() - .5) * .02;
        const a = Math.max(0, 1 - p.life / p.max) * .85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},100%,62%,${a})`;
        ctx.fill();
        if (p.life > p.max || p.y < -12) Object.assign(p, spawn(false));
      }
    }

    resize();
    window.addEventListener('resize', resize);
    parts = Array.from({ length: COUNT() }, () => spawn(true));
    raf = requestAnimationFrame(tick);

    const onVisibility = () => document.hidden ? cancelAnimationFrame(raf) : (raf = requestAnimationFrame(tick));
    document.addEventListener('visibilitychange', onVisibility);

    let scrollTimer = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => { raf = requestAnimationFrame(tick); }, 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(scrollTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
