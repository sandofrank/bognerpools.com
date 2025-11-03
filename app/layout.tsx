import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bognerpools.com'),
  title: {
    default: SEO_DEFAULTS.title,
    template: '%s | Bogner Pools',
  },
  description: SEO_DEFAULTS.description,
  keywords: [
    "pool builder",
    "swimming pools",
    "Riverside",
    "Inland Empire",
    "pool contractor",
    "pool construction",
    "custom pools",
    "pool installation",
    "pool remodeling",
    "spa builder",
    "Southern California pools",
  ],
  authors: [{ name: 'Bogner Pools' }],
  creator: 'Bogner Pools',
  publisher: 'Bogner Pools',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS_INFO.urls.website,
    siteName: BUSINESS_INFO.name,
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: 'Bogner Pools - Custom Swimming Pool Builder',
      },
    ],
  },
  twitter: {
    card: SEO_DEFAULTS.twitterCard,
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.ogImage],
  },
  alternates: {
    canonical: BUSINESS_INFO.urls.website,
  },
  verification: {
    // Add Google Search Console verification tag here when available
    // google: 'your-verification-code',
  },
};

// LocalBusiness Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BUSINESS_INFO.urls.website}/#organization`,
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  url: BUSINESS_INFO.urls.website,
  logo: '/images/logo.png',
  image: SEO_DEFAULTS.ogImage,
  description: SEO_DEFAULTS.description,
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  priceRange: '$$',
  foundingDate: BUSINESS_INFO.foundedYear.toString(),
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.zip,
    addressCountry: BUSINESS_INFO.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_INFO.coordinates.latitude,
    longitude: BUSINESS_INFO.coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:30',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Riverside',
    },
    {
      '@type': 'City',
      name: 'Inland Empire',
    },
  ],
  sameAs: [
    BUSINESS_INFO.social.facebook,
    BUSINESS_INFO.social.instagram,
    BUSINESS_INFO.urls.cslb,
    BUSINESS_INFO.urls.bbb,
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '10',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pool Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Pool Construction',
          description: 'New swimming pool design and construction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pool Remodeling',
          description: 'Pool renovation and upgrades',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Spa Construction',
          description: 'Custom spa design and installation',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
