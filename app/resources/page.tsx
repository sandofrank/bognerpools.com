import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pool Resources & Guides | Bogner Pools",
  description: "Helpful guides and resources for pool owners and prospective buyers. Learn about pool chemistry, small backyard solutions, choosing contractors, and pool safety.",
  openGraph: {
    title: "Pool Resources & Guides | Bogner Pools",
    description: "Helpful guides and resources for pool owners and prospective buyers. Learn about pool chemistry, small backyard solutions, choosing contractors, and pool safety.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools resources and guides for pool owners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pool Resources & Guides | Bogner Pools",
    description: "Helpful guides and resources for pool owners and prospective buyers. Learn about pool chemistry, small backyard solutions, choosing contractors, and pool safety.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function Resources() {
  const resources = [
    {
      title: "Chlorine 101",
      description: "Understanding pool chemistry, types of chlorine, and proper water balance for crystal-clear pool water.",
      href: "/resources/chlorine-101",
      icon: "💧",
      topics: ["Pool Chemistry", "Sanitization", "Water Balance"],
    },
    {
      title: "Building Pools in Small Backyards",
      description: "Creative solutions for tight spaces. Learn how we design custom pools for yards of any size.",
      href: "/resources/small-backyards",
      icon: "🏡",
      topics: ["Design", "Space Planning", "Equipment Access"],
    },
    {
      title: "Choosing the Right Contractor",
      description: "Expert advice on selecting a reputable pool contractor. Avoid common mistakes and choose quality over price.",
      href: "/resources/choosing-a-contractor",
      icon: "✓",
      topics: ["Contractor Selection", "Quality", "Budget Planning"],
    },
    {
      title: "COVID-19 and Pool Safety",
      description: "CDC guidance and best practices for safe pool use. Sanitation tips and maintenance advice.",
      href: "/resources/covid-pool-safety",
      icon: "🏊",
      topics: ["Safety", "Sanitation", "Health"],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Pool Resources & Guides"
        description="Helpful information for pool owners and prospective buyers, backed by 60+ years of experience"
        variant="sky"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703089608-GFZRSE7H5KOYEA8FV0YZ/Casas-39_2.jpg"
      />

      {/* Resources Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 group"
              >
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4">{resource.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                      {resource.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {resource.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="bg-gray-100 py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Need More Help?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We offer comprehensive support resources for all Bogner Pools owners, including maintenance guides, troubleshooting tips, and technical documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Pool Support Center
              </Link>
              <Link
                href="/schedule-a-consultation"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Bogner Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Trust Bogner Pools?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">60+</div>
                <div className="text-lg">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg">Pools Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">A+</div>
                <div className="text-lg">BBB Rating</div>
              </div>
            </div>
            <p className="text-center mt-6 text-lg">
              Building custom swimming pools since 1959 with a commitment to quality, integrity, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Browse Other Sections */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/gallery"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center group"
            >
              <div className="text-4xl mb-3">📸</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                Gallery
              </h3>
              <p className="text-gray-700">Browse our portfolio of completed pool projects</p>
            </Link>

            <Link
              href="/products"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center group"
            >
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                Products
              </h3>
              <p className="text-gray-700">Explore pool features and equipment options</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
