import PageHeader from '@/components/PageHeader';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pool Products & Equipment | Bogner Pools",
  description: "Quality pool equipment and products from trusted manufacturers. Energy-efficient pumps, heaters, automation systems, and more.",
  openGraph: {
    title: "Pool Products & Equipment | Bogner Pools",
    description: "Quality pool equipment and products from trusted manufacturers. Energy-efficient pumps, heaters, automation systems, and more.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Quality pool equipment and products from Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pool Products & Equipment | Bogner Pools",
    description: "Quality pool equipment and products from trusted manufacturers. Energy-efficient pumps, heaters, automation systems, and more.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function Products() {
  return (
    <div>
      <PageHeader
        title="Pool Products"
        description="Quality equipment from the industry's leading manufacturers"
        variant="indigo"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703085725-FZSYRWSX7VGX32QW93IB/Casas-27_2.jpg"
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Pumps & Filtration</h3>
            <p className="text-gray-700 mb-4">
              Energy-efficient variable speed pumps, high-performance filters, and advanced filtration systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Heating & Automation</h3>
            <p className="text-gray-700 mb-4">
              Pool heaters, heat pumps, and smart automation systems for complete control.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Water Features</h3>
            <p className="text-gray-700 mb-4">
              Waterfalls, fountains, LED lighting, and other features to enhance your pool.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Need Expert Guidance on Pool Equipment?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our team can help you select the perfect products for your pool project. Schedule a free in-home consultation to discuss equipment options and get personalized recommendations.
          </p>
          <div className="space-y-3">
            <a href="/schedule-a-consultation" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
              Schedule In-Home Consultation
            </a>
            <p className="text-sm text-gray-600">
              Or <a href="tel:9516885543" className="text-blue-600 hover:underline font-semibold">call (951) 688-5543</a> to schedule a showroom visit and see material samples
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
