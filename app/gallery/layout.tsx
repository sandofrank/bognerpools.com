import { Metadata } from 'next';
import { SEO_DEFAULTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Photo Gallery | Custom Pool Designs',
  description: 'Browse our portfolio of custom swimming pools, spas, and water features. See real projects built by Bogner Pools throughout Riverside and the Inland Empire since 1959.',
  keywords: ['pool gallery', 'pool photos', 'pool designs', 'custom pools', 'Riverside pools', 'pool portfolio'],
  openGraph: {
    title: 'Photo Gallery | Bogner Pools',
    description: 'Browse our portfolio of custom swimming pools built throughout Riverside and the Inland Empire.',
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
    title: 'Photo Gallery | Bogner Pools',
    description: 'Browse our portfolio of custom swimming pools.',
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
