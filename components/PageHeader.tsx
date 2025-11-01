'use client';

import Link from 'next/link';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description?: string;
  backLink?: {
    href: string;
    label: string;
  };
  variant?: 'blue' | 'cyan' | 'teal' | 'sky' | 'indigo' | 'purple' | 'violet';
  backgroundImage?: string;
}

export default function PageHeader({ title, description, backLink, variant = 'blue', backgroundImage }: PageHeaderProps) {
  const gradients = {
    blue: 'from-blue-700 via-blue-600 to-teal-700',
    cyan: 'from-blue-700 via-blue-600 to-cyan-700',
    teal: 'from-blue-700 via-blue-600 to-teal-700',
    sky: 'from-blue-700 via-blue-600 to-cyan-600',
    indigo: 'from-blue-700 via-blue-600 to-indigo-700',
    purple: 'from-blue-700 via-blue-600 to-purple-700',
    violet: 'from-blue-700 via-blue-600 to-purple-700',
  };

  return (
    <section className={`relative ${backgroundImage ? 'bg-black' : `bg-gradient-to-br ${gradients[variant]}`} text-white min-h-[320px] flex items-center mb-12 overflow-hidden`}>
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </>
      )}

      {/* Animated water ripple background */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          animation: 'ripple 15s ease-in-out infinite',
        }}></div>
      </div>

      {/* Wave shapes */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {backgroundImage ? (
            <>
              {/* Blue waves for background images */}
              <path
                d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
                fill="rgba(29, 78, 216, 0.3)"
              />
              <path
                d="M0,80 C320,48 640,48 960,80 C1120,96 1280,96 1440,80 L1440,120 L0,120 Z"
                fill="rgba(37, 99, 235, 0.5)"
              />
              <path
                d="M0,96 C240,64 480,64 720,96 C960,112 1200,112 1440,96 L1440,120 L0,120 Z"
                fill="rgba(59, 130, 246, 0.7)"
                className="drop-shadow-lg"
              />
            </>
          ) : (
            <>
              {/* White waves for gradient backgrounds */}
              <path
                d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
                fill="rgba(255,255,255,0.1)"
              />
              <path
                d="M0,80 C320,48 640,48 960,80 C1120,96 1280,96 1440,80 L1440,120 L0,120 Z"
                fill="rgba(255,255,255,0.15)"
              />
              <path
                d="M0,96 C240,64 480,64 720,96 C960,112 1200,112 1440,96 L1440,120 L0,120 Z"
                fill="white"
                className="drop-shadow-lg"
              />
            </>
          )}
        </svg>
      </div>

      {/* Floating water droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-32 left-[25%] w-3 h-3 bg-white/20 rounded-full animate-float-delay-1"></div>
        <div className="absolute top-16 right-[15%] w-2 h-2 bg-white/25 rounded-full animate-float-delay-2"></div>
        <div className="absolute top-28 right-[30%] w-2.5 h-2.5 bg-white/20 rounded-full animate-float-delay-3"></div>
        <div className="absolute top-24 left-[60%] w-2 h-2 bg-white/30 rounded-full animate-float"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {backLink && (
          <Link
            href={backLink.href}
            className="text-white/90 hover:text-white mb-4 inline-flex items-center group transition-all"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLink.label}
          </Link>
        )}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl max-w-3xl text-white/95 drop-shadow">
            {description}
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes ripple {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0.6;
          }
          90% {
            opacity: 0.2;
          }
        }

        :global(.animate-float) {
          animation: float 6s ease-in-out infinite;
        }

        :global(.animate-float-delay-1) {
          animation: float 7s ease-in-out 1s infinite;
        }

        :global(.animate-float-delay-2) {
          animation: float 8s ease-in-out 2s infinite;
        }

        :global(.animate-float-delay-3) {
          animation: float 6.5s ease-in-out 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
