// Common types used across the application

export interface Lender {
  name: string;
  logo: string;
  website: string;
  description: string;
  features: string[];
  loanTypes: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
  date?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  title?: string;
  category?: string;
}

export interface FeaturedProject {
  title: string;
  images: string[];
  description?: string;
}

export interface ServiceArea {
  city: string;
  county: string;
  zipCodes?: string[];
}

// Schema.org structured data types
export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  '@id': string;
  url: string;
  telephone: string;
  priceRange: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs?: string[];
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
}
