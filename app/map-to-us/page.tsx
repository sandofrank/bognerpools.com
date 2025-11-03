import PageHeader from '@/components/PageHeader';
import { SEO_DEFAULTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visit Us - Map & Directions | Bogner Pools",
  description: "Find Bogner Pools in Riverside, CA. Get directions to our showroom and office at 5045 Van Buren Blvd.",
  openGraph: {
    title: "Visit Us - Map & Directions | Bogner Pools",
    description: "Find Bogner Pools in Riverside, CA. Get directions to our showroom and office at 5045 Van Buren Blvd.",
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools showroom and office location in Riverside, CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visit Us - Map & Directions | Bogner Pools",
    description: "Find Bogner Pools in Riverside, CA. Get directions to our showroom and office at 5045 Van Buren Blvd.",
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function MapToUs() {
  return (
    <div>
      <PageHeader
        title="Get Started With Your Pool Project"
        description="Step 1: Schedule your free in-home consultation for assessment and bid. Step 2: Visit our showroom to finalize material selections with our on-site displays."
        variant="cyan"
        backgroundImage="/images/gallery/bellmeyer.jpg"
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Contact & Location Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4 bg-white p-6 rounded-lg shadow border border-gray-200 flex-grow">
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:9516885543" className="text-blue-600 hover:underline text-xl">
                    (951) 688-5543
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Call us for inquiries or to schedule</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start pt-4 border-t border-gray-200">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <address className="not-italic text-gray-700">
                    Paul Bogner Pools Inc.<br />
                    5045 Van Buren Blvd<br />
                    Riverside, CA 92503
                  </address>
                  <a
                    href="https://maps.google.com/?q=5045+Van+Buren+Blvd+Riverside+CA+92503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start pt-4 border-t border-gray-200">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:30 PM</p>
                  <p className="text-gray-600 text-sm">Closed Saturday & Sunday</p>
                  <p className="text-red-600 text-sm mt-2 font-semibold">Call ahead to schedule</p>
                </div>
              </div>

              {/* Directions */}
              <div className="flex items-start pt-4 border-t border-gray-200">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Directions</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>From I-215:</strong> Take Van Buren Blvd exit west ~2 miles</p>
                    <p><strong>From SR-91:</strong> Take Van Buren Blvd exit south ~3 miles</p>
                    <p className="text-gray-600">Between Arlington Ave and Monroe St</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8374088891895!2d-117.42742968478469!3d33.935481480641476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae1c16e7f9a5%3A0x5e8c8c0c8c0c8c0c!2s5045%20Van%20Buren%20Blvd%2C%20Riverside%2C%20CA%2092503!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Bogner Pools location"
              />
            </div>
          </div>
        </div>

        {/* Two-Step Process */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Step 1 - In-Home Consultation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-600 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">
                  STEP 1
                </div>
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-blue-900">Start With a Free In-Home Consultation</h3>
            </div>
            <p className="text-gray-800 mb-3 font-medium">
              Your first consultation should be at your property. We come to you for:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Professional assessment</strong> of your backyard space and terrain</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Detailed discussion</strong> of your specific vision and requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Accurate measurements</strong> and complete site evaluation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Detailed itemized bid</strong> for your custom pool project</span>
              </li>
            </ul>
            <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
              <p className="font-bold text-base mb-2">Ready to get started?</p>
              <a href="tel:9516885543" className="text-white underline hover:text-blue-200 text-lg font-semibold">
                Call (951) 688-5543
              </a>
              <p className="text-sm mt-1 mb-1">or</p>
              <a href="/schedule-a-consultation" className="text-white underline hover:text-blue-200 text-sm">
                Schedule your in-home consultation online
              </a>
            </div>
          </div>

          {/* Step 2 - Showroom Visit */}
          <div className="bg-green-50 border-2 border-green-600 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-xs font-bold">
                  STEP 2
                </div>
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-green-900">Visit Our Showroom for Material Selections</h3>
            </div>
            <p className="text-gray-800 mb-3 font-medium">
              After your in-home consultation, visit our showroom to make final selections:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Complete material displays</strong> - Pebble finishes, tiles, coping options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Example pools on-site</strong> - See and touch actual installations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Design samples</strong> - View photos of past projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Expert guidance</strong> - 60+ years of experience helping you choose</span>
              </li>
            </ul>
            <div className="bg-green-600 text-white p-4 rounded-lg">
              <p className="text-sm italic mb-2">
                Perfect for clients ready to finalize their pool design and material choices.
              </p>
              <p className="text-sm font-semibold">
                Please call ahead to schedule your showroom appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
