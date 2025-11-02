# Bogner Pools Website

A modern Next.js website for Paul Bogner Pools, a pool construction company serving Riverside and the Inland Empire since 1959.

## Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Clean, streamlined navigation system
- ✅ Interactive gallery with Instagram integration
- ✅ Customer testimonials carousel in footer
- ✅ Pool financing information with trusted lenders
- ✅ Location map with detailed directions
- ✅ Online consultation scheduling form
- ✅ Comprehensive privacy policy
- ✅ Mobile-friendly responsive design
- ✅ Complete SEO optimization (metadata, sitemap, structured data)
- ✅ Security headers and accessibility features

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
bognerpools.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header, nav, footer
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap for SEO
│   ├── robots.ts          # Robots.txt configuration
│   ├── globals.css        # Global styles
│   ├── gallery/           # Pool gallery
│   ├── financing/         # Financing information
│   ├── map-to-us/         # Location & directions
│   ├── schedule-a-consultation/ # Contact form
│   └── privacy-policy/    # Privacy policy
├── components/            # Reusable components
│   ├── Header.tsx        # Top announcement bar
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Site footer
│   └── PageHeader.tsx    # Reusable page header
├── lib/                  # Utility functions and constants
│   └── constants.ts      # Business info, SEO defaults, service areas
├── data/                 # Data files
│   └── lenders.ts        # Financing lender information
├── types/                # TypeScript type definitions
│   └── index.ts          # Shared types and interfaces
└── archive/              # Original site files & unused assets (gitignored)

```

## Content

All content has been extracted from the original Squarespace website and modernized. The `archive/` folder contains the original site files for reference and is excluded from git via `.gitignore`.

## Site Pages (6 Total)

- **Homepage (/)** - Hero section, services overview, featured pools, customer testimonials carousel, and call-to-action
- **Gallery (/gallery)** - Interactive showcase of completed pool projects with Instagram integration and lightbox viewer
- **Location (/map-to-us)** - Google Maps integration, contact information, business hours, and directions
- **Financing (/financing)** - Pool financing options with 8 trusted lending partners and competitive rates information
- **Schedule a Consultation (/schedule-a-consultation)** - Embedded Smartsheet form for scheduling free in-home consultations
- **Privacy Policy (/privacy-policy)** - Comprehensive privacy policy with CCPA and GDPR compliance

## Contact Information

- **Phone:** (951) 688-5543
- **Email:** info@bognerpools.com
- **Address:** 5045 Van Buren Blvd, Riverside, CA 92503
- **License:** C53 275843
- **BBB Rating:** A+

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Next/Image for optimized images

## Development Notes

- Built with Next.js 14 App Router for modern, performant architecture
- Images loaded from Squarespace CDN (external optimized source)
- Simple 5-link navigation (Home, Gallery, Location, Financing, Schedule)
- Privacy Policy accessible via footer link
- Consultation form uses embedded Smartsheet iframe
- Mix of server and client components for optimal performance
- Complete SEO: metadata, sitemap.xml, robots.txt, structured data schemas
- Security headers configured (HSTS, CSP, X-Frame-Options, etc.)
- Accessibility compliant (alt text, aria-labels, semantic HTML)
- TypeScript for type safety throughout

## SEO & Structured Data

- **LocalBusiness** schema in root layout with full business details
- Complete metadata on all pages (title, description, OpenGraph, Twitter cards)
- Sitemap with 6 pages and proper priorities
- Robots.txt configured for optimal crawling
- All external links have proper `rel="noopener noreferrer"`

## Future Enhancements

- Integrate Google Analytics for visitor tracking
- Add local image hosting/optimization (currently using CDN)
- Implement server-side form submission (currently using Smartsheet)
- Add more pool project showcases to gallery
- Consider adding blog functionality for SEO content
- Admin panel for content management

## License

© 2024 Paul Bogner Pools Inc. All rights reserved.
