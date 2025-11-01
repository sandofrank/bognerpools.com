import Link from 'next/link';
import { SEO_DEFAULTS, BUSINESS_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chlorine 101 - Pool Chemistry Guide | Bogner Pools",
  description: "Learn about different types of chlorine for pool maintenance. Understand organic vs inorganic chlorine, pH balance, and choosing the right sanitizer for your pool.",
  openGraph: {
    title: "Chlorine 101 - Pool Chemistry Guide | Bogner Pools",
    description: "Learn about different types of chlorine for pool maintenance. Understand organic vs inorganic chlorine, pH balance, and choosing the right sanitizer for your pool.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Pool chemistry and chlorine guide by Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chlorine 101 - Pool Chemistry Guide | Bogner Pools",
    description: "Learn about different types of chlorine for pool maintenance. Understand organic vs inorganic chlorine, pH balance, and choosing the right sanitizer for your pool.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function Chlorine101() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Chlorine 101 - Pool Chemistry Guide',
    description: 'Learn about different types of chlorine for pool maintenance. Understand organic vs inorganic chlorine, pH balance, and choosing the right sanitizer for your pool.',
    image: SEO_DEFAULTS.ogImage,
    author: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417717942376-MCD17NTYX6ZBJIPC2BN0/logo.png',
      },
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Chlorine 101</h1>
            <p className="text-xl">
              Understanding pool chemistry beyond basic filtration
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-lg text-gray-800">
              Frustration can quickly set in when you have less than attractive pool water, but your test kit says all is well. Understanding the different types of chlorine and how they work is essential for maintaining crystal-clear, healthy pool water.
            </p>
          </div>

          {/* Organic Chlorine Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Organic Chlorine</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">3" and 1" Tablets (Tri-chlor Tabs)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Requires an erosion feeder for proper distribution</li>
                <li>Slow-dissolving for consistent chlorination</li>
                <li>Contains stabilizer (Cyanuric Acid)</li>
                <li>Cost-effective option for regular maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Granular (Di-chlor)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Contains built-in stabilizer</li>
                <li>Fast-dissolving for quick results</li>
                <li>Easy to use and measure</li>
                <li>Ideal for spot treatment</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Important Note: Cyanuric Acid (Stabilizer)</h4>
              <p className="text-gray-700 mb-3">
                Cyanuric Acid is a chlorine stabilizer that protects chlorine from UV degradation. However, too much stabilizer makes chlorine "lazy" or less reactive.
              </p>
              <p className="text-gray-700">
                <strong>Warning:</strong> Excessive stabilizer buildup may eventually require partial pool drainage. Additionally, the low pH of these products can affect pool finishes over time.
              </p>
            </div>
          </div>

          {/* Inorganic Chlorine Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Inorganic Chlorine</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Liquid Sodium Hypochlorite</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>The powerhouse for sanitation and shocking</li>
                <li>No stabilizer - won't cause buildup issues</li>
                <li>Works quickly and effectively</li>
                <li>High pH - requires balancing after addition</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                This is one of the most effective options for maintaining and shocking your pool.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Granular Calcium Hypochlorite</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Can temporarily cloud water</li>
                <li>High pH - requires balancing</li>
                <li>Strong sanitizing power</li>
                <li>Good for shocking treatments</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">1" Bromine Tablets</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>pH neutral (maintains 7.5 pH level)</li>
                <li>Less soluble than chlorine tablets</li>
                <li>Works well in hot water (spas)</li>
                <li>More expensive than chlorine options</li>
                <li>Ideal for people sensitive to chlorine</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Gas Chlorine</h3>
              <p className="text-gray-700">
                <strong>Note:</strong> Gas chlorine is dangerous, requires Haz-Mat training, and is nearly obsolete in residential pool applications. We do not recommend this option for homeowners.
              </p>
            </div>
          </div>

          {/* pH Balance Section */}
          <div className="bg-blue-600 text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">pH Balance is Critical</h2>
            <p className="text-lg mb-4">
              Most chlorine types affect your pool's pH level. After adding chlorine (except pH-neutral bromine), you'll need to test and adjust your pH to maintain proper water balance.
            </p>
            <p className="text-lg">
              Proper pH levels ensure your sanitizer works effectively, protects your pool equipment, and keeps swimmers comfortable.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Need Help Choosing the Right Chlorine?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team can help you select the best sanitization system for your pool and teach you proper maintenance techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule-a-consultation"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/help"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
              >
                Get Pool Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
