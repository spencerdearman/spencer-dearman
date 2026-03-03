/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../Button";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '@google/model-viewer';

gsap.registerPlugin(ScrollTrigger);

const Bubbles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Bubbles - visionOS";
    const favicon = document.querySelector("link[rel~='icon']");
    const defaultIcon = favicon.href;
    favicon.href = "/images/bubbles/bubbles-icon.png";

    return () => {
      favicon.href = defaultIcon;
      document.title = "Spencer Dearman - Portfolio";
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
    
    tl.from('.hero-content', { y: 50, opacity: 0, stagger: 0.2 })
      .from('.hero-image', { scale: 0.8, opacity: 0, duration: 2 }, "-=1");

    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section min-h-screen relative" style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
      
      {/* Full Bleed Video Background for Hero area */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[700px] z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105"
        >
          <source src="/images/bubbles/experience-bubbles.mp4" type="video/mp4" />
        </video>
        {/* Gradient mask to gracefully fade the video into the black background below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Main Content Container (relative z-10 puts it ON TOP of the video background) */}
      <div className="container mx-auto px-4 pt-10 pb-16 relative z-10">
        
        {/* Header Section (Centered over the video) */}
        <div className="h-[500px] md:h-[600px] flex flex-col justify-center items-center text-center -mt-10 mb-12">
           <div className="hero-content">
             <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4 drop-shadow-md">Bubbles</h2>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
               Built for visionOS
             </h1>
           </div>

            <div className="flex justify-center hero-content">
              <ButtonPrimary 
                href="https://github.com/spencerdearman/bubbles"
                label="View on GitHub"
                target="_blank"
                classes="btn-liquid-glass"
              />
            </div>
        </div>


        {/* Features Content */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Physics Section */}
          <div className="feature-card min-h-[500px] p-0 overflow-hidden relative group rounded-[30px]" style={{ backgroundColor: 'rgb(29, 29, 31)' }}>
            <div className="p-12 flex flex-col justify-center h-full">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Organic Physics</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Custom buoyancy and turbulence systems create light, fluttering movement that feels like real soap bubbles. They oscillate and deform as they travel through the air.
              </p>
              <div className="relative aspect-square w-full max-w-[300px] mx-auto">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="/images/bubbles/bubbles-icon.png" 
                  alt="Physics Detail" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Interaction Section */}
          <div className="feature-card min-h-[500px] p-0 overflow-hidden relative group rounded-[30px]" style={{ backgroundColor: 'rgb(29, 29, 31)' }}>
            <div className="p-12 flex flex-col justify-center h-full">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Hand Interaction</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Bat at bubbles with your hands, tap to push, or long-press to watch them pop with a beautiful shader-based disintegration effect.
              </p>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                 <img 
                   src="/images/bubbles/bubbles-1.png" 
                   alt="Hand Interaction" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </div>

          {/* Environment Section */}
          <div className="feature-card md:col-span-2 p-0 overflow-hidden relative group rounded-[30px]" style={{ backgroundColor: 'rgb(29, 29, 31)' }}>
             <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                 <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Spatial Intelligence</h3>
                 <p className="text-zinc-400 text-lg">
                   Using Scene Reconstruction, bubbles realistically bounce off your walls, furniture, and floors. They understand the boundaries of your physical space.
                 </p>
               </div>
               <div className="h-[300px] md:h-full order-1 md:order-2 relative" style={{ backgroundColor: 'rgb(44, 44, 46)' }}>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 border-2 border-zinc-600 rounded-full animate-ping opacity-20" />
                    <div className="w-1/3 h-1/3 border-2 border-zinc-500 rounded-full animate-ping delay-700 opacity-20" />
                 </div>
               </div>
             </div>
          </div>

          {/* Custom Shader Section */}
          <div className="feature-card md:col-span-2 p-0 overflow-hidden relative group rounded-[30px]" style={{ backgroundColor: 'rgb(29, 29, 31)' }}>
             <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
               <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                 <h2 className="text-xl font-semibold text-blue-400 mb-4">Visual Sophistication</h2>
                 <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Custom Iridescent Shader</h3>
                 <p className="text-zinc-400 text-lg">
                   High-quality thin-film interference shaders create realistic, shifting colors that dance across the bubble's surface. Watch as light refracts and reflects in real-time, creating an organic, mesmerizing experience that feels alive.
                 </p>
               </div>
               
               <div className="p-8 md:p-12 order-1 md:order-2 flex justify-center items-center">
                 <div className="w-full max-w-[400px] aspect-square rounded-[40px] overflow-hidden shadow-2xl relative">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src="/images/bubbles/close-bubble.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                 </div>
               </div>
             </div>
          </div>

          {/* 3D Model Viewer Section */}
          <div className="feature-card md:col-span-2 p-0 overflow-hidden relative group rounded-[30px]" style={{ backgroundColor: 'rgb(29, 29, 31)' }}>
             <div className="grid grid-cols-1 md:grid-cols-2 h-full">
               <div className="p-12 flex flex-col justify-center order-2 md:order-1">
                 <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Experience it yourself.</h3>
                 <p className="text-zinc-400 text-lg mb-8">
                   Interact with the 3D model right here in your browser. On compatible iOS devices, tap the AR button to place the iridescent bubble shader directly into your room.
                 </p>
               </div>
               <div className="bg-transparent h-[400px] md:h-[500px] min-h-[400px] relative w-full flex items-center justify-center order-1 md:order-2 overflow-hidden">
                 {/* The model-viewer component. Normally requires a src=".glb" for web rendering, but we use ios-src for AR Quick Look */}
                 <model-viewer
                   src="" /* We'd need a .glb file here for it to render in chrome/desktop */
                   ios-src="/images/bubbles/Bubble.usdz"
                   poster="/images/bubbles/bubbles-icon.png"
                   alt="A 3D model of a Bubble"
                   shadow-intensity="1"
                   camera-controls
                   auto-rotate
                   ar
                   ar-modes="webxr scene-viewer quick-look"
                   interaction-prompt="auto"
                   environment-image="neutral"
                   style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                 >
                   <div slot="poster" className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                     <div className="relative aspect-square w-full max-w-[250px] animate-pulse">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
                        <img 
                          src="/images/bubbles/bubbles-icon.png" 
                          alt="3D Bubble Model" 
                          className="relative z-10 w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        />
                     </div>
                   </div>
                   <button slot="ar-button" style={{ backgroundColor: 'white', borderRadius: '4px', border: 'none', position: 'absolute', top: '16px', right: '16px', padding: '8px 16px', fontWeight: 'bold' }}>
                       View in AR
                   </button>
                 </model-viewer>
               </div>
             </div>
          </div>

        </div>

      </div>
      
      <footer className="text-center text-zinc-500 text-sm mt-24 pt-8 pb-8 border-t border-zinc-800 flex justify-center gap-8">
        <Link to="/" className="hover:text-white transition-colors">Portfolio</Link>
      </footer>

      {/* Liquid Glass Filter Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="frosted" primitiveUnits="objectBoundingBox">
          <feImage href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAF6ESURBVHgB7b1ZsB3HeSb4ZZ1zV+wEQCykAJIASHERQNBaKRKySMkxYYVly+6x3fNgR0e4rZn2vIw7RnbMONrd0X5wKMLTT+7psf0w7ocZWz22pZ5Wz0xL1EaJ1M5NJEWR1EKJhECBK0gAF/ee+icr1//PzKpT595zsZE/ULeycquqrP+rf8uso/7lHxPhTZoqqZmzUBteRbXzOQz2fB/Y9CKgjzG7pLezoGZTI5CuR3NNugYNRjZPtyeqQKOh3g9AS/OglVnQ8rzJgz7GaAY4vQnqhT2onn8LqpevRPXSlVArM3iTpktDvEmrpmr2DIZXP43hjp+g2nISatNLGOz6AdSWFxxxE2r+lwj2beTfSQSfowuTzpUu0dsi7B52X7s9qSaf0seuXj3UQNkF9eJuvd+BwavbMfzZ1Zh55sY3gbMGehMgE5AansP8wQcxc+WPMbv/UQz3/ABULTMY6H0DAqoNwzc5aNLk0g2bGxx4mESg8Hx9JvdfuVIV8pWye5OnKn1chfRo62nQth860Nj8RgoNjx/E7A9vxtxz12H2xzegWlrEm9SP3gRIBw0WX8W8VpFmdv8AC4cewGD7s3rEliwUSEsIvWFUm71hdrJAaQBCRnN1gDFlbjMM7qAhtNuSpuuAoSJATDXl8yqzV0aiVCFPub3NG2B596NY2vM4Xm3y6hnMHr8Ocz+6GfM/uR6zJ/ZjcHoz3qQyvQmQhKq5M9h48NvYePN9mN39NNT8a5onRxoQDggOEDAA8WkPDAsKDwZyilEAB1IVCxEklOSrCA4VShQrruyxstLEgIKBxuZVRrKQBolyew17DZZHcWbv40bK4NwGzB8/gE0Pvh+Lz9yEwZmNeJMivQkQNKrTMhavehJbDn8BWw5+S/PQWc3mKxYQKxEIDVBs2gODwjG8BHHAIA+IAAySWIA4QC5BVLJTosiqXSpIEASpwfOsFPFAUU6iWCkzMOl6cA6n3/IAXnvLw9pWWcDi00ex5ZFj2KAljKIKb3R6QwNkYc/T2HLj/dj81vtQLbziVCcNjNGK5kC9r7XkcKCwEoMsUIjZGkZ6eGAgSAqb5JIEiLYGJyprVw2p8CfLU/5AWYPdF1r1SjkQeVAoBhAJFg8UpYaoq3M4df29ePX6+7Rk2Yit3zmGrY+9FwsnrsEbld5wABnMnsb2W+/BFUfuwXDTSac+jQwoiFYcEFZQ16OoPlHtDHAnLYgYSLiEoACUoF41woUDRJADRxdASiBhRrvRqGJFK1kqDx8PDgsiq reconstruction bouncing Scene use Bubbles Interaction Environment physics and hand your response interact and fluttering movement space Hand Bat swat direct tapping blow popping effects Rendering Entity-Component-System Frameworks RealityKit are all part of the visionOS app experience." x="0" y="0" width="1" height="1" result="map"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur"/>
          <feDisplacementMap in="blur" in2="map" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </section>
  );
};

export default Bubbles;
