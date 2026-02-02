/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../Button";

const Inlaid = () => {
  return (
    <section id="explore" className="section min-h-screen">
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
           <h1 className="headline-1 mb-4">Inlaid app</h1>
           <p className="about-content">
             Smart Storage & NFC
           </p>

           <div className="flex justify-center md:justify-start">
             <ButtonPrimary 
               href="https://apps.apple.com/us/app/inlaid/id6758177896"
               label="Download on the App Store"
               icon="download"
               target="_blank"
             />
           </div>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Tile 1: Screenshot 1 */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div className="tile-style aspect-[1/2] relative overflow-hidden p-4">
               <img 
                 src="/images/inlaid/inlaid-1.png" 
                 alt="Inlaid App Screenshot 1" 
                 className="w-full h-full object-contain rounded-xl"
               />
            </div>
          </div>

          {/* Tile 2: Screenshot 2 */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div className="tile-style aspect-[1/2] relative overflow-hidden p-4">
               <img 
                 src="/images/inlaid/inlaid-2.png" 
                 alt="Inlaid App Screenshot 2" 
                 className="w-full h-full object-contain rounded-xl"
               />
            </div>
          </div>

          {/* Tile 3: Screenshot 3 */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div className="tile-style aspect-[1/2] relative overflow-hidden p-4">
               <img 
                 src="/images/inlaid/inlaid-3.png" 
                 alt="Inlaid App Screenshot 3" 
                 className="w-full h-full object-contain rounded-xl"
               />
            </div>
          </div>

          {/* Wrapper for second row to ensure grid flow or just repeat the items */}
          
          {/* Tile 4: Screenshot 4 (Reusing 1 for now) */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div className="tile-style aspect-[1/2] relative overflow-hidden p-4">
               <img 
                 src="/images/inlaid/inlaid-4.png" 
                 alt="Inlaid App Screenshot 4" 
                 className="w-full h-full object-contain rounded-xl"
               />
            </div>
          </div>

          {/* Tile 5: Screenshot 5 (Reusing 2 for now) */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div className="tile-style aspect-[1/2] relative overflow-hidden p-4">
               <img 
                 src="/images/inlaid/inlaid-5.png" 
                 alt="Inlaid App Screenshot 5" 
                 className="w-full h-full object-contain rounded-xl"
               />
            </div>
          </div>

          {/* Tile 6: Screenshot 6 (Reusing 3 for now) */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div className="tile-style aspect-[1/2] relative overflow-hidden p-4">
               <img 
                 src="/images/inlaid/inlaid-6.png" 
                 alt="Inlaid App Screenshot 6" 
                 className="w-full h-full object-contain rounded-xl"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inlaid;
