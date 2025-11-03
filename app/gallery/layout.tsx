import type { Metadata } from 'next';
import { SEO_DEFAULTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pool Gallery Riverside | Custom Pool Photos | Bogner Pools',
  description: 'Browse our gallery of custom swimming pools built in Riverside and the Inland Empire. View completed projects, construction photos, and design inspiration from 60+ years of pool building.',
  keywords: ['pool gallery', 'pool photos', 'pool designs', 'Riverside pools', 'custom pool examples', 'pool construction photos'],
  openGraph: {
    title: 'Pool Gallery Riverside | Custom Pool Photos | Bogner Pools',
    description: 'Browse our gallery of custom swimming pools built in Riverside and the Inland Empire.',
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools Gallery',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Gallery Riverside | Custom Pool Photos | Bogner Pools',
    description: 'Browse our gallery of custom swimming pools built in Riverside and the Inland Empire.',
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
