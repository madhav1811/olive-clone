import React from "react";
import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Detailed Product Breakdown", olive: true, others: false },
  { name: "Comprehensive Water Data", olive: true, others: false },
  { name: "Seed Oil Free Dining Map", olive: true, others: false },
  { name: "Seed Oil Flagging", olive: true, others: false },
  { name: "Certified Lab-Testing Data", olive: true, others: false },
];

const ComparisonTable = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Olive Food Scanner App vs. The Rest
          </h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-primary/5">
          <div className="grid grid-cols-3 bg-primary text-white py-8 px-6 md:px-12 items-center text-center">
            <div className="text-left font-bold text-lg">Feature</div>
            <div className="font-bold text-2xl">Olive</div>
            <div className="font-bold text-lg opacity-60">Others</div>
          </div>

          <div className="divide-y divide-border">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-3 py-8 px-6 md:px-12 items-center text-center hover:bg-secondary/10 transition-colors"
              >
                <div className="text-left font-semibold text-foreground/80 md:text-lg">
                  {feature.name}
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="text-primary w-6 h-6 stroke-[3px]" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Minus className="text-foreground/20 w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
