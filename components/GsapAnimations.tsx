'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function GsapAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // Hero intro
    gsap.set('.h-inner', { yPercent: 110, rotate: 2 });
    gsap.set('#eyebrow', { opacity: 0, x: -20 });
    gsap.set('#heroSub, #heroCta', { opacity: 0, y: 24 });
    gsap.set('.hero-spec', { opacity: 0 });

    gsap.timeline({ defaults: { ease: 'power4.out' } })
      .to('#eyebrow', { opacity: 1, x: 0, duration: .7 }, .15)
      .to('.h-inner', { yPercent: 0, rotate: 0, duration: 1.1, stagger: .13 }, .25)
      .to('#heroSub', { opacity: 1, y: 0, duration: .8 }, '-=.5')
      .to('#heroCta', { opacity: 1, y: 0, duration: .8 }, '-=.6')
      .to('.hero-spec', { opacity: 1, duration: 1 }, '-=.4')
      .call(() => gsap.set('.h-inner', { clearProps: 'transform,will-change' }));

    // Scroll reveals — IntersectionObserver instead of ScrollTrigger to keep scroll thread free
    const rvEls = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
    rvEls.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(42px)'; });

    const rvObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.style.transition = 'opacity .9s cubic-bezier(0.16,1,0.3,1), transform .9s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '';
        el.style.transform = '';
        rvObserver.unobserve(el);
      });
    }, { rootMargin: '-14% 0px' });
    rvEls.forEach(el => rvObserver.observe(el));

    // Stamp pop-in
    const stampObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        gsap.from(e.target, { scale: 2.4, opacity: 0, rotate: 8, duration: .55, ease: 'back.in(2.5)' });
        stampObserver.unobserve(e.target);
      });
    }, { rootMargin: '-18% 0px' });
    document.querySelectorAll<Element>('.stamp').forEach(st => stampObserver.observe(st));

    // Mat grid stagger
    const matGrid = document.getElementById('matGrid');
    if (matGrid) {
      const matObserver = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        gsap.from('#matGrid .mat', {
          opacity: 0, y: 26, duration: .55, ease: 'power2.out',
          stagger: { each: .05, grid: 'auto', from: 'start' },
        });
        matObserver.disconnect();
      }, { rootMargin: '-15% 0px' });
      matObserver.observe(matGrid);
    }

    // Anchor smooth scroll via GSAP (avoids scroll-behavior: smooth conflict)
    const handleAnchor = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href')!);
      if (!target) return;
      e.preventDefault();
      gsap.to(window, { scrollTo: { y: target, offsetY: 0 }, duration: 0.75, ease: 'power2.inOut' });
    };
    document.addEventListener('click', handleAnchor);

    return () => {
      rvObserver.disconnect();
      stampObserver.disconnect();
      document.removeEventListener('click', handleAnchor);
    };
  }, []);

  return null;
}
