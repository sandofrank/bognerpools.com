import Link from 'next/link';
import { SEO_DEFAULTS, BUSINESS_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "COVID-19 and Your Swimming Pool Safety | Bogner Pools",
  description: "Learn about COVID-19 safety for swimming pools. CDC guidance, sanitation tips, and common sense practices for safe pool use during the pandemic.",
  openGraph: {
    title: "COVID-19 and Your Swimming Pool Safety | Bogner Pools",
    description: "Learn about COVID-19 safety for swimming pools. CDC guidance, sanitation tips, and common sense practices for safe pool use during the pandemic.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'COVID-19 pool safety guidelines and sanitation tips by Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "COVID-19 and Your Swimming Pool Safety | Bogner Pools",
    description: "Learn about COVID-19 safety for swimming pools. CDC guidance, sanitation tips, and common sense practices for safe pool use during the pandemic.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function CovidPoolSafety() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'COVID-19 and Your Swimming Pool Safety',
    description: 'Learn about COVID-19 safety for swimming pools. CDC guidance, sanitation tips, and common sense practices for safe pool use during the pandemic.',
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
            <h1 className="text-5xl font-bold mb-4">COVID-19 and Your Swimming Pool</h1>
            <p className="text-xl">
              Safety guidance and best practices for pool owners
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          {/* CDC Statement */}
          <div className="bg-green-50 border-l-4 border-green-600 p-8 mb-8 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-900">Official CDC Guidance</h2>
            <p className="text-lg text-gray-800 mb-4">
              According to the Centers for Disease Control and Prevention (CDC):
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 italic text-lg">
                "There is no evidence that COVID-19 can be spread to humans through the use of pools and hot tubs. Proper operation, maintenance, and disinfection (e.g., with chlorine and bromine) of pools and hot tubs should remove or inactivate the virus that causes COVID-19."
              </p>
            </div>
          </div>

          {/* Context */}
          <div className="mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700">
                With travel restrictions and stay-at-home orders during the pandemic, many families discovered the value of having a backyard oasis. Rather than planning expensive vacations, homeowners invested in pools to create safe, private recreation spaces at home.
              </p>
            </div>
          </div>

          {/* Sanitation Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pool Sanitation Best Practices</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Maintain Regular Sanitation</h3>
                    <p className="text-gray-700">
                      Keep your regular pool sanitation schedule. Proper chlorine or bromine levels are your first line of defense against pathogens, including viruses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Test Chemistry Weekly</h3>
                    <p className="text-gray-700 mb-3">
                      Test your pool chemistry at least once per week and balance chemicals as needed. Pay special attention to pH levels, which affect how well chlorine works.
                    </p>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Ideal levels:</strong> Free chlorine 1-3 ppm, pH 7.2-7.6, Total Alkalinity 80-120 ppm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Wash Pool Towels in Hot Water</h3>
                    <p className="text-gray-700">
                      Launder pool towels, swimsuits, and other pool-related fabrics in hot water after each use to kill any potential pathogens.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Sanitize Pool Furniture</h3>
                    <p className="text-gray-700">
                      Regularly clean and sanitize poolside furniture, in-pool furniture (like loungers), handrails, ladders, and diving boards with appropriate disinfectants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Clean the Pool Deck</h3>
                    <p className="text-gray-700">
                      Wash your pool deck regularly with chlorinated water, paying special attention to areas where water puddles or where swimmers frequently walk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Sense Practices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Common Sense Safety Practices</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border-2 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-yellow-900">Keep Sick People Out</h3>
                <p className="text-gray-700">
                  If anyone in your household is feeling unwell or showing any symptoms of illness, they should stay out of the pool until fully recovered.
                </p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-yellow-900">Don't Exceed Capacity</h3>
                <p className="text-gray-700">
                  Don't exceed the recommended user load for your pool. A good rule of thumb: about one person per three linear feet of pool size.
                </p>
              </div>
            </div>
          </div>

          {/* Social Distancing Reminder */}
          <div className="mb-12">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Remember General COVID-19 Precautions</h2>
              <p className="text-lg mb-4">
                While the pool water itself is safe when properly maintained, general COVID-19 precautions still apply:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Maintain appropriate distance from people outside your household</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Avoid sharing towels, drinks, or personal items</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Wash hands frequently, especially before and after pool use</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Follow local health department guidelines for gatherings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Staycation Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">The Backyard Staycation Trend</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                The pandemic transformed how families think about recreation and vacation time. Many discovered that a backyard pool offers:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Safety & Privacy</h4>
                  <p className="text-gray-700">Enjoy recreation in your own private space without exposure concerns</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Convenience</h4>
                  <p className="text-gray-700">No travel time, no packing - relaxation is just steps away</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Long-term Value</h4>
                  <p className="text-gray-700">One-time investment provides years of enjoyment for the whole family</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Exercise & Wellness</h4>
                  <p className="text-gray-700">Stay active and healthy with swimming and water activities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Need Help with Pool Maintenance?</h2>
            <p className="text-gray-700 mb-6">
              Whether you're a new pool owner or need guidance on proper sanitation, we're here to help. Check out our pool maintenance resources or contact us for support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/help"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition text-center"
              >
                Pool Support Resources
              </Link>
              <Link
                href="/resources/chlorine-101"
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-center"
              >
                Learn About Chlorine
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Backyard Oasis?</h2>
            <p className="text-xl mb-6">
              Transform your backyard into a private retreat. Schedule a free consultation to explore your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule-a-consultation"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/gallery"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
              >
                View Pool Designs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
