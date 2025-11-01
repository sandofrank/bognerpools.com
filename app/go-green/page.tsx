import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Go Green - Energy Efficient Pool Equipment | Bogner Pools",
  description: "Save hundreds to thousands of dollars annually with energy-efficient variable speed pool pumps. Learn about rebate programs and energy savings.",
  openGraph: {
    title: "Go Green - Energy Efficient Pool Equipment | Bogner Pools",
    description: "Save hundreds to thousands of dollars annually with energy-efficient variable speed pool pumps. Learn about rebate programs and energy savings.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Energy-efficient pool equipment and variable speed pumps by Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Go Green - Energy Efficient Pool Equipment | Bogner Pools",
    description: "Save hundreds to thousands of dollars annually with energy-efficient variable speed pool pumps. Learn about rebate programs and energy savings.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function GoGreen() {
  return (
    <div>
      <PageHeader
        title="Go Green & Save"
        description="Energy-efficient pool equipment that saves you money while protecting the environment"
        variant="teal"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703091212-EYMCMM5YXABZMHI0KAD2/Casas-44_2.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Rebate Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Rebate Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.riversideca.gov/utilities"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">City of Riverside Public Utilities</h3>
              <p className="text-gray-600">Check available rebates →</p>
            </a>
            <a
              href="https://www.sce.com/rebates"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">Southern California Edison</h3>
              <p className="text-gray-600">View rebate options →</p>
            </a>
          </div>
        </section>

        {/* Variable Speed Pump Advantages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Variable Speed Pump Advantages</h2>
          <p className="text-lg text-gray-700 mb-6">
            Until now all pool pumps were sized for the largest amount of water needed, typically the spa.
            This was very inefficient for the day to day operation of the pool, which generally requires up to
            half the water demand of the spa.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            With the VS pump, we can adjust the pump speed up or down to achieve the correct water flow without
            wasting electricity pumping water that we don&apos;t need. This results in energy savings of <strong>30-90%</strong>.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Key Benefits:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <strong>Typical energy savings of 30%</strong> can total hundreds of dollars per year
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  Service life of critical parts is dramatically extended because the pump is always working at peak efficiency
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  Variable speed pumps are <strong>significantly quieter</strong> than traditional pumps, operating at around 45 decibels (about 4 times quieter than standard single-speed pumps)
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  Simply dial pump speed up or down to change water flow and multiply the effects of your water features
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  Can be linked to pool and spa control systems for even greater convenience and control
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Savings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Realistic Annual Savings</h2>
          <p className="text-lg text-gray-700 mb-6">
            Here are realistic estimates when comparing a variable speed pump to a traditional pump running between 3.6 and 12 hrs/day
            at various utility rates (in dollars per kilowatt hours [kwh]) in a 20,000 gallon pool:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
              <div className="text-2xl font-bold text-gray-800 mb-2">$324 - $1,356</div>
              <div className="text-gray-600 mb-2">per year</div>
              <div className="text-sm text-gray-500">At $0.15/kwh</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
              <div className="text-2xl font-bold text-gray-800 mb-2">$432 - $1,808</div>
              <div className="text-gray-600 mb-2">per year</div>
              <div className="text-sm text-gray-500">At $0.20/kwh</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
              <div className="text-2xl font-bold text-gray-800 mb-2">$649 - $2,712</div>
              <div className="text-gray-600 mb-2">per year</div>
              <div className="text-sm text-gray-500">At $0.30/kwh</div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Every pool is different.</strong> Because of this we would love the opportunity to assess your
              individual needs and possible savings. Some pools may require new time clocks or controllers to achieve
              the highest gains in efficiency.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-8 text-center shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="text-lg mb-2">
              Use our online form to schedule a free in-home consultation.
            </p>
            <p className="text-base mb-6 text-green-100">
              We&apos;ll assess your pool and discuss energy-efficient equipment upgrades that can save you hundreds to thousands per year.
            </p>
            <div className="space-y-3">
              <Link
                href="/schedule-a-consultation"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block shadow-lg"
              >
                Schedule In-Home Consultation
              </Link>
              <p className="text-sm text-green-100">
                Want to see equipment samples? <a href="tel:9516885543" className="text-white underline hover:text-green-200 font-semibold">Call (951) 688-5543</a> to visit our showroom
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
