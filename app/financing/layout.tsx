import type { Metadata } from 'next';
import { SEO_DEFAULTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pool Financing Riverside | Affordable Options | Bogner Pools',
  description: 'Flexible pool financing options in Riverside and the Inland Empire. Secured and unsecured financing with competitive rates. Make your dream pool affordable today.',
  keywords: ['pool financing', 'pool loans', 'pool payment options', 'Riverside pool financing', 'affordable pool financing'],
  openGraph: {
    title: 'Pool Financing Riverside | Affordable Options | Bogner Pools',
    description: 'Flexible pool financing options in Riverside and the Inland Empire. Secured and unsecured financing with competitive rates.',
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Pool Financing Options',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool Financing Riverside | Affordable Options | Bogner Pools',
    description: 'Flexible pool financing options in Riverside and the Inland Empire.',
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function FinancingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
