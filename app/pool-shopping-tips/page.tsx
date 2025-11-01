import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pool Shopping Tips | Bogner Pools",
  description: "Essential tips for selecting a pool contractor and designing your dream pool. Learn what to look for when hiring a reputable pool builder.",
  openGraph: {
    title: "Pool Shopping Tips | Bogner Pools",
    description: "Essential tips for selecting a pool contractor and designing your dream pool. Learn what to look for when hiring a reputable pool builder.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Pool shopping tips and contractor selection guide by Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pool Shopping Tips | Bogner Pools",
    description: "Essential tips for selecting a pool contractor and designing your dream pool. Learn what to look for when hiring a reputable pool builder.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function PoolShoppingTips() {
  return (
    <div>
      <PageHeader
        title="Pool Shopping Tips"
        description="Essential guidance for selecting the right pool contractor and designing your perfect swimming pool"
        variant="cyan"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703095571-4G5WXH3SKPR6OMA5JKKE/Clemens-6_2.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Selecting a Contractor */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tips for Selecting a Pool Contractor</h2>
          <p className="text-lg text-gray-700 mb-8">
            The process of obtaining bids and selecting a pool company can be overwhelming to say the least.
            Consider these tips to separate the legitimate contractors from the rest.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Get an Itemized Bid</h3>
              <p className="text-gray-700">
                Establishing a unit cost and quantity for each and every phase of construction is important.
                If additions or deletions occur, this keeps you as the homeowner in control of the final cost.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Insist on a Detailed Drawing</h3>
              <p className="text-gray-700">
                You will find there are several ways to present a swimming pool. Bogner treats this part of the
                process very literally. We draw very precise plans, then we bid and build that plan exactly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Ask About the Pay Schedule</h3>
              <p className="text-gray-700">
                Most contractors accept or even demand payment up front. We simply won&apos;t accept payment on a
                project until it is 90% complete. On occasion we request a mid project draw on larger projects.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Visit the Establishment</h3>
              <p className="text-gray-700">
                A pool company is much more than the individual you are negotiating with. Is there an established
                place of business? Are there display pools? Is there a staff answering the phone?
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Obtain Lien Releases</h3>
              <p className="text-gray-700">
                You never have to ask for a lien release at Bogner Pools. It is automatic and unconditional.
                We prove we have paid for every item in your back yard long before we present you with the bill.
                Bogner is risk free.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Ask Around</h3>
              <p className="text-gray-700">
                The more you ask around, the more our name comes up as a reputable builder.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Check the CSLB and BBB</h3>
              <p className="text-gray-700">
                Make sure you verify the status of any contractor with the{' '}
                <a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Contractors State License Board
                </a>{' '}
                and the{' '}
                <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Better Business Bureau
                </a>
                . It is important to see a track record of happy customers. No complaints and an A+ rating are evidence of this.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Lic.# C53 275843</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Pool Design Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tips for Pool Design</h2>
          <p className="text-lg text-gray-700 mb-6">
            Most cities and counties have very similar requirements for pools. Here are some guidelines to help you
            prepare your design ideas. There are special circumstances in all cities but these rules are a good
            starting point in the design process.
          </p>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Typical Setback Requirements:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Pool:</strong> 5&apos; setback from property line</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Pool:</strong> 5&apos; setback from any non-tempered glass</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Pool:</strong> Can be engineered as close as 3&apos; to residence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Equipment:</strong> 5&apos; setback from property line (some cities require a masonry sound wall)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Equipment:</strong> 12&quot; from residence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Fencing:</strong> 5&apos; tall approved fence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700"><strong>Fencing:</strong> Gates must swing away from pool and self close</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Schedule a free consultation with Bogner Pools and let our 60+ years of experience work for you.
            </p>
            <Link
              href="/schedule-a-consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
