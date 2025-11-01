import { Metadata } from 'next';
import { SEO_DEFAULTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pool Financing Options | Affordable Payment Plans',
  description: 'Flexible pool financing with competitive interest rates. Multiple trusted lending partners for secured and unsecured pool loans. Make your dream pool affordable today.',
  keywords: ['pool financing', 'pool loans', 'swimming pool financing', 'payment plans', 'pool payment options'],
  openGraph: {
    title: 'Pool Financing Options | Bogner Pools',
    description: 'Flexible pool financing with competitive interest rates from multiple trusted lending partners.',
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
    title: 'Pool Financing Options | Bogner Pools',
    description: 'Flexible pool financing with competitive interest rates.',
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
