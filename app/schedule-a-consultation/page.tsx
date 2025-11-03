import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';
import { SEO_DEFAULTS, BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Schedule Free Consultation | In-Home Pool Design',
  description: `Schedule a free, no-obligation in-home consultation with Bogner Pools. Get a detailed itemized bid and CAD design for your custom pool. Call ${BUSINESS_INFO.phone} or fill out our form.`,
  keywords: ['pool consultation', 'free pool estimate', 'pool design', 'in-home consultation', 'Riverside pool builder'],
  openGraph: {
    title: 'Schedule Free Consultation | Bogner Pools',
    description: 'Get a free, no-obligation in-home consultation and detailed itemized bid for your custom pool.',
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Schedule Pool Consultation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Free Consultation | Bogner Pools',
    description: 'Get a free in-home consultation and detailed bid for your custom pool.',
    images: [SEO_DEFAULTS.ogImage],
  },
};

export default function ScheduleConsultation() {

  return (
    <div>
      <PageHeader
        title="Schedule a Free In-Home Consultation"
        description="Get started with a no-obligation visit to your property. We'll assess your space, discuss your vision, and provide a detailed itemized bid."
        variant="blue"
        backgroundImage="/images/projects/bells-19.jpg"
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              With over 60 years of experience building custom pools in Riverside and the Inland Empire,
              we&apos;re ready to bring your vision to life. Fill out the form or give us a call today!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:9516885543" className="text-blue-600 hover:underline text-lg">
                    (951) 688-5543
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <address className="not-italic text-gray-700">
                    5045 Van Buren Blvd<br />
                    Riverside, CA 92503
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:30 PM</p>
                  <p className="text-gray-600 text-sm">Closed Saturday & Sunday</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Get Directions</h3>
                  <a
                    href="https://maps.google.com/?q=5045+Van+Buren+Blvd+Riverside+CA+92503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    From I-215 or SR-91, take Van Buren Blvd
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="font-bold text-lg mb-3">What to Expect with Your In-Home Consultation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Free, no-obligation visit to your property
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Site assessment and measurements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Discussion of your vision and requirements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Detailed itemized bid
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Precise CAD design drawings
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="font-bold text-lg mb-3">Why Choose Bogner Pools?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>60+ years</strong> of pool building experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Family-owned</strong> and operated since 1959</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Quality craftsmanship</strong> at affordable prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Licensed & insured</strong> (Lic.# C53 275843)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Local experts</strong> serving Riverside & Inland Empire</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded">
              <h3 className="font-bold text-lg mb-3">Our Process</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</span>
                  <span className="pt-0.5"><strong>Initial Consultation:</strong> We discuss your vision, needs, and budget</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</span>
                  <span className="pt-0.5"><strong>Design & Planning:</strong> Custom drawings and detailed specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</span>
                  <span className="pt-0.5"><strong>Transparent Pricing:</strong> Itemized bid with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">4</span>
                  <span className="pt-0.5"><strong>Expert Construction:</strong> Professional installation by our experienced team</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">5</span>
                  <span className="pt-0.5"><strong>Ongoing Support:</strong> Maintenance guidance and technical assistance</span>
                </li>
              </ol>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-bold text-base mb-2">Service Areas</h3>
              <p className="text-gray-700 text-sm mb-2">
                We proudly serve the Riverside and Inland Empire area, including:
              </p>
              <div className="grid grid-cols-3 gap-x-3 gap-y-1 text-sm text-gray-600">
                <div>• Riverside</div>
                <div>• Rubidoux</div>
                <div>• Norco</div>
                <div>• Jurupa Valley</div>
                <div>• Moreno Valley</div>
                <div>• Corona</div>
                <div>• Grand Terrace</div>
                <div>• Colton</div>
                <div>• Eastvale</div>
                <div>• Perris</div>
                <div>• Loma Linda</div>
                <div>• San Bernardino</div>
                <div>• Redlands</div>
                <div>• Fontana</div>
                <div>• Rialto</div>
                <div>• Lake Elsinore</div>
                <div>• Menifee</div>
                <div>• Canyon Lake</div>
                <div>• Wildomar</div>
                <div>• Murrieta</div>
                <div>• Yucaipa</div>
                <div>• Calimesa</div>
                <div>• Beaumont</div>
                <div>• Highland</div>
                <div>• Rancho Cucamonga</div>
                <div>• Ontario</div>
                <div>• Upland</div>
                <div>• Chino</div>
                <div>• Chino Hills</div>
                <div>• Hemet</div>
                <div>• Sun City</div>
                <div>• Temecula</div>
                <div>• Banning</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg shadow-lg p-2 relative" style={{
              minHeight: '1912px',
              overflow: 'hidden'
            }}>
              <div style={{
                transform: 'scale(0.85)',
                transformOrigin: 'top left',
                width: '118%',
                height: '2250px',
                position: 'relative'
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://app.smartsheet.com/b/form/4efa88fed00b48819068da20bdab6b9a"
                  title="Schedule a Consultation Form"
                  style={{
                    border: 'none',
                    display: 'block',
                    overflow: 'hidden'
                  }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
