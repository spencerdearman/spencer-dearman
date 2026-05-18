/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const Bubbles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Bubbles - visionOS";
    const favicon = document.querySelector("link[rel~='icon']");
    const defaultIcon = favicon.href;
    favicon.href = "/images/bubbles/bubbles-icon.png";

    const originalBodyBg = document.body.style.backgroundColor;
    const originalHtmlBg = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = '#000';
    document.documentElement.style.backgroundColor = '#000';

    return () => {
      favicon.href = defaultIcon;
      document.title = "Spencer Dearman - Portfolio";
      document.body.style.backgroundColor = originalBodyBg;
      document.documentElement.style.backgroundColor = originalHtmlBg;
    };
  }, []);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>

      {/* Full viewport hero — video background, centered text, GitHub button */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        >
          <source src="/images/bubbles/experience-bubbles.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-4 transition-all duration-1000 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            Bubbles
          </h1>
          <p
            className="text-xl md:text-2xl text-white font-light tracking-wide mb-10 transition-all duration-1000 ease-out delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)' }}
          >
            Built for visionOS
          </p>
          <a
            href="https://github.com/spencerdearman/bubbles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-lg font-medium hover:scale-105 transition-all duration-1000 ease-out delay-500"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            View on GitHub
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: 0.6 }}>
              <path d="M3.75 2h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V4.56L3.28 12.78a.75.75 0 0 1-1.06-1.06L10.44 3.5H4.75a.75.75 0 0 1 0-1.5z" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-between items-center px-8">
          <Link to="/" className="text-white/20 text-sm hover:text-white/60 transition-colors duration-300">
            Back to Portfolio
          </Link>
          <span className="text-white/20 text-xs">
            Filmed on Apple Vision Pro
          </span>
        </div>
      </section>
    </div>
  );
};

export default Bubbles;
