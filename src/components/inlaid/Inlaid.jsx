/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../Button";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Inlaid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Inlaid";
    const favicon = document.querySelector("link[rel~='icon']");
    const defaultIcon = favicon.href;
    favicon.href = "/images/inlaid/inlaid-favicon.png";

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
           <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Inlaid</h2>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
             Smart Storage.<br />Reimagined.
           </h1>

           <div className="flex justify-center md:mb-8">
             <ButtonPrimary 
               href="https://apps.apple.com/us/app/inlaid/id6758177896"
               label="Download on the App Store"
               target="_blank"
             />
           </div>

           {/* Hero Composition */}
           <div ref={containerRef} className="relative w-full h-[300px] md:h-[500px] flex justify-center items-end mb-16 md:mb-16 overflow-visible">
              
              {/* Outer Left (4) */}
              <div className="hero-outer-left absolute bottom-0 left-1/2 -translate-x-1/2 z-0 -ml-[100px] md:-ml-[300px] mb-8 md:mb-12">
                 <img 
                   src="/images/inlaid/inlaid-4.png" 
                   alt="Inlaid CloudKit Sync" 
                   className="w-[100px] md:w-[210px] min-w-[100px] md:min-w-[210px] h-auto object-cover"
                 />
              </div>

              {/* Inner Left (2) */}
              <div className="hero-inner-left absolute bottom-0 left-1/2 -translate-x-1/2 z-10 -ml-[60px] md:-ml-[170px] mb-4 md:mb-6">
                <img 
                  src="/images/inlaid/inlaid-2.png" 
                  alt="Inlaid NFC Scan" 
                  className="w-[110px] md:w-[230px] min-w-[110px] md:min-w-[230px] h-auto object-cover"
                />
              </div>

              {/* Center (1) */}
              <div className="hero-center relative z-20 mb-2 md:mb-4">
                 <img 
                   src="/images/inlaid/inlaid-1.png" 
                   alt="Inlaid Dashboard" 
                   className="w-[116px] md:w-[240px] h-auto md:rounded-[40px]"
                 />
              </div>

              {/* Inner Right (3) */}
              <div className="hero-inner-right absolute bottom-0 left-1/2 -translate-x-1/2 z-10 ml-[60px] md:ml-[170px] mb-4 md:mb-6">
                 <img 
                   src="/images/inlaid/inlaid-8.png" 
                   alt="Inlaid Visual Search" 
                   className="w-[110px] md:w-[230px] min-w-[110px] md:min-w-[230px] h-auto object-cover"
                 />
              </div>

              {/* Outer Right (5) */}
              <div className="hero-outer-right absolute bottom-0 left-1/2 -translate-x-1/2 z-0 ml-[100px] md:ml-[300px] mb-8 md:mb-12">
                 <img 
                   src="/images/inlaid/inlaid-5.png" 
                   alt="Inlaid Settings" 
                   className="w-[100px] md:w-[210px] min-w-[100px] md:min-w-[210px] h-auto object-cover"
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
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 text-zinc-900">No need to open.</h3>
                  <p className="about-content text-base md:text-lg">
                     Create a searchable, digital twin of your physical storage. Know exactly which box holds your passport or vintage vinyl before you ever unstack them.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px] order-1 md:order-2 flex items-center justify-center p-8">
                   <img 
                     src="/images/inlaid/inlaid-1.png" 
                     alt="Digital Twin Interface" 
                     className="w-full max-w-[300px] h-auto rounded-[30px]"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* Tile 2: NFC (The Magic) */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-0 md:min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full md:items-center">
                <div className="relative h-full min-h-[300px] flex items-center justify-center p-8">
                   <div className="relative w-full max-w-[300px]">
                      {/* Bezel (Top) */}
                      <img 
                        src="/images/inlaid/bezel.png" 
                        alt="iPhone Bezel"
                        className="relative z-20 w-full h-auto pointer-events-none"
                      />
                      
                      {/* Video (Bottom/Inside) */}
                      <div className="absolute top-[2%] left-[5%] w-[90%] h-[96%] z-10 rounded-[30px] md:rounded-[40px] overflow-hidden bg-black">
                         <video 
                           src="/images/inlaid/nfc-scan.mp4"
                           className="w-full h-full object-cover"
                           autoPlay 
                           muted 
                           playsInline
                         />
                      </div>
                   </div>
                </div>
                <div className="px-8 pb-8 pt-0 md:p-12 flex flex-col md:justify-center items-center text-center md:items-start md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 text-zinc-900">Tap. Scan. Found.</h3>
                  <p className="about-content text-base md:text-lg">
                     Link physical containers to Inlaid with standard NTAG215 stickers. Just tap your iPhone to a box to instantly launch its manifest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 3: AI Visual Search (The Tech) - Swapped out "Dark Mode" */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style min-h-0 md:min-h-[400px] p-0 overflow-hidden relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full md:items-center">
                <div className="px-8 pb-8 pt-0 md:p-12 order-2 md:order-1 flex flex-col md:justify-center items-center text-center md:items-start md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight pb-1">Visual Intelligence.</h3>
                  <p className="about-content text-base md:text-lg">
                     Don't remember what you named it? Inlaid analyzes your photos so you can search for "Red Cable" or "Glass Lens" using on-device AI.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px] order-1 md:order-2 flex items-center justify-center p-8">
                   <div className="relative w-full max-w-[300px]">
                      {/* Bezel (Top) */}
                      <img 
                        src="/images/inlaid/bezel.png" 
                        alt="iPhone Bezel"
                        className="relative z-20 w-full h-auto pointer-events-none"
                      />
                      
                      {/* Video (Bottom/Inside) */}
                      <div className="absolute top-[2%] left-[5%] w-[90%] h-[96%] z-10 rounded-[30px] md:rounded-[40px] overflow-hidden bg-black">
                         <video 
                           src="/images/inlaid/intelligence-demo.mp4"
                           className="w-full h-full object-cover"
                           autoPlay 
                           muted 
                           playsInline
                         />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid for Pro Features */}
          <div className="grid grid-cols-1 md:grid-cols-2">
             
             {/* Small Tile 4: CloudKit */}
             <div className="px-4 sm:px-12 py-4 md:p-2">
               <div className="tile-style p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-8 w-full flex justify-center">
                     <img 
                       src="/images/inlaid/inlaid-7.png" 
                       alt="CloudKit Sync" 
                       className="w-full max-w-[240px] rounded-[24px]"
                     />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-zinc-900">Synced via CloudKit</h3>
                  <p className="about-content text-base">
                    Start packing on iPhone. Find it on iPad. Your inventory is encrypted and synced automatically.
                  </p>
               </div>
             </div>

             {/* Small Tile 5: NFC Writer/Spotlight */}
             <div className="px-4 sm:px-12 py-4 md:p-2">
               <div className="tile-style p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-8 w-full flex justify-center">
                     <img 
                       src="/images/inlaid/inlaid-5.png" 
                       alt="NFC Writer Suite" 
                       className="w-full max-w-[240px] rounded-[24px]"
                     />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-zinc-900">NFC Power Tools</h3>
                  <p className="about-content text-base">
                     Go beyond storage. Write custom tags to share Wi-Fi credentials, trigger HomeKit scenes, or launch deep links.
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
