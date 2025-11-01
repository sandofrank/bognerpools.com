import PageHeader from '@/components/PageHeader';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "I Need Help | Bogner Pools Technical Support",
  description: "Technical support for swimming pools constructed by Bogner Pools. Contact our team for assistance.",
  openGraph: {
    title: "I Need Help | Bogner Pools Technical Support",
    description: "Technical support for swimming pools constructed by Bogner Pools. Contact our team for assistance.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools technical support and customer service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "I Need Help | Bogner Pools Technical Support",
    description: "Technical support for swimming pools constructed by Bogner Pools. Contact our team for assistance.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function Help() {
  return (
    <div>
      <PageHeader
        title="I Need Help"
        description="Technical support for Bogner Pools customers"
        variant="purple"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703082207-OXYLCCUWYTKEQQ1K1SSB/Bruner-3_2.jpg"
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Technical Support</h2>
          <p className="text-lg text-gray-700 mb-8">
            For inquiries regarding swimming pools constructed by Bogner Pools, please contact us:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <a href="tel:9516885543" className="text-blue-600 hover:underline text-xl">
                  (951) 688-5543
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <a href="mailto:construction@bognerpools.com" className="text-blue-600 hover:underline">
                  construction@bognerpools.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="font-bold mb-2">Business Hours</h3>
            <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:30 PM</p>
            <p className="text-gray-600 text-sm mt-1">Closed Saturday & Sunday</p>
          </div>
        </div>
      </div>
    </div>
  );
}
