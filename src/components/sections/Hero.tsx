import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              The Safest Way to <span className="text-primary">Shop for Groceries</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Use the Olive Food Scanner App to instantly eliminate harmful ingredients 
              and get expert-backed insights for your family's health.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                type="primary"
                size="large"
                className="bg-primary hover:bg-primary/90 border-none rounded-full px-10 font-bold h-14 text-lg w-full sm:w-auto text-white"
              >
                Download for iOS
              </Button>
              <div className="flex items-center gap-4 py-2 px-4 bg-white/50 rounded-full border border-border">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-accent/20 overflow-hidden">
                      <div className="w-full h-full bg-slate-200" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground/80">
                  Joined by 200,000+ families
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mockup Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-2xl -rotate-6 scale-95 pointer-events-none" />
              <div className="relative bg-white rounded-[2.5rem] p-2 shadow-2xl border border-border overflow-hidden">
                <img
                  src="/images/hero-mockup.png"
                  alt="Olive App Mockup"
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
