import Link from 'next/link';
import { SEO_DEFAULTS, BUSINESS_INFO } from '@/lib/constants';
import { testimonials } from '@/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Testimonials | Bogner Pools",
  description: "Read what our satisfied customers have to say about their Bogner Pools experience. 60+ years of happy pool owners in Riverside and the Inland Empire.",
  openGraph: {
    title: "Customer Testimonials | Bogner Pools",
    description: "Read what our satisfied customers have to say about their Bogner Pools experience. 60+ years of happy pool owners in Riverside and the Inland Empire.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools customer testimonials and reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Customer Testimonials | Bogner Pools",
    description: "Read what our satisfied customers have to say about their Bogner Pools experience. 60+ years of happy pool owners in Riverside and the Inland Empire.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

// Generate Review Schema for each testimonial
const reviewSchemas = testimonials.map((testimonial) => ({
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: testimonial.rating,
    bestRating: 5,
  },
  author: {
    '@type': 'Person',
    name: testimonial.author,
  },
  reviewBody: testimonial.quote,
}));

// Aggregate Rating Schema
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: testimonials.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviewSchemas,
};

export default function Testimonials() {
  return (
    <div className="py-12">
      {/* JSON-LD Structured Data for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers across Riverside and the Inland Empire
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">60+</div>
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Pools Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
            <div className="text-gray-600">BBB Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Attribution */}
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                {testimonial.location && (
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-gray-100 py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Licensed & Verified</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                <strong>Contractor License #C53 275843</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Verify our credentials and see our track record of zero complaints and an A+ rating:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.cslb.ca.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Verify with CSLB
                </a>
                <a
                  href="https://www.bbb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  View BBB Rating
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl mb-8">
            Let us build your dream pool with the same care and quality that has earned us these testimonials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-a-consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
