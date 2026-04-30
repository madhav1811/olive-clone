import React from "react";
import { motion } from "framer-motion";
import { Scan, BrainCircuit, HeartPulse, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Scan your food",
      desc: "Open the app and point your camera at any grocery barcode or ingredient list.",
      icon: <Scan className="w-8 h-8" />,
      color: "bg-accent/10 text-primary",
      borderColor: "border-accent/20"
    },
    {
      title: "Decode ingredients",
      desc: "Our AI instantly analyzes additives, seed oils, and processing levels for you.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "bg-primary/5 text-primary",
      borderColor: "border-primary/10"
    },
    {
      title: "Choose healthier",
      desc: "Get a simple score and safer alternatives to keep your family healthy and happy.",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "bg-pink-50 text-pink-600",
      borderColor: "border-pink-100"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-secondary/50 border-y border-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight font-display">
              How it Works
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">
              Olive makes it easy to understand what’s in your food in 3 simple steps.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-[20%] right-[20%] h-0.5 bg-dashed border-t-2 border-dashed border-primary/10 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 border-2 ${step.borderColor} ${step.color} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {step.icon}
              </div>
              <div className="mb-4">
                <span className="text-xs font-black text-primary/30 uppercase tracking-[0.3em]">Step 0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 font-display">{step.title}</h3>
              <p className="text-muted font-medium leading-relaxed px-4">
                {step.desc}
              </p>
              
              {i < 2 && (
                <div className="md:hidden mt-8 text-primary/10">
                  <ChevronRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 p-2 pl-6 bg-white rounded-full shadow-xl border border-primary/5 ring-1 ring-black/5">
            <span className="text-sm font-bold text-primary">Ready to start shopping safer?</span>
            <button className="bg-primary text-white text-xs font-black px-6 py-3 rounded-full hover:bg-primary/90 transition-colors uppercase tracking-widest">Get Started</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
