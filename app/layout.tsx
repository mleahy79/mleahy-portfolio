import type { Metadata } from 'next';
import { Big_Shoulders, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mleahy.dev'),
  title: 'Mitchell Leahy — Frontend Developer',
  description:
    'Frontend developer who came from construction and industrial automation. React, Next.js, TypeScript. Builder of Vestige, Summarist, SustainRx.',
  openGraph: {
    type: 'website',
    siteName: 'Mitchell Leahy',
    title: 'Mitchell Leahy — Frontend Developer',
    description: 'Frontend developer building AI-powered SaaS tools. React, Next.js, TypeScript. Ask my portfolio anything.',
    url: 'https://mleahy.dev',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitchell Leahy — Frontend Developer',
    description: 'Frontend developer building AI-powered SaaS tools. React, Next.js, TypeScript. Ask my portfolio anything.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
