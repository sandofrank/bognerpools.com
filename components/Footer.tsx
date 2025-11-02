'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Brian",
    location: "Riverside",
    quote: "Through the entire process, bidding, design, contract signing, construction, payment, and service, Bogner has been responsive, professional, honest, and accountable. Thank You.",
  },
  {
    name: "Donna",
    location: "Riverside",
    quote: "What I appreciated the most from Bogner Pools is that you simply did what you said you'd do, when you said you'd do it.",
  },
  {
    name: "Branden",
    location: "Yucaipa",
    quote: "Everything worked out well. I always knew what was going on and you were always asking for my input to ensure we got exactly what we wanted. This was a great experience.",
  },
  {
    name: "Bill",
    location: "Riverside",
    quote: "It does not get any better! Thank you so much for making our dream come true.",
  },
  {
    name: "Jackie",
    location: "Riverside",
    quote: "I must say, we have never had such excellent service. You're the best!",
  },
  {
    name: "Sandy",
    location: "Riverside",
    quote: "The dedication from the Bogner family is second to none. I never had one ounce of worry. Everything is perfect!",
  },
  {
    name: "Darrel and Marie",
    location: "Redlands",
    quote: "Professional service from start to finish. Our pool exceeded our expectations and the whole process was smooth.",
  },
  {
    name: "Florence",
    location: "San Bernardino",
    quote: "Excellent workmanship and attention to detail. Bogner Pools delivered exactly what they promised.",
  },
  {
    name: "Jim",
    location: "Moreno Valley",
    quote: "Quality construction and fair pricing. We couldn't be happier with our new pool!",
  },
  {
    name: "Linda",
    location: "Riverside",
    quote: "From consultation to completion, the Bogner team was professional and courteous. Our backyard is now an oasis!",
  },
];

export default function Footer() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      {/* Testimonial Carousel */}
      <div className="bg-blue-50 py-5 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700 italic mb-2 leading-relaxed">
              &quot;{testimonials[currentTestimonial].quote}&quot;
            </p>
            <p className="text-xs text-gray-600">
              — {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
            </p>
            {/* Dots indicator */}
            <div className="flex justify-center gap-1.5 mt-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417717942376-MCD17NTYX6ZBJIPC2BN0/logo.png"
            alt="Bogner Pools"
            width={200}
            height={62}
            className="h-12 w-auto mx-auto brightness-0 invert"
          />
          <p className="text-blue-400 font-semibold mt-3 text-lg">Affordable Excellence</p>
          <p className="text-gray-400 text-sm mt-1">Building Quality Pools Since 1959</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center md:text-left text-sm">
          {/* Contact Info */}
          <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-base font-bold mb-3">Contact Us</h3>
            <p className="mb-2">Paul Bogner Pools Inc.</p>
            <address className="not-italic">
              5045 Van Buren Blvd<br />
              Riverside, CA, 92503
            </address>
            <p className="mt-3">
              <a href="tel:9516885543" className="hover:text-blue-400">
                (951) 688-5543
              </a>
            </p>
            <p className="mt-4 text-xs text-gray-400">
              License #C53 275843<br />
              <a
                href="https://www.bbb.org/us/ca/riverside/profile/pool-contractors/bogner-pools-1126-2174"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline"
              >
                A+ BBB Rating
              </a>
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-base font-bold mb-3">Business Hours</h3>
            <p>Monday - Friday</p>
            <p>8:00 AM - 4:30 PM</p>
            <p className="mt-2 text-gray-400 text-xs">Closed Saturday & Sunday</p>
          </div>

          {/* Social Media & Service Area */}
          <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-base font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a
                href="https://www.facebook.com/BognerPools/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="960 645 50 52" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1008.67,648.7H966.33a2.63,2.63,0,0,0-2.63,2.63v42.34a2.63,2.63,0,0,0,2.63,2.63h22.79V677.87h-6.2v-7.19h6.2v-5.29c0-6.15,3.76-9.5,9.24-9.5a53.46,53.46,0,0,1,5.55.28v6.43h-3.81c-3,0-3.56,1.42-3.56,3.5v4.58h7.12l-.93,7.19h-6.19V696.3h12.13a2.63,2.63,0,0,0,2.63-2.63V651.33A2.63,2.63,0,0,0,1008.67,648.7Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bognerpools/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="645 750 55 55" xmlns="http://www.w3.org/2000/svg">
                  <path d="M672.5,758c6.35,0,7.11,0,9.62.14a12.93,12.93,0,0,1,4.42.82,7.91,7.91,0,0,1,4.51,4.51,12.93,12.93,0,0,1,.82,4.42c.12,2.51.14,3.27.14,9.62s0,7.11-.14,9.62a12.93,12.93,0,0,1-.82,4.42,7.91,7.91,0,0,1-4.51,4.51,12.93,12.93,0,0,1-4.42.82c-2.51.12-3.26.14-9.62.14s-7.11,0-9.62-.14a12.93,12.93,0,0,1-4.42-.82,7.91,7.91,0,0,1-4.51-4.51,12.93,12.93,0,0,1-.82-4.42c-.12-2.51-.14-3.27-.14-9.62s0-7.11.14-9.62a12.93,12.93,0,0,1,.82-4.42,7.91,7.91,0,0,1,4.51-4.51,12.93,12.93,0,0,1,4.42-.82c2.51-.12,3.27-.14,9.62-.14m0-4.29c-6.46,0-7.27,0-9.81.14a17.49,17.49,0,0,0-5.78,1.11,12.1,12.1,0,0,0-7,7,17.49,17.49,0,0,0-1.11,5.78c-.11,2.54-.14,3.35-.14,9.81s0,7.27.14,9.81a17.49,17.49,0,0,0,1.11,5.78,12.1,12.1,0,0,0,7,7,17.49,17.49,0,0,0,5.78,1.11c2.54.11,3.35.14,9.81.14s7.27,0,9.81-.14a17.49,17.49,0,0,0,5.78-1.11,12.1,12.1,0,0,0,7-7,17.49,17.49,0,0,0,1.11-5.78c.11-2.54.14-3.35.14-9.81s0-7.27-.14-9.81a17.49,17.49,0,0,0-1.11-5.78,12.1,12.1,0,0,0-7-7,17.49,17.49,0,0,0-5.78-1.11c-2.54-.11-3.35-.14-9.81-.14Z"/>
                  <path d="M672.5,765.28a12.22,12.22,0,1,0,12.22,12.22A12.22,12.22,0,0,0,672.5,765.28Zm0,20.15a7.93,7.93,0,1,1,7.93-7.93A7.93,7.93,0,0,1,672.5,785.43Z"/>
                  <circle cx="685.2" cy="764.8" r="2.86"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/bogner-pools-riverside-2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors flex items-center justify-center"
                aria-label="Yelp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="965 855 45 55" xmlns="http://www.w3.org/2000/svg">
                  <path d="M970.29,881.62c-.78,1.23-1.1,5.13-.83,7.73a6.17,6.17,0,0,0,.47,2,1.67,1.67,0,0,0,1.42,1c.38,0,.62,0,7.76-2.34l3.19-1a1.93,1.93,0,0,0,1.38-1.86,2,2,0,0,0-1.25-2.1l-2.25-.92c-7.68-3.16-8-3.29-8.41-3.29A1.63,1.63,0,0,0,970.29,881.62Z"/>
                  <path d="M987.46,905.21c.13-.36.14-.6.16-8.11,0,0,0-3.32,0-3.35a2,2,0,0,0-1.34-1.89,2.07,2.07,0,0,0-2.38.54s-1.56,1.86-1.57,1.86c-5.38,6.32-5.6,6.61-5.73,7a1.38,1.38,0,0,0-.09.69,1.82,1.82,0,0,0,.43,1c1.25,1.48,7.23,3.68,9.14,3.36A1.68,1.68,0,0,0,987.46,905.21Z"/>
                  <path d="M999.6,902.6c1.8-.72,5.74-5.72,6-7.65a1.68,1.68,0,0,0-.57-1.62c-.31-.22-.54-.31-7.68-2.65l-3.17-1.06a1.93,1.93,0,0,0-2.2.7,2,2,0,0,0-.22,2.44l1.26,2c4.24,6.89,4.57,7.37,4.87,7.61a1.65,1.65,0,0,0,1.7.18Z"/>
                  <path d="M995.91,884.88c8.12-2,8.43-2.07,8.75-2.28a1.68,1.68,0,0,0,.7-1.56V881c-.21-2-3.71-7.18-5.43-8a1.68,1.68,0,0,0-1.72.07c-.32.2-.54.51-4.89,6.45,0,0-2,2.68-2,2.71a1.93,1.93,0,0,0,0,2.3,2.07,2.07,0,0,0,2.23,1l0,.06C993.89,885.36,994.61,885.19,995.91,884.88Z"/>
                  <path d="M987.76,878.18h0c-.14-3.22-1.1-17.54-1.22-18.2a1.7,1.7,0,0,0-1.31-1.2c-2.07-.52-10,1.7-11.45,3.21a1.74,1.74,0,0,0-.51,1.64c.23.47,10,15.91,10,15.91,1.45,2.35,2.64,2,3,1.86S987.89,880.92,987.76,878.18Z"/>
                </svg>
              </a>
              <a
                href="https://share.google/jLUF03EfXNBaNPk5w"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 p-3 rounded-full transition-colors flex items-center justify-center"
                aria-label="Google Reviews"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
            <div className="text-xs mt-4 pt-4 border-t border-gray-600">
              <p className="font-semibold text-blue-400 mb-1">Service Area</p>
              <p className="text-gray-300">Proudly serving Riverside & the Inland Empire</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paul Bogner Pools Inc. All rights reserved.</p>
          <p className="mt-2 text-sm">Building custom swimming pools since 1959</p>
          <p className="mt-3 text-xs">
            <a href="mailto:construction@bognerpools.com" className="text-gray-400 hover:text-blue-400 underline">
              Pool Owner Support
            </a>
            {' · '}
            <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
