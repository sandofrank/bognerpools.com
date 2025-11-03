'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { lenders } from '@/data/lenders';

export default function Financing() {
  return (
    <div>
      <PageHeader
        title="Pool Financing"
        description="Owning a swimming pool is easier and more affordable than ever"
        variant="teal"
        backgroundImage="/images/financing/blasneck.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Intro */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Today, Owning a Swimming Pool Can Be for Everyone!</h2>
            <p className="text-lg text-gray-700">
              It&apos;s easier and more affordable than ever. Flexible financing options with competitive interest rates
              are available to fit your budget. Please contact lenders directly for current rates.
            </p>
          </div>
        </section>

        {/* Lenders Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Trusted Lending Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {lenders.map((lender, index) => (
              <a
                key={index}
                href={lender.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center min-h-[100px]"
              >
                {lender.logo ? (
                  <div className="flex items-center justify-center h-12 w-full relative">
                    <Image
                      src={lender.logo}
                      alt={`${lender.name} logo`}
                      width={180}
                      height={48}
                      className="max-h-12 object-contain"
                      unoptimized
                    />
                  </div>
                ) : (
                  <h3 className="text-base font-bold text-gray-800 mb-2">{lender.name}</h3>
                )}
                <p className="text-blue-600 hover:underline text-xs mt-2">Visit Website →</p>
              </a>
            ))}
          </div>
        </section>

        {/* Special Contact */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">BBVA Compass Bank</h3>
            <p className="text-gray-700 mb-2">For inquiries, please email:</p>
            <a href="mailto:paula.wallace@bbvacompass.com" className="text-blue-600 hover:underline text-lg font-semibold">
              paula.wallace@bbvacompass.com
            </a>
          </div>
        </section>

        {/* Financing Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Finance Your Pool?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Great interest rates make pool ownership affordable</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
              <p className="text-gray-600">Multiple financing solutions available to fit your needs and budget</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Approval</h3>
              <p className="text-gray-600">Fast application process to get your pool project started</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Ready to Make Your Pool Dream a Reality?</h2>
            <p className="text-lg mb-2">
              Use our online form to schedule a free in-home consultation.
            </p>
            <p className="text-base mb-6 text-blue-100">
              We&apos;ll discuss your project, financing options, and provide a detailed bid.
            </p>
            <div className="space-y-3">
              <Link
                href="/schedule-a-consultation"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block shadow-lg"
              >
                Schedule In-Home Consultation
              </Link>
              <p className="text-sm text-blue-100">
                Want to visit our showroom first? <a href="tel:9516885543" className="text-white underline hover:text-blue-200 font-semibold">Call (951) 688-5543</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
