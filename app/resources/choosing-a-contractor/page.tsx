import Link from 'next/link';
import { SEO_DEFAULTS, BUSINESS_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Choose the Right Pool Contractor | Bogner Pools",
  description: "Learn how to select a reputable pool contractor. Avoid common mistakes, understand the importance of accuracy over flashy presentations, and choose quality over bargain prices.",
  openGraph: {
    title: "How to Choose the Right Pool Contractor | Bogner Pools",
    description: "Learn how to select a reputable pool contractor. Avoid common mistakes, understand the importance of accuracy over flashy presentations, and choose quality over bargain prices.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Guide to choosing a reputable pool contractor by Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Choose the Right Pool Contractor | Bogner Pools",
    description: "Learn how to select a reputable pool contractor. Avoid common mistakes, understand the importance of accuracy over flashy presentations, and choose quality over bargain prices.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function ChoosingContractor() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Choose the Right Pool Contractor',
    description: 'Learn how to select a reputable pool contractor. Avoid common mistakes, understand the importance of accuracy over flashy presentations, and choose quality over bargain prices.',
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
            <h1 className="text-5xl font-bold mb-4">Choose the Right Pool Contractor</h1>
            <p className="text-xl">
              Strategy, questions, and information to help you make an informed decision
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-lg text-gray-700">
              Choosing a reputable pool contractor can be challenging. With so many options and varying approaches to sales and construction, how do you know who to trust with your investment? This guide will help you navigate the decision with confidence.
            </p>
          </div>

          {/* Common Mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">3 Common Mistakes to Avoid</h2>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 text-red-900">Mistake #1: Choosing Flash Over Substance</h3>
                <p className="text-gray-700 mb-3">
                  Many homeowners get dazzled by fancy 3D drawings and high-tech presentations, focusing on bells and whistles rather than what truly matters.
                </p>
                <p className="text-gray-700">
                  <strong>What really matters:</strong> Construction accuracy, quality materials, proven methods, and a track record of building exactly what was promised.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 text-red-900">Mistake #2: Bargain Hunting</h3>
                <p className="text-gray-700 mb-3">
                  Looking for the cheapest option often means compromising on quality, materials, or construction methods.
                </p>
                <p className="text-gray-700">
                  <strong>The truth:</strong> There are no free rides. Hiring the cheapest builder with subpar methods and materials will cost you more in the long run through repairs, resurfacing, and ongoing issues.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-3 text-red-900">Mistake #3: Choosing the "Yes Man"</h3>
                <p className="text-gray-700 mb-3">
                  Some estimators will say "yes" to everything you want without honest guidance, just to close the sale.
                </p>
                <p className="text-gray-700">
                  <strong>What you need:</strong> An estimator who discusses options with your best interest in mind, even if it means suggesting a different approach than what you initially envisioned.
                </p>
              </div>
            </div>
          </div>

          {/* Accuracy and Presentation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Accuracy Matters More Than Presentation</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                Different companies present information differently. Some offer in-home design consultations with hand-drawn sketches. Others provide polished 3D renderings. Neither approach is inherently better - what matters is accuracy.
              </p>

              <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-3">The Bogner Approach</h3>
                <p className="text-lg mb-4">
                  We prioritize accuracy and design integrity over flashy presentations. Our goal is simple: build exactly what we present to you.
                </p>
                <p className="text-lg italic">
                  "We measure twice, design carefully, and deliver precisely what we promise."
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold mb-3 text-gray-800">Critical Questions to Ask:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>How do you ensure the final pool matches the design presented?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>What happens if measurements or site conditions change during construction?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Can I see examples of completed projects that match their original designs?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>What construction methods and materials do you use, and why?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Budget vs Quality */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Budget Realistically for Quality</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-yellow-50 border-2 border-yellow-500 p-6 rounded-lg mb-6">
                <p className="text-xl font-bold text-yellow-900 mb-3">
                  "There are no free rides."
                </p>
                <p className="text-gray-700">
                  If an offer seems too good to be true, it probably is. Extremely low bids often indicate shortcuts in materials, workmanship, or both.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">The Real Cost of Cheap Work</h3>
              <p className="text-gray-700 mb-4">
                Hiring the cheapest contractor may save money upfront, but poor construction methods and inferior materials lead to:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Premature surface deterioration requiring early resurfacing</li>
                <li>Equipment failures from improper installation</li>
                <li>Plumbing leaks and structural issues</li>
                <li>Higher ongoing maintenance costs</li>
                <li>Decreased property value</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-blue-900">Our Advice:</h4>
                <p className="text-gray-700 text-lg">
                  Be realistic and build the highest quality pool you can afford. A well-built pool is an investment that adds value to your property and provides decades of enjoyment.
                </p>
              </div>
            </div>
          </div>

          {/* Honesty and Integrity */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Look for Honesty and Integrity</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                The relationship you build with your pool contractor starts during the estimation process. Pay attention to how you're treated and whether your questions are answered with respect and expertise.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-green-900">Good Signs:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Takes time to understand your needs and budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Offers alternative solutions you hadn't considered</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Explains pros and cons of different approaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Provides references and examples of past work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Answers questions thoroughly and respectfully</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-red-900">Red Flags:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>High-pressure sales tactics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Dismissive of your questions or concerns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Vague answers about methods and materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Reluctant to provide references</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Significantly lower bids than other contractors</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">The Key Question:</h4>
                <p className="text-lg mb-3">
                  Is the estimator helping <strong>you</strong> or helping <strong>themselves</strong>?
                </p>
                <p>
                  Good estimators help you see different solutions and perspectives that serve your best interest, not just what makes the easiest or most profitable sale.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Matters */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">The Value of Experience</h2>
              <p className="text-xl mb-4">
                Long-standing contractors bring decades of problem-solving experience to every project. They've seen it all and know how to navigate challenges before they become problems.
              </p>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <p className="text-lg mb-2">
                  <strong>Bogner Pools: Building pools since 1959</strong>
                </p>
                <p>
                  Over 60 years of experience means we've built thousands of pools, solved countless challenges, and refined our methods to deliver exceptional quality and value.
                </p>
              </div>
            </div>
          </div>

          {/* Verification Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Verify Credentials</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                Before signing any contract, verify the contractor's credentials:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-2 border-blue-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Contractor License</h4>
                  <p className="text-gray-700 mb-3">
                    Verify their license is current and in good standing with the California Contractors State License Board (CSLB).
                  </p>
                  <p className="text-sm text-gray-600">
                    Check for disciplinary actions, complaints, and license status at cslb.ca.gov
                  </p>
                </div>

                <div className="border-2 border-blue-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">BBB Rating</h4>
                  <p className="text-gray-700 mb-3">
                    Check their Better Business Bureau rating and read customer complaints and resolutions.
                  </p>
                  <p className="text-sm text-gray-600">
                    Look for A+ ratings and see how they handle customer concerns
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-lg mb-2">
                  <strong>Bogner Pools Credentials:</strong>
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Contractor License #C53 275843</li>
                  <li>• A+ BBB Rating</li>
                  <li>• Zero complaints on record</li>
                  <li>• Licensed and insured</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Build Your Pool the Right Way?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience the Bogner difference - 60+ years of honest, quality pool construction backed by our A+ rating and zero complaints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule-a-consultation"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/gallery"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
              >
                View Our Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
