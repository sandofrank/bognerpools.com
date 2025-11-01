import Link from 'next/link';
import { SEO_DEFAULTS, BUSINESS_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Building Pools in Small Backyards | Bogner Pools",
  description: "Do you have enough room for a pool? Learn how Bogner Pools designs and builds custom pools in tight spaces with creative solutions for equipment access and placement.",
  openGraph: {
    title: "Building Pools in Small Backyards | Bogner Pools",
    description: "Do you have enough room for a pool? Learn how Bogner Pools designs and builds custom pools in tight spaces with creative solutions for equipment access and placement.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Small backyard pool design solutions by Bogner Pools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Building Pools in Small Backyards | Bogner Pools",
    description: "Do you have enough room for a pool? Learn how Bogner Pools designs and builds custom pools in tight spaces with creative solutions for equipment access and placement.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function SmallBackyards() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Building Pools in Small Backyards',
    description: 'Do you have enough room for a pool? Learn how Bogner Pools designs and builds custom pools in tight spaces with creative solutions for equipment access and placement.',
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
            <h1 className="text-5xl font-bold mb-4">Building Pools in Small Backyards</h1>
            <p className="text-xl">
              Creative solutions for tight spaces - where there's a will, there's a way
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Do I Have Enough Room for a Pool?</h2>
            <p className="text-lg text-gray-700">
              This is one of the most common questions we hear. Every yard is unique with its own challenges - from spacious lots to tight spaces requiring creative solutions. The good news? We've built pools in yards of all sizes for over 60 years.
            </p>
          </div>

          {/* Three Common Issues */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">3 Common Space-Related Challenges</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-3">1</div>
                <h3 className="text-xl font-bold mb-3">Physical Space</h3>
                <p className="text-gray-700">
                  Is there enough room in your yard for an in-ground pool construction?
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-3">2</div>
                <h3 className="text-xl font-bold mb-3">Equipment Access</h3>
                <p className="text-gray-700">
                  Can we get bobcats or excavators between your house and property lines?
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-3">3</div>
                <h3 className="text-xl font-bold mb-3">Equipment Placement</h3>
                <p className="text-gray-700">
                  Where can we place pool equipment in limited spaces while meeting codes?
                </p>
              </div>
            </div>
          </div>

          {/* Design Solutions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Design Solutions for Small Spaces</h2>

            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Pools in Almost Any Size</h3>
              <p className="text-gray-700 mb-4">
                The beauty of custom pool design is that we can build pools in almost any size. Whether you have a compact urban lot or a narrow side yard, we can create a pool that fits your space perfectly.
              </p>
              <p className="text-gray-700">
                <strong>Our approach:</strong> Creativity and accuracy are essential in tight spaces. We carefully measure your yard, gather exact information, and consider building code restrictions to maximize your project outcome while creating a pool you'll love.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
              <p className="text-xl italic">
                "Where there is a will, there is a way."
              </p>
              <p className="mt-4">
                We've been solving space challenges for over 60 years. Every project teaches us new ways to overcome obstacles and deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Equipment Access */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Equipment Access Challenges</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Modern homes are often built closer together, making equipment access more challenging. This is especially common in newer developments where side yards are minimal.
              </p>

              <h4 className="text-xl font-bold mb-3 text-blue-600">Our Solutions:</h4>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
                <li>
                  <strong>Smaller Machines:</strong> We can use compact excavation equipment that fits through tight spaces (though this may take more time)
                </li>
                <li>
                  <strong>Smart Design Choices:</strong> We design pools to minimize soil removal and make the most efficient use of limited access
                </li>
                <li>
                  <strong>Hand Work When Needed:</strong> As a last resort, we can use wheelbarrows, jackhammers, and shovels - it's labor-intensive but gets the job done
                </li>
              </ul>

              <p className="text-gray-700 italic">
                The key is thorough planning before we start. We evaluate access points during the consultation to ensure we have a solid game plan.
              </p>
            </div>
          </div>

          {/* Equipment Location */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Pool Equipment Placement</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                Placing pool equipment in a small yard requires balancing multiple factors:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Aesthetics</h4>
                  <p className="text-gray-700">Keeping equipment out of view for a cleaner backyard appearance</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Efficiency</h4>
                  <p className="text-gray-700">Optimal filtration performance with proper plumbing layout</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Cost</h4>
                  <p className="text-gray-700">Minimizing plumbing and electrical runs to reduce expenses</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Code Compliance</h4>
                  <p className="text-gray-700">Meeting all municipal building codes and setback requirements</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-gray-800">Our Expertise Makes the Difference</h4>
                <p className="text-gray-700">
                  With decades of experience navigating municipal codes across Riverside and the Inland Empire, we know how to design equipment placement that checks all the boxes - even in the tightest spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Think Your Yard is Too Small?</h2>
            <p className="text-xl mb-6">
              Let us take a look! We offer free consultations and can show you what's possible with your space.
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
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
