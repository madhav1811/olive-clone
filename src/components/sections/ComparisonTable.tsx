import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Detailed Ingredient Breakdown", olive: true, others: false },
  { name: "Pesticide & Toxin Detection", olive: true, others: false },
  { name: "Seed Oil & Additive Flagging", olive: true, others: false },
  { name: "Holistic Health Score", olive: true, others: false },
  { name: "Safer Product Alternatives", olive: true, others: false },
  { name: "Certified Lab-Testing Data", olive: true, others: false },
];

const ComparisonTable = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight font-display">
              Why Choose Olive?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">
              We provide the depth of data that other scanner apps miss.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-[3rem] bg-secondary border border-primary/5 shadow-2xl">
          <div className="grid grid-cols-3 bg-primary text-white py-10 px-6 md:px-12 items-center text-center">
            <div className="text-left font-black text-sm uppercase tracking-widest opacity-60">Feature</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <img src="/images/mascot.png" alt="Olive" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-black text-xl font-display">Olive</span>
            </div>
            <div className="font-black text-xl opacity-40 font-display">Others</div>
          </div>

          <div className="divide-y divide-primary/5">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-3 py-8 px-6 md:px-12 items-center text-center hover:bg-white/50 transition-colors"
              >
                <div className="text-left font-bold text-primary md:text-lg">
                  {feature.name}
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="text-primary w-6 h-6 stroke-[3px]" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <X className="text-primary/10 w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-primary/5 py-8 text-center border-t border-primary/5">
            <p className="text-sm font-bold text-primary/60">Based on competitive analysis of top 5 food scanner apps in 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
