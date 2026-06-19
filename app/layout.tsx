import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mleahy.dev'),
  title: 'Mitchell Leahy — Frontend Developer',
  description:
    'Frontend developer who came from construction and industrial automation. React, Next.js, TypeScript. Builder of Vestige, Summarist, SustainRx.',
  openGraph: {
    type: 'website',
    siteName: 'Mitchell Leahy',
    title: 'Mitchell Leahy — Frontend Developer',
    description: 'Ask my portfolio anything.',
    url: 'https://mleahy.dev',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitchell Leahy — Frontend Developer',
    description: 'Ask my portfolio anything.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
