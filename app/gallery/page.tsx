'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';

const featuredProjects = [
  {
    title: "All the Bells and Whistles",
    description: "Complete construction documentation of a luxury pool featuring every premium amenity. Follow the entire build process from excavation to completion.",
    previewImages: [
      "/images/projects/bells-19.jpg",
      "/images/projects/bells-18.jpg",
      "/images/projects/bells-20.jpg",
      "/images/projects/bells-23.jpg",
    ],
    allImages: [
      "/images/projects/bells-19.jpg",
      "/images/projects/bells-18.jpg",
      "/images/projects/bells-20.jpg",
      "/images/projects/bells-23.jpg",
      "/images/projects/bells-04.jpg",
      "/images/projects/bells-08.jpg",
      "/images/projects/bells-10.jpg",
      "/images/projects/bells-21.jpg",
      "/images/projects/bells-02.jpg",
      "/images/projects/bells-06.jpg",
      "/images/projects/bells-17.jpg",
      "/images/projects/bells-22.jpg",
      "/images/projects/bells-16.jpg",
      "/images/projects/bells-09.jpg",
      "/images/projects/bells-12.jpg",
      "/images/projects/bells-24.jpg",
      "/images/projects/bells-07.jpg",
      "/images/projects/bells-03.jpg",
      "/images/projects/bells-19.jpg",
      "/images/projects/bells-11.jpg",
      "/images/projects/bells-13.jpg",
      "/images/projects/bells-15.jpg",
      "/images/projects/bells-01.jpg",
      "/images/projects/bells-05.jpg",
      "/images/projects/bells-14.jpg",
    ],
  },
  {
    title: "Stunning Lap Pool",
    description: "A beautiful lap pool design showcasing clean lines and elegant simplicity. Perfect for fitness enthusiasts and modern aesthetics.",
    previewImages: [
      "/images/projects/lap-14.jpg",
      "/images/projects/lap-12.jpg",
      "/images/projects/lap-05.jpg",
      "/images/projects/lap-04.jpg",
    ],
    allImages: [
      "/images/projects/lap-14.jpg",
      "/images/projects/lap-12.jpg",
      "/images/projects/lap-05.jpg",
      "/images/projects/lap-04.jpg",
      "/images/projects/lap-06.jpg",
      "/images/projects/lap-02.jpg",
      "/images/projects/lap-09.jpg",
      "/images/projects/lap-08.jpg",
      "/images/projects/lap-17.jpg",
      "/images/projects/lap-07.jpg",
      "/images/projects/lap-10.jpg",
      "/images/projects/lap-13.jpg",
      "/images/projects/lap-03.jpg",
      "/images/projects/lap-16.jpg",
      "/images/projects/lap-18.jpg",
      "/images/projects/lap-01.jpg",
      "/images/projects/lap-19.jpeg",
      "/images/projects/lap-15.jpg",
      "/images/projects/lap-11.jpg",
    ],
  },
  {
    title: "Pool With a View",
    description: "A stunning hillside pool design that maximizes the breathtaking views. This extensive gallery showcases every angle of this remarkable project.",
    previewImages: [
      "/images/projects/casas-01.jpg",
      "/images/projects/casas-02.jpg",
      "/images/projects/casas-03.jpg",
      "/images/projects/casas-04.jpg",
    ],
    allImages: [
      "/images/projects/casas-01.jpg",
      "/images/projects/casas-02.jpg",
      "/images/projects/casas-03.jpg",
      "/images/projects/casas-04.jpg",
      "/images/projects/casas-05.jpg",
      "/images/projects/casas-06.jpg",
      "/images/projects/casas-07.jpg",
      "/images/projects/casas-08.jpg",
      "/images/projects/casas-09.jpg",
      "/images/projects/casas-10.jpg",
      "/images/projects/casas-11.jpg",
      "/images/projects/casas-12.jpg",
      "/images/projects/casas-13.jpg",
      "/images/projects/casas-14.jpg",
      "/images/projects/casas-15.jpg",
      "/images/projects/casas-16.jpg",
      "/images/projects/casas-17.jpg",
      "/images/projects/casas-18.jpg",
      "/images/projects/casas-19.jpg",
      "/images/projects/casas-20.jpg",
      "/images/projects/casas-21.jpg",
      "/images/projects/casas-22.jpg",
      "/images/projects/casas-23.jpg",
      "/images/projects/casas-24.jpg",
    ],
  },
  {
    title: "Compact Design",
    description: "Proof that you don't need a huge backyard to have a stunning pool. This compact design maximizes every inch of space while delivering on style and functionality.",
    previewImages: [
      "/images/projects/thorson-01.jpg",
      "/images/projects/thorson-11.jpg",
      "/images/projects/thorson-09.jpg",
      "/images/projects/thorson-03.jpg",
    ],
    allImages: [
      "/images/projects/thorson-01.jpg",
      "/images/projects/thorson-11.jpg",
      "/images/projects/thorson-09.jpg",
      "/images/projects/thorson-03.jpg",
      "/images/projects/thorson-07.jpg",
      "/images/projects/thorson-06.jpg",
      "/images/projects/thorson-05.jpg",
      "/images/projects/thorson-12.jpg",
      "/images/projects/thorson-08.jpg",
      "/images/projects/thorson-02.jpg",
      "/images/projects/thorson-10.jpg",
      "/images/projects/thorson-04.jpg",
    ],
  },
  {
    title: "Amazing Vanishing Edge",
    description: "A spectacular vanishing edge pool that creates the illusion of water extending to infinity. Modern design with stunning visual impact.",
    previewImages: [
      "/images/projects/edge-09.jpg",
      "/images/projects/edge-01.jpg",
      "/images/projects/edge-02.jpg",
      "/images/projects/edge-03.jpg",
    ],
    allImages: [
      "/images/projects/edge-09.jpg",
      "/images/projects/edge-01.jpg",
      "/images/projects/edge-02.jpg",
      "/images/projects/edge-03.jpg",
      "/images/projects/edge-04.jpg",
      "/images/projects/edge-05.jpg",
      "/images/projects/edge-06.jpg",
      "/images/projects/edge-07.jpg",
      "/images/projects/edge-08.jpg",
      "/images/projects/edge-10.jpg",
    ],
  },
  {
    title: "Elegant",
    description: "Timeless elegance meets modern convenience. This sophisticated pool design features clean lines and tasteful finishes.",
    previewImages: [
      "/images/projects/jarmon-01.jpg",
      "/images/projects/jarmon-02.jpg",
      "/images/projects/jarmon-03.jpg",
      "/images/projects/jarmon-04.jpg",
    ],
    allImages: [
      "/images/projects/jarmon-01.jpg",
      "/images/projects/jarmon-02.jpg",
      "/images/projects/jarmon-03.jpg",
      "/images/projects/jarmon-04.jpg",
      "/images/projects/jarmon-05.jpg",
      "/images/projects/jarmon-06.jpg",
    ],
  },
  {
    title: "Tasteful Stone",
    description: "Natural stone accents create a rustic yet refined atmosphere. This pool seamlessly blends with its natural surroundings.",
    previewImages: [
      "/images/projects/spink-01.jpg",
      "/images/projects/spink-02.jpg",
      "/images/projects/spink-03.jpg",
      "/images/projects/spink-04.jpg",
    ],
    allImages: [
      "/images/projects/spink-01.jpg",
      "/images/projects/spink-02.jpg",
      "/images/projects/spink-03.jpg",
      "/images/projects/spink-04.jpg",
      "/images/projects/spink-05.jpg",
    ],
  },
  {
    title: "Lazy River with Construction Photos",
    description: "An incredible lazy river installation from start to finish. This extensive gallery documents every phase of construction, showing the complexity and craftsmanship involved in creating this resort-style feature.",
    previewImages: [
      "/images/projects/lazyriv-01.jpg",
      "/images/projects/lazyriv-53.jpg",
      "/images/projects/lazyriv-03.jpg",
      "/images/projects/lazyriv-10.jpg",
    ],
    allImages: [
      "/images/projects/lazyriv-01.jpg",
      "/images/projects/lazyriv-02.jpg",
      "/images/projects/lazyriv-03.jpg",
      "/images/projects/lazyriv-04.jpg",
      "/images/projects/lazyriv-05.jpg",
      "/images/projects/lazyriv-06.jpg",
      "/images/projects/lazyriv-07.jpg",
      "/images/projects/lazyriv-08.jpg",
      "/images/projects/lazyriv-09.jpg",
      "/images/projects/lazyriv-10.jpg",
      "/images/projects/lazyriv-11.jpg",
      "/images/projects/lazyriv-12.jpg",
      "/images/projects/lazyriv-13.jpg",
      "/images/projects/lazyriv-14.jpg",
      "/images/projects/lazyriv-15.jpg",
      "/images/projects/lazyriv-16.jpg",
      "/images/projects/lazyriv-17.jpg",
      "/images/projects/lazyriv-18.jpg",
      "/images/projects/lazyriv-19.jpg",
      "/images/projects/lazyriv-20.jpg",
      "/images/projects/lazyriv-21.jpg",
      "/images/projects/lazyriv-22.jpg",
      "/images/projects/lazyriv-23.jpg",
      "/images/projects/lazyriv-53.jpg",
    ],
  },
];

const galleryImages = [
  "/images/gallery/casas-02.jpg",
  "/images/gallery/moss.jpg",
  "/images/gallery/modern-03.jpg",
  "/images/gallery/pool.jpg",
  "/images/gallery/pearl.jpg",
  "/images/gallery/wilson.jpg",
  "/images/gallery/dikinson-03.jpg",
  "/images/gallery/rimmer.jpg",
  "/images/gallery/casas-47.jpg",
  "/images/gallery/eyler.jpg",
  "/images/gallery/nicholson.jpg",
  "/images/gallery/tietz.jpg",
  "/images/gallery/soholt.jpg",
  "/images/gallery/boone.jpg",
  "/images/gallery/duro.jpg",
  "/images/gallery/casas-39.jpg",
  "/images/gallery/howard.jpg",
  "/images/gallery/koontz.jpg",
  "/images/gallery/kira.jpg",
  "/images/gallery/modern-01.jpg",
  "/images/gallery/dikinson-02.jpg",
  "/images/gallery/modern-02.jpg",
  "/images/gallery/clemens.jpg",
  "/images/gallery/rock.jpg",
];

export default function Gallery() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentReel, setCurrentReel] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [loadedIframes, setLoadedIframes] = useState<Record<number, boolean>>({});
  const instagramSectionRef = useRef<HTMLElement>(null);

  const reels = [
    'https://www.instagram.com/reel/C-achO3JH1T/embed',
    'https://www.instagram.com/reel/C8HktlWJ8A3/embed',
    'https://www.instagram.com/reel/C8p922oSHoQ/embed',
    'https://www.instagram.com/reel/CrR3C77Jl0J/embed',
    'https://www.instagram.com/reel/CrgXC7SAqk4/embed',
    'https://www.instagram.com/reel/DKNez0BBQqm/embed',
    'https://www.instagram.com/reel/DP1jMqBkU1E/embed',
    'https://www.instagram.com/reel/DP4PKYBESPA/embed',
    'https://www.instagram.com/reel/DPmGVoikVqQ/embed',
    'https://www.instagram.com/reel/DQFCkvSkeeu/embed',
    'https://www.instagram.com/reel/DQHdlMDD94n/embed',
    'https://www.instagram.com/reel/DQNIEF5EiJC/embed',
    'https://www.instagram.com/reel/DQUrOFjEqLP/embed',
    'https://www.instagram.com/reel/DQXz6RugQRx/embed',
  ];

  const reelsPerView = 4;
  const maxScroll = reels.length - reelsPerView;

  const nextReel = () => {
    setCurrentReel((prev) => Math.min(prev + 1, maxScroll));
  };

  const prevReel = () => {
    setCurrentReel((prev) => Math.max(prev - 1, 0));
  };

  // Automatically load videos when Instagram section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videosLoaded) {
            setVideosLoaded(true);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before section is visible
        threshold: 0.1,
      }
    );

    const currentRef = instagramSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [videosLoaded]);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [lightboxImage]);

  return (
    <div>
      <PageHeader
        title="Pool Gallery"
        description="Explore our collection of beautiful custom swimming pools designed and built by Bogner Pools. Each pool is a unique creation tailored to our clients' needs and vision."
        variant="blue"
        backgroundImage="/images/gallery/casas-02.jpg"
      />

      {/* Instagram Reels Carousel */}
      <section ref={instagramSectionRef} className="bg-gradient-to-b from-white to-gray-50 py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Watch on Instagram</h2>
            <p className="text-gray-600 text-sm">
              See our latest pool construction projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative px-12">
              {/* Scrollable Container */}
              <div className="overflow-hidden">
                <div
                  className="flex gap-3 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentReel * (100 / reelsPerView + 0.75)}%)`
                  }}
                >
                  {reels.map((reelUrl, index) => {
                    // Only render iframes for visible cards and one card ahead/behind for smooth scrolling
                    const shouldRenderIframe = videosLoaded && index >= currentReel - 1 && index <= currentReel + reelsPerView + 1;
                    const isIframeLoaded = loadedIframes[index];

                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 w-1/4"
                        style={{ minWidth: 'calc(25% - 9px)' }}
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200" style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                          {shouldRenderIframe && (
                            <iframe
                              src={reelUrl}
                              width="100%"
                              height="550"
                              loading="lazy"
                              className="w-full"
                              style={{
                                position: 'absolute',
                                top: '-60px',
                                border: 0,
                                overflow: 'hidden',
                                opacity: isIframeLoaded ? 1 : 0,
                                transition: 'opacity 0.3s ease-in-out'
                              }}
                              title={`Instagram reel ${index + 1}`}
                              aria-label={`Instagram reel showcasing Bogner Pools project ${index + 1}`}
                              onLoad={() => setLoadedIframes(prev => ({ ...prev, [index]: true }))}
                            />
                          )}
                          {(!shouldRenderIframe || !isIframeLoaded) && (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 gap-3">
                              <svg className="w-20 h-20 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                              {shouldRenderIframe && !isIframeLoaded && (
                                <div className="flex flex-col items-center gap-1">
                                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                                  <span className="text-xs text-gray-500">Loading...</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevReel}
                disabled={currentReel === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous reel"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextReel}
                disabled={currentReel >= maxScroll}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next reel"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Follow CTA */}
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/bognerpools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @bognerpools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Construction Projects</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
          Follow the complete journey from excavation to completion. Click any project to view the full gallery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {featuredProjects.map((project, projectIndex) => (
            <div key={projectIndex} className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
              {/* Card with Featured Image */}
              <div
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setExpandedProject(expandedProject === projectIndex ? null : projectIndex)}
              >
                {/* Featured Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={
                      project.title === "Pool With a View"
                        ? project.allImages[4]
                        : project.title === "Lazy River with Construction Photos"
                        ? project.allImages[project.allImages.length - 1]
                        : project.previewImages[0]
                    }
                    alt={`${project.title} featured image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-3">
                  <h3 className="text-base font-bold text-blue-600 mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{project.allImages.length} photos</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">
                      {expandedProject === projectIndex ? 'Click to collapse' : 'Click to view gallery'}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedProject === projectIndex ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Gallery */}
              {expandedProject === projectIndex && (
                <div className="border-t border-gray-200 p-3 bg-gray-50">
                  <p className="text-gray-700 mb-3 text-xs">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {project.allImages.map((imageUrl, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-square overflow-hidden rounded shadow-sm cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage(imageUrl);
                        }}
                      >
                        <Image
                          src={imageUrl}
                          alt={`${project.title} photo ${imgIndex + 1}`}
                          fill
                          sizes="150px"
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-4">More From Our Portfolio</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Additional highlights from pools we've built across the Inland Empire.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imageUrl, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => setLightboxImage(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={`Pool design ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Inspired by What You See?</h2>
          <p className="text-xl mb-2">
            Let&apos;s bring your dream pool to life!
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Use our online form to schedule a free in-home consultation, and we&apos;ll discuss your vision, assess your property, and provide a detailed bid.
          </p>
          <div className="space-y-4">
            <a
              href="/schedule-a-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block shadow-xl text-lg"
            >
              Schedule In-Home Consultation
            </a>
            <p className="text-sm text-blue-100">
              Want to see display pools and materials in person?<br />
              <a href="tel:9516885543" className="text-white underline hover:text-blue-200 font-semibold">Call (951) 688-5543</a> to schedule a showroom visit
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition z-10"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={lightboxImage}
              alt="Full size pool photo"
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              quality={100}
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 text-white text-sm text-center">
            Click outside image or press ESC to close
          </div>
        </div>
      )}
    </div>
  );
}
