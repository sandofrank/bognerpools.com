import Link from 'next/link';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pool Blog - Tips, Showcases & Testimonials | Bogner Pools",
  description: "Browse our collection of pool showcases, customer testimonials, helpful pool tips, and industry insights from 60+ years of pool building experience.",
  openGraph: {
    title: "Pool Blog - Tips, Showcases & Testimonials | Bogner Pools",
    description: "Browse our collection of pool showcases, customer testimonials, helpful pool tips, and industry insights from 60+ years of pool building experience.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools blog - pool tips, showcases, and testimonials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pool Blog - Tips, Showcases & Testimonials | Bogner Pools",
    description: "Browse our collection of pool showcases, customer testimonials, helpful pool tips, and industry insights from 60+ years of pool building experience.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

const blogCategories = [
  {
    title: "Pool Showcase",
    description: "View our stunning completed pool projects with detailed photos and construction insights",
    count: 15,
    slug: "pool-showcase",
  },
  {
    title: "Customer Testimonials",
    description: "Read what our satisfied customers have to say about their Bogner Pools experience",
    count: 12,
    slug: "testimonials",
  },
  {
    title: "Helpful Pool Topics",
    description: "Learn about pool maintenance, chemical balance, energy efficiency, and more",
    count: 8,
    slug: "helpful-topics",
  },
];

const featuredPosts = [
  {
    title: "April 2022 - All the Bells and Whistles",
    excerpt: "A stunning custom pool with spa, water features, and more. Includes bonus construction photos showing the entire build process.",
    category: "Pool Showcase",
    date: "April 21, 2022",
  },
  {
    title: "July 2018 - Amazing Vanishing Edge",
    excerpt: "Beautiful vanishing edge pool with breathtaking views and modern design elements.",
    category: "Pool Showcase",
    date: "July 2018",
  },
  {
    title: "Building a Pool in Small Backyards",
    excerpt: "Don't let limited space stop your pool dreams! Learn how we maximize small backyards to create stunning pools.",
    category: "Helpful Pool Topics",
    date: "2015",
  },
  {
    title: "Chlorine 101",
    excerpt: "Everything you need to know about pool chlorine, from types to proper dosing and safety tips.",
    category: "Helpful Pool Topics",
    date: "2014",
  },
];

export default function Blog() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Pool Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pool showcases, customer testimonials, and helpful pool tips from our 60+ years of experience
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-gray-500">{category.count} articles</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Pool Story?</h2>
            <p className="text-xl mb-8">
              Let&apos;s build something amazing together. Schedule your free consultation today!
            </p>
            <Link
              href="/schedule-a-consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
