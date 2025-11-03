// Business Information Constants
export const BUSINESS_INFO = {
  name: 'Bogner Pools',
  legalName: 'Bogner Pools, Inc.',
  phone: '(951) 688-5543',
  phoneRaw: '9516885543',
  email: 'info@bognerpools.com',
  licenseNumber: 'C53 275843',
  foundedYear: 1959,

  address: {
    street: '5045 Van Buren Blvd',
    city: 'Riverside',
    state: 'CA',
    zip: '92503',
    country: 'USA',
    full: '5045 Van Buren Blvd, Riverside, CA 92503',
  },

  coordinates: {
    latitude: 33.9533,
    longitude: -117.4419,
  },

  hours: {
    monday: '8:00 AM - 4:30 PM',
    tuesday: '8:00 AM - 4:30 PM',
    wednesday: '8:00 AM - 4:30 PM',
    thursday: '8:00 AM - 4:30 PM',
    friday: '8:00 AM - 4:30 PM',
    saturday: 'Closed',
    sunday: 'Closed',
    display: 'Monday - Friday: 8:00 AM - 4:30 PM',
  },

  social: {
    facebook: 'https://www.facebook.com/bognerpools',
    instagram: 'https://www.instagram.com/bognerpools',
  },

  urls: {
    website: 'https://www.bognerpools.com',
    cslb: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=275843',
    bbb: 'https://www.bbb.org/search?find_country=USA&find_loc=Los%20Angeles%2C%20CA&find_text=bogner%20pools&page=1&touched=1',
    googleMaps: 'https://maps.google.com/?q=5045+Van+Buren+Blvd+Riverside+CA+92503',
  },
} as const;

// Service Areas
export const SERVICE_AREAS = [
  'Riverside',
  'Rubidoux',
  'Norco',
  'Jurupa Valley',
  'Moreno Valley',
  'Corona',
  'Grand Terrace',
  'Colton',
  'Eastvale',
  'Perris',
  'Loma Linda',
  'San Bernardino',
  'Redlands',
  'Fontana',
  'Rialto',
  'Lake Elsinore',
  'Menifee',
  'Canyon Lake',
  'Wildomar',
  'Murrieta',
  'Yucaipa',
  'Calimesa',
  'Beaumont',
  'Highland',
  'Rancho Cucamonga',
  'Ontario',
  'Upland',
  'Chino',
  'Chino Hills',
  'Hemet',
  'Sun City',
  'Temecula',
  'Banning',
] as const;

// SEO Defaults
export const SEO_DEFAULTS = {
  title: 'Bogner Pools | Custom Pool Builder Since 1959 | Riverside & Inland Empire',
  description: 'Family-owned pool builder serving Riverside and the Inland Empire since 1959. Quality custom swimming pools, spas, and remodeling at affordable prices. Licensed & Insured (Lic# C53 275843).',
  ogImage: 'https://www.bognerpools.com/images/hero/hero.jpg',
  twitterCard: 'summary_large_image' as const,
} as const;

// Project Timeline
export const PROJECT_TIMELINE = {
  average: '12-16 weeks',
  averageWeeks: 14,
} as const;

// Company Stats
export const COMPANY_STATS = {
  yearsInBusiness: new Date().getFullYear() - BUSINESS_INFO.foundedYear,
  generations: 3,
  bbbRating: 'A+',
} as const;
