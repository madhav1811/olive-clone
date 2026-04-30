import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Trusted by 200,000+ Families</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-[0.95] mb-8 tracking-tighter font-display">
              Discover what's <br />
              <span className="text-accent underline decoration-primary/5">really</span> in your food.
            </h1>
            
            <p className="text-lg md:text-xl text-muted mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Instantly eliminate harmful ingredients and get expert-backed insights 
              for your family's health with the Olive Food Scanner.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Button
                type="primary"
                size="large"
                icon={<Apple className="w-5 h-5 fill-white" />}
                className="bg-primary hover:bg-primary/90 border-none rounded-2xl px-10 font-bold h-16 text-lg w-full sm:w-auto text-white shadow-xl shadow-primary/20 flex items-center gap-2"
              >
                Download for iOS
              </Button>
              <Button
                type="default"
                size="large"
                className="bg-white hover:bg-white/90 border border-primary/5 rounded-2xl px-10 font-bold h-16 text-lg w-full sm:w-auto text-primary shadow-lg shadow-black/5"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-secondary bg-slate-200 overflow-hidden ring-1 ring-primary/5 shadow-md">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-primary/60">4.9/5 from 10k+ reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Mockup Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-[500px] mx-auto group">
              {/* Avocado Mascot peeking */}
              <motion.img 
                src="/images/mascot.png" 
                alt="Mascot" 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-12 -right-8 w-32 h-32 object-contain z-20 drop-shadow-2xl"
              />
              
              <div className="absolute inset-0 bg-accent/20 rounded-[4rem] blur-3xl -rotate-6 scale-110 pointer-events-none group-hover:bg-accent/30 transition-colors duration-500" />
              <div className="relative bg-white/40 backdrop-blur-sm rounded-[3.5rem] p-4 shadow-2xl border border-white/50 overflow-hidden ring-1 ring-black/5">
                <img
                  src="/images/app-mockup.png"
                  alt="Olive App Mockup"
                  className="rounded-[2.5rem] w-full h-auto object-cover shadow-2xl"
                />
              </div>
              
              {/* Badge Overlay */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-12 bottom-20 bg-white p-4 rounded-2xl shadow-2xl border border-primary/5 flex items-center gap-4 z-10"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-black text-primary text-xl">98</div>
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Health Score</p>
                  <p className="text-sm font-bold text-primary">Excellent Quality</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
