/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { motion } from 'framer-motion';
import { PiArrowUpBold, PiUser, PiEnvelopeSimple } from 'react-icons/pi';

const socialLinks = [
  {
    href: 'https://github.com/spencerdearman',
    color: 'bg-gray-900',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/spencerdearman',
    color: 'bg-[#0077b5]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/spencer_dearm/',
    color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500', 
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="white"/>
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 pt-16 pb-24 relative z-10">
      
      {/* MOBILE FIX 1: Reduced padding from 'p-8 md:p-12' to 'p-4 md:p-12'
         This gives the content more room on small screens.
      */}
      <div className="px-2 sm:px-12 py-4 md:p-2 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            relative overflow-hidden w-full
            bg-apple-gray
            rounded-[40px] 
            p-4 md:p-12
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            
            <div className="space-y-6 lg:space-y-8 lg:sticky lg:top-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Contact</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                  Reach out if you want to chat!
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ href, icon, color }, key) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-apple-gray rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col min-h-[450px] md:h-[500px]">
              
              {/* Fake Header */}
              <div className="bg-apple-secondary backdrop-blur-md border-b border-slate-200 p-3 flex flex-col items-center justify-center">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 mb-1 overflow-hidden">
                    <img src="/images/spencer-dearman.png" className="w-full h-full object-cover opacity-80" alt="Spencer" /> 
                 </div>
                 <span className="text-[10px] md:text-xs font-medium text-slate-500">Spencer</span>
                 <span className="text-[10px] md:text-xs text-slate-400">Today 4:09 PM</span>
              </div>

              {/* Chat Area */}
              <form
                action="https://getform.io/f/bpjnpkyb"
                method="POST"
                className="flex-grow flex flex-col justify-end p-4 space-y-4 bg-white"
              >
                
                {/* 1. Name Input */}
                <div className="self-end max-w-[90%] md:max-w-[85%]">
                   <div className="relative group w-full">
                     <PiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                     <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="Your Name"
                        className="w-full bg-[#007AFF] text-white placeholder:text-white/70 rounded-[30px] px-4 pl-10 py-3 outline-none shadow-sm transition-all focus:ring-2 focus:ring-blue-300"
                     />
                   </div>
                </div>

                {/* 2. Email Input */}
                <div className="self-end max-w-[90%] md:max-w-[85%]">
                   <div className="relative group w-full">
                     <PiEnvelopeSimple className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                     <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="your@email.com"
                        className="w-full bg-[#007AFF] text-white placeholder:text-white/70 rounded-[30px] px-4 pl-10 py-3 outline-none shadow-sm transition-all focus:ring-2 focus:ring-blue-300"
                     />
                   </div>
                </div>

                {/* 3. Static Bubble */}
                <div className="self-start max-w-[85%] bg-slate-200 text-slate-800 rounded-[30px] px-4 py-3 shadow-sm">
                   <p className="text-sm">Send me a message!</p>
                </div>

                {/* 4. Message Input Bar */}
                <div className="mt-2 relative w-full">
                   <input 
                     name="message" 
                     required 
                     placeholder="iMessage"
                     className="w-full bg-slate-100 border border-transparent focus:border-slate-300 rounded-full px-5 py-3 pr-12 outline-none text-slate-900 placeholder:text-slate-400 transition-all" 
                   />
                   <button 
                     type="submit" 
                     className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center text-white hover:bg-blue-600 active:scale-90 transition-transform shadow-sm"
                   >
                     <PiArrowUpBold className="w-4 h-4" />
                   </button>
                </div>
                
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;