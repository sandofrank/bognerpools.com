'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417717942376-MCD17NTYX6ZBJIPC2BN0/logo.png"
                alt="Bogner Pools"
                width={200}
                height={62}
                className="h-16 w-auto"
                priority
              />
              <p className="text-xs text-gray-600 text-center mt-1">Since 1959 • Affordable Excellence</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition">
              Gallery
            </Link>

            <Link href="/map-to-us" className="text-gray-700 hover:text-blue-600 transition">
              Location
            </Link>

            <Link href="/financing" className="text-gray-700 hover:text-blue-600 transition">
              Financing
            </Link>

            <Link href="/schedule-a-consultation" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Schedule a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <Link href="/gallery" className="block py-2 text-gray-700 hover:text-blue-600">
              Gallery
            </Link>

            <Link href="/map-to-us" className="block py-2 text-gray-700 hover:text-blue-600">
              Location
            </Link>

            <Link href="/financing" className="block py-2 text-gray-700 hover:text-blue-600">
              Financing
            </Link>

            <Link href="/schedule-a-consultation" className="block py-2 text-blue-600 font-semibold hover:text-blue-700">
              Schedule a Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
