/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";

const SwatchPrivacy = () => {
  useEffect(() => {
      document.title = "Swatch - Privacy";
      const favicon = document.querySelector("link[rel~='icon']");
      const defaultIcon = favicon.href;
      favicon.href = "/images/swatch/swatch-icon.png";
      
      return () => {
        favicon.href = defaultIcon;
        document.title = "Spencer Dearman - Portfolio";
      };
    }, []);

  return (
    <section className="section min-h-screen pt-12 pb-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Navigation */}
        <div className="mb-12">
           <Link to="/swatch" className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium inline-flex items-center gap-2 group w-fit">
             <span className="material-symbols-rounded text-[18px] leading-none -mt-px">arrow_back</span>
             <span>Back to Swatch</span>
           </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12 text-sm">Effective Date: March 1, 2026</p>
        
        <div className="space-y-12 text-zinc-600 text-base leading-relaxed">
          
          <div className="prose prose-zinc max-w-none">
            <p className="mb-6">
              This privacy policy applies to the Swatch app (hereby referred to as "Application") for mobile devices that was created by Spencer Dearman (hereby referred to as "Service Provider") as a Free service.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Information Collection and Use</h2>
            <p>Swatch does not collect any personal information. All your color data stays on your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding privacy while using the Application, please contact the Service Provider via email at <a href="mailto:dearmanspencer@gmail.com" className="text-orange-500 hover:underline">dearmanspencer@gmail.com</a>.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
};

export default SwatchPrivacy;
