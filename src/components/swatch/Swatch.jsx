/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../Button";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Swatch = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Swatch";
    const favicon = document.querySelector("link[rel~='icon']");
    const defaultIcon = favicon.href;
    favicon.href = "/images/swatch/swatch-icon.png";

    return () => {
      favicon.href = defaultIcon;
      document.title = "Spencer Dearman - Portfolio";
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.8 } });
    
    tl.from('.hero-center', { opacity: 100 })
      .from('.hero-inner-left', { xPercent: -25, opacity: 100 }, '<')
      .from('.hero-inner-right', { xPercent: -75, opacity: 100 }, '<')
      .from('.hero-outer-left', { xPercent: 0, opacity: 100 }, '<')
      .from('.hero-outer-right', { xPercent: -100, opacity: 100 }, '<');
  }, { scope: containerRef });

  return (
    <section id="explore" className="section min-h-screen">
      <div className="container mx-auto px-4 pt-10 pb-16">
        
        {/* Header Section */}
        <div className="mb-24 text-center mt-16 md:mt-8">
           <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mb-4">Swatch</h2>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
             Color Inspiration.<br />Redefined.
           </h1>

           <div className="flex justify-center md:mb-8">
             <ButtonPrimary 
               href="#"
               label="Coming Soon"
               target="_blank"
             />
           </div>

           {/* Hero Composition */}
           <div ref={containerRef} className="relative w-full h-[300px] md:h-[500px] flex justify-center items-end mb-16 md:mb-16 overflow-visible">
              
              {/* Outer Left (4) */}
              <div className="hero-outer-left absolute bottom-0 left-1/2 -translate-x-1/2 z-0 -ml-[100px] md:-ml-[300px] mb-8 md:mb-12">
                 <img 
                   src="/images/swatch/swatch-icon.png" 
                   alt="Swatch Visuals" 
                   className="w-[100px] md:w-[210px] min-w-[100px] md:min-w-[210px] h-auto object-cover rounded-[24px] shadow-2xl"
                 />
              </div>

              {/* Center (1) */}
              <div className="hero-center relative z-20 mb-2 md:mb-4">
                 <img 
                   src="/images/swatch/swatch-icon.png" 
                   alt="Swatch Hero" 
                   className="w-[116px] md:w-[240px] h-auto md:rounded-[40px] shadow-2xl"
                 />
              </div>

              {/* Outer Right (5) */}
              <div className="hero-outer-right absolute bottom-0 left-1/2 -translate-x-1/2 z-0 ml-[100px] md:ml-[300px] mb-8 md:mb-12">
                 <img 
                   src="/images/swatch/swatch-icon.png" 
                   alt="Swatch Designs" 
                   className="w-[100px] md:w-[210px] min-w-[100px] md:min-w-[210px] h-auto object-cover rounded-[24px] shadow-2xl"
                 />
              </div>

           </div>
        </div>

        <div className="">
          
          {/* Tile 1: The Core Value Prop */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-0 md:min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full md:items-center">
                <div className="px-8 pb-8 pt-0 md:p-12 order-2 md:order-1 flex flex-col md:justify-center items-center text-center md:items-start md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 text-zinc-900">Experience Color.</h3>
                  <p className="about-content text-base md:text-lg">
                     A professional-grade color tool for designers and developers. Capture, organize, and share vibrant palettes with ease.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px] order-1 md:order-2 flex items-center justify-center p-8">
                   <img 
                     src="/images/swatch/swatch-icon.png" 
                     alt="Color Palettes" 
                     className="w-full max-w-[300px] h-auto rounded-[30px] shadow-lg"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* Tile 2: Dynamic Palettes */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-0 md:min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full md:items-center">
                <div className="relative h-full min-h-[300px] flex items-center justify-center p-8">
                   <div className="w-full max-w-[300px] aspect-square rounded-[40px] bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-pulse"></div>
                </div>
                <div className="px-8 pb-8 pt-0 md:p-12 flex flex-col md:justify-center items-center text-center md:items-start md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 text-zinc-900">Infinite Variations.</h3>
                  <p className="about-content text-base md:text-lg">
                     Generate complex gradients and color schemes dynamically. Swatch understands the math of beauty, so you don't have to.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-24 pt-8 pb-8 border-t border-gray-200 flex justify-center gap-8">
        <Link to="/" className="hover:text-zinc-900 transition-colors">Portfolio</Link>
        <Link to="/swatch/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
      </footer>
    </section>
  );
};

export default Swatch;
