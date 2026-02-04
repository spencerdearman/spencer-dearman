/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Inlaid = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.8 } });
    
    tl.from('.hero-center', { opacity: 100 })
      .from('.hero-inner-left', { xPercent: -25, opacity: 100 }, '<')
      .from('.hero-inner-right', { xPercent: -75, opacity: 100 }, '<')
      .from('.hero-outer-left', { xPercent: 0, opacity: 100 }, '<')
      .from('.hero-outer-right', { xPercent: -75, opacity: 100 }, '<');
  }, { scope: containerRef });

  return (
    <section id="explore" className="section min-h-screen">
      <div className="container mx-auto px-4 pt-10 pb-16">
        
        {/* Header Section */}
        <div className="mb-24 text-center mt-2">
           <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Inlaid</h2>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
             Smart Storage.<br />Reimagined.
           </h1>

           <div className="flex justify-center mb-16">
             <ButtonPrimary 
               href="https://apps.apple.com/us/app/inlaid/id6758177896"
               label="Download on the App Store"
               icon="download"
               target="_blank"
             />
           </div>

           {/* Hero Composition */}
           <div ref={containerRef} className="relative w-full h-[300px] md:h-[500px] flex justify-center items-end -mb-16 md:-mb-24 mt-12 overflow-visible">
              
              {/* Outer Left (4) */}
              <div className="hero-outer-left absolute bottom-0 left-1/2 -translate-x-1/2 z-0 -ml-[190px] md:-ml-[340px] mb-8 md:mb-12">
                 <img 
                   src="/images/inlaid/inlaid-4.png" 
                   alt="Inlaid Screen 4" 
                   className="w-[140px] md:w-[240px] h-auto rounded-[24px]"
                 />
              </div>

              {/* Inner Left (2) */}
              <div className="hero-inner-left absolute bottom-0 left-1/2 -translate-x-1/2 z-10 -ml-[110px] md:-ml-[190px] mb-4 md:mb-6">
                <img 
                  src="/images/inlaid/inlaid-2.png" 
                  alt="Inlaid Screen 2" 
                  className="w-[160px] md:w-[260px] h-auto rounded-[30px]"
                />
              </div>

              {/* Center (1) */}
              <div className="hero-center relative z-20 mb-2 md:mb-4">
                 <img 
                   src="/images/inlaid/inlaid-1.png" 
                   alt="Inlaid Screen 1" 
                   className="w-[160px] md:w-[270px] h-auto rounded-[40px]"
                 />
              </div>

              {/* Inner Right (3) */}
              <div className="hero-inner-right absolute bottom-0 left-1/2 -translate-x-1/2 z-10 ml-[110px] md:ml-[190px] mb-4 md:mb-6">
                 <img 
                   src="/images/inlaid/inlaid-3.png" 
                   alt="Inlaid Screen 3" 
                   className="w-[160px] md:w-[260px] h-auto rounded-[30px]"
                 />
              </div>

              {/* Outer Right (5) */}
              <div className="hero-outer-right absolute bottom-0 left-1/2 -translate-x-1/2 z-0 ml-[190px] md:ml-[340px] mb-8 md:mb-12">
                 <img 
                   src="/images/inlaid/inlaid-5.png" 
                   alt="Inlaid Screen 5" 
                   className="w-[140px] md:w-[240px] h-auto rounded-[24px]"
                 />
              </div>

           </div>
        </div>

        <div className="">
          
          {/* Tile 1 */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                <div className="p-8 md:p-12 order-2 md:order-1 flex flex-col justify-center">
                  <h3 className="headline-2 mb-4 text-zinc-900">Organize Everything.</h3>
                  <p className="about-content text-lg">
                     Keep track of all your items with a beautiful, visual inventory. Never lose track of where you put something again.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px] order-1 md:order-2 flex items-center justify-center p-8">
                   <img 
                     src="/images/inlaid/inlaid-1.png" 
                     alt="Inlaid App Screenshot 1" 
                     className="w-full max-w-[300px] h-auto rounded-[30px]"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* Tile 2 (Reversed) */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                <div className="relative h-full min-h-[300px] flex items-center justify-center p-8">
                   <img 
                     src="/images/inlaid/inlaid-2.png" 
                     alt="Inlaid App Screenshot 2" 
                     className="w-full max-w-[300px] h-auto object-contain rounded-[30px]"
                   />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="headline-2 mb-4 text-zinc-900">Quick Scan.</h3>
                  <p className="about-content text-lg">
                     Use NFC technology to instantly bring up the contents of any box or storage bin just by tapping your phone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 3 */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                <div className="p-8 md:p-12 order-2 md:order-1 flex flex-col justify-center">
                  <h3 className="headline-2 mb-4 text-zinc-900">Dark Mode.</h3>
                  <p className="about-content text-lg">
                     Designed to look stunning in both light and dark modes, perfectly matching your system preferences.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px] order-1 md:order-2 flex items-center justify-center p-8">
                   <img 
                     src="/images/inlaid/inlaid-3.png" 
                     alt="Inlaid App Screenshot 3" 
                     className="w-full max-w-[300px] h-auto object-contain rounded-[30px]"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* Grid for smaller features */}
          <div className="grid grid-cols-1 md:grid-cols-2">
             
             {/* Small Tile 4 */}
             <div className="px-4 sm:px-12 py-4 md:p-2">
               <div className="tile-style p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-8 w-full flex justify-center">
                     <img 
                       src="/images/inlaid/inlaid-4.png" 
                       alt="Inlaid App Screenshot 4" 
                       className="w-full max-w-[240px] rounded-[24px]"
                     />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-zinc-900">Precision Finding</h3>
                  <p className="about-content text-base">
                    Locate your items with ease using advanced search and filtering.
                  </p>
               </div>
             </div>

             {/* Small Tile 5 */}
             <div className="px-4 sm:px-12 py-4 md:p-2">
               <div className="tile-style p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-8 w-full flex justify-center">
                     <img 
                       src="/images/inlaid/inlaid-5.png" 
                       alt="Inlaid App Screenshot 5" 
                       className="w-full max-w-[240px] rounded-[24px]"
                     />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-zinc-900">Smart Tags</h3>
                  <p className="about-content text-base">
                     Categorize and tag your items for effortless organization.
                  </p>
               </div>
             </div>
          </div>

        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-24 pt-8 pb-8 border-t border-gray-200 flex justify-center gap-8">
        <Link to="/" className="hover:text-zinc-900 transition-colors">Portfolio</Link>
        <Link to="/inlaid/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
      </footer>
    </section>
  );
};

export default Inlaid;
