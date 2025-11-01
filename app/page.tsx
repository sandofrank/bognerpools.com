'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// Note: metadata export doesn't work in 'use client' components
// Metadata is handled by root layout.tsx for this page

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417569483653-NW9PSU94CW2CPDB76NJE/Casas-30_2.jpg"
            alt="Beautiful custom swimming pool"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Animated water ripple background */}
        <div className="absolute inset-0 opacity-10 z-[1]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            animation: 'ripple 15s ease-in-out infinite',
          }}></div>
        </div>

        {/* Wave shapes */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <svg
            className="w-full h-24 md:h-32"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Bottom wave - deep blue */}
            <path
              d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
              fill="rgba(29, 78, 216, 0.3)"
            />
            {/* Middle wave - medium blue */}
            <path
              d="M0,80 C320,48 640,48 960,80 C1120,96 1280,96 1440,80 L1440,120 L0,120 Z"
              fill="rgba(37, 99, 235, 0.5)"
            />
            {/* Top wave - bright blue */}
            <path
              d="M0,96 C240,64 480,64 720,96 C960,112 1200,112 1440,96 L1440,120 L0,120 Z"
              fill="rgba(59, 130, 246, 0.7)"
              className="drop-shadow-lg"
            />
          </svg>
        </div>

        {/* Floating water droplets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-32 left-[25%] w-3 h-3 bg-white/20 rounded-full animate-float-delay-1"></div>
          <div className="absolute top-16 right-[15%] w-2 h-2 bg-white/25 rounded-full animate-float-delay-2"></div>
          <div className="absolute top-28 right-[30%] w-2.5 h-2.5 bg-white/20 rounded-full animate-float-delay-3"></div>
          <div className="absolute top-24 left-[60%] w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Pool Builder Since 1959</h1>
          <p className="text-3xl md:text-4xl mb-8 drop-shadow-lg">Affordable Excellence</p>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            Building custom swimming pools near you for over 60 years.
            Serving Riverside and the Inland Empire with quality workmanship and affordable prices.
          </p>
          <Link
            href="/schedule-a-consultation"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition inline-block shadow-xl hover:shadow-2xl"
          >
            Schedule a Free In-Home Consultation
          </Link>
        </div>

        <style jsx>{`
          @keyframes ripple {
            0%, 100% {
              transform: scale(1) translateY(0);
            }
            50% {
              transform: scale(1.05) translateY(-10px);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              transform: translateY(-100px) translateX(20px);
              opacity: 0.6;
            }
            90% {
              opacity: 0.2;
            }
          }

          :global(.animate-float) {
            animation: float 6s ease-in-out infinite;
          }

          :global(.animate-float-delay-1) {
            animation: float 7s ease-in-out 1s infinite;
          }

          :global(.animate-float-delay-2) {
            animation: float 8s ease-in-out 2s infinite;
          }

          :global(.animate-float-delay-3) {
            animation: float 6.5s ease-in-out 1.5s infinite;
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-8">
                <h3 className="text-2xl font-bold text-center">Why Families Trust Bogner Pools</h3>
              </div>
              <div className="grid md:grid-cols-4 divide-x divide-gray-200">
                {/* Stat 1 */}
                <div className="p-8 text-center bg-gradient-to-b from-white to-gray-50">
                  <div className="text-5xl font-bold text-blue-600 mb-3">60+</div>
                  <p className="text-gray-700 font-semibold text-sm">Years Building Pools</p>
                  <p className="text-gray-500 text-xs mt-2">Since 1959</p>
                </div>

                {/* Stat 2 */}
                <div className="p-8 text-center bg-gradient-to-b from-white to-gray-50">
                  <div className="text-5xl font-bold text-blue-600 mb-3">3</div>
                  <p className="text-gray-700 font-semibold text-sm">Family Generations</p>
                  <p className="text-gray-500 text-xs mt-2">Still family-owned</p>
                </div>

                {/* Stat 3 */}
                <div className="p-8 text-center bg-gradient-to-b from-white to-gray-50">
                  <div className="text-5xl font-bold text-blue-600 mb-3">12-16</div>
                  <p className="text-gray-700 font-semibold text-sm">Week Completion</p>
                  <p className="text-gray-500 text-xs mt-2">Average timeline</p>
                </div>

                {/* Stat 4 */}
                <div className="p-8 text-center bg-gradient-to-b from-white to-gray-50">
                  <div className="text-5xl font-bold text-blue-600 mb-3">A+</div>
                  <p className="text-gray-700 font-semibold text-sm">BBB Rating</p>
                  <p className="text-gray-500 text-xs mt-2">Verified quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bogner Advantage */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">The Bogner Advantage</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Building custom pools and spas since 1959</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">No upfront payment required</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Automatic unconditional lien releases</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Consistent on-site project supervision</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Single-contract coverage for all work</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Secured and unsecured financing options</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">12–16 week average project completion</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Free, detailed itemized estimates</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">CAD-designed professional pool plans</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Locally owned, family-operated business</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Skilled and experienced estimators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Services */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Do</h2>

          {/* New Pool Construction - Primary Service */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-white/20 backdrop-blur rounded-full w-24 h-24 flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">New Pool Construction</h3>
              <p className="text-blue-50 text-lg md:text-xl max-w-3xl mx-auto">
                Our specialty is building custom in-ground swimming pools designed and built to your exact specifications. Complete projects include pools, spas, water features, decking, and landscaping.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">Fast Timeline</p>
                    <p className="text-blue-100 text-sm">12-16 week average completion</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">Professional Plans</p>
                    <p className="text-blue-100 text-sm">CAD-designed drawings</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">Free Estimates</p>
                    <p className="text-blue-100 text-sm">Detailed itemized quotes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pool Remodeling - Secondary Service */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Pool Remodeling</h3>
                <p className="text-gray-700">
                  Transform your aging pool with modern finishes, new tile, updated equipment, and contemporary design features.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-12 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <svg className="w-8 h-8 mb-4 text-teal-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-sm leading-relaxed">
                Through the entire process, bidding, design, construction, payment, and service, Bogner has been responsive, professional, honest, and accountable.
              </p>
              <p className="font-bold">— Brian, Riverside</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <svg className="w-8 h-8 mb-4 text-teal-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-sm leading-relaxed">
                What I appreciated the most from Bogner Pools is that you simply did what you said you'd do, when you said you'd do it.
              </p>
              <p className="font-bold">— Donna, Riverside</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <svg className="w-8 h-8 mb-4 text-teal-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-sm leading-relaxed">
                I must say, we have never had such excellent service. You're the best!
              </p>
              <p className="font-bold">— Jackie, Riverside</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <svg className="w-8 h-8 mb-4 text-teal-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-sm leading-relaxed">
                The dedication from the Bogner family is second to none. I never had one ounce of worry. Everything is perfect!
              </p>
              <p className="font-bold">— Sandy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Simple and Clear */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 60%)'
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free in-home consultation today or visit our showroom to explore your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/schedule-a-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:9516885543"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
            >
              Call (951) 688-5543
            </a>
            <Link
              href="/gallery"
              className="text-white hover:text-blue-200 font-semibold text-lg underline"
            >
              View Gallery
            </Link>
          </div>

          {/* Credentials */}
          <div className="pt-8 border-t border-white/30">
            <p className="text-blue-100 mb-2">
              <strong>Lic.# C53 275843</strong> • <strong>A+ BBB Rating</strong>
            </p>
            <p className="text-sm text-blue-200">
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=275843"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CSLB License
              </a>
              {' '}•{' '}
              <a
                href="https://www.bbb.org/search?find_country=USA&find_loc=Los%20Angeles%2C%20CA&find_text=bogner%20pools&page=1&touched=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                BBB Profile
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
