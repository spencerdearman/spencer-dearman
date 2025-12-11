import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-4 pt-20 sm:pt-28 mb-0 relative z-10">
      
      <div className="px-4 sm:px-12 py-4 md:p-2 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            relative overflow-hidden 
            w-full
            min-h-[500px]
            bg-apple-gray
            rounded-[40px] 
            p-8 md:p-16  /* Increased padding for a more spacious look */
            flex flex-col md:flex-row 
            items-center justify-center /* Centers content vertically */
            gap-8 md:gap-16
          "
        >
          
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-white shadow-lg bg-gray-200">
               <img 
                 src="/images/spencer-dearman.png" 
                 alt="Spencer Dearman"
                 className="w-full h-full object-cover" 
               />
            </div>
          </div>

          <div className="flex-grow text-center md:text-left space-y-6">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold text-slate-900 tracking-tight">
                Spencer Dearman
              </h1>
              <p className="text-lg  md:pl-[4px] md:text-2xl text-slate-500 font-medium mt-2">
                Incoming Google Software Engineer
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-8 text-slate-600 leading-relaxed max-w-3xl text-md sm:text-lg">
              <p>
                Hi! I&apos;m a fourth-year student pursuing a joint BS/MS in Computer Science with a specialization in Computer Systems at the University of Chicago. 
                I am passionate about <span className="font-semibold text-slate-800">low-level programming</span>, <span className="font-semibold text-slate-800">operating systems</span>, and <span className="font-semibold text-slate-800">mobile development</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;