import React from "react";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center pt-12 md:pt-0"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/30 mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-semibold text-primary tracking-wider">200,000+ families trust Olive</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Know what's really in your food
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
              Scan any product barcode or ingredient list. Instantly get expert-backed insights about harmful additives, seed oils, and processing levels.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#download"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Apple className="w-5 h-5" />
                <span>Download for iOS</span>
              </a>
              <a
                href="#features"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-100 text-primary rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                <Play className="w-5 h-5" />
                <span>See How It Works</span>
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-white">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-1">4.9/5 from 10k+ reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Mockup Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                  <img
                    src="/images/app-mockup.png"
                    alt="Olive App Mockup"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-8 bottom-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Health Score</p>
                    <p className="text-sm font-bold text-primary">Excellent Quality</p>
                  </div>
                </div>
              </motion.div>

              {/* Mascot */}
              <motion.img 
                src="/images/mascot.png" 
                alt="Olive Mascot" 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-40 h-40 z-0"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 lg:hidden flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <img
                src="/images/app-mockup.png"
                alt="Olive App Mockup"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
