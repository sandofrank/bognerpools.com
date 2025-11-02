# Bogner Pools Website

A modern Next.js website for Paul Bogner Pools, a pool construction company serving Riverside and the Inland Empire since 1959.

## Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Full navigation system with dropdown menus
- ✅ Gallery page with pool showcase images
- ✅ Customer testimonials on homepage
- ✅ Informational pages (Pool Shopping Tips, Go Green, Financing)
- ✅ Support pages for pool owners
- ✅ Contact form for scheduling consultations
- ✅ Blog listing page
- ✅ Mobile-friendly navigation

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
│   ├── lenders.ts        # Financing lender information
│   └── testimonials.ts   # Customer testimonials
├── types/                # TypeScript type definitions
│   └── index.ts          # Shared types and interfaces
└── archive/              # Original site files & unused assets (gitignored)

```

## Content

All content has been extracted from the original Squarespace website and modernized. The `archive/` folder contains the original site files for reference and is excluded from git via `.gitignore`.

## Key Pages

- **Homepage** - Hero section, services, testimonials, call-to-action
- **Gallery** - Showcase of completed pool projects
- **Pool Shopping Tips** - Guide for selecting a pool contractor
- **Go Green** - Energy-efficient equipment and rebates
- **Financing** - Pool financing options and lenders
- **Schedule a Consultation** - Contact form
- **Blog** - Pool showcases, testimonials, and tips

## Contact Information

- **Phone:** (951) 688-5543
- **Email:** sales@bognerpools.com
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

- The site uses the Next.js App Router
- Images are loaded from the original Squarespace CDN
- The navigation includes dropdown menus for Info and Support sections
- Forms currently use mailto links (can be upgraded to a backend service)
- All pages are server-rendered for optimal SEO

## Future Enhancements

- Add individual blog post pages
- Implement backend API for form submissions
- Add more support pages with detailed instructions
- Create admin panel for content management
- Integrate with Google Analytics
- Add image optimization/local hosting

## License

© 2024 Paul Bogner Pools Inc. All rights reserved.
