import React from "react";
import { Button, Tag } from "antd";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PricingPlans = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight font-display">
              Healthy Choices, Honest Pricing
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">
              Invest in your family's health with our transparent subscription plans.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-12 rounded-[3.5rem] border border-primary/5 flex flex-col shadow-xl"
          >
            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 block mb-6">Monthly</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-primary font-display">$14.99</span>
                <span className="text-muted font-bold">/ mo</span>
              </div>
            </div>

            <ul className="space-y-6 mb-12 flex-grow">
              {[
                "Unlimited Scans",
                "Detailed Ingredient Analysis",
                "Flag Hidden Additives",
                "Daily Health Insights"
              ].map(item => (
                <li key={item} className="flex gap-4 text-primary/80 font-bold text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="text-primary w-3 h-3 stroke-[4px]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              size="large"
              className="w-full h-16 rounded-2xl font-black border-2 border-primary text-primary hover:bg-primary/5 bg-transparent text-sm uppercase tracking-widest"
            >
              Start Free Trial
            </Button>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-primary text-white p-12 rounded-[3.5rem] relative overflow-hidden flex flex-col shadow-2xl scale-105"
          >
            {/* Animated Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            
            <div className="absolute top-8 right-8">
              <div className="bg-accent text-primary text-[10px] font-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <Sparkles className="w-3 h-3 fill-primary" />
                MOST POPULAR
              </div>
            </div>

            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 block mb-6">Yearly</span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black font-display text-accent">$69.99</span>
                <span className="opacity-60 font-bold">/ yr</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg">
                <span className="text-[10px] font-black text-accent uppercase tracking-wider">Save 60%</span>
              </div>
            </div>

            <ul className="space-y-6 mb-12 flex-grow">
              {[
                "Everything in Monthly",
                "Advanced Lab-Testing Data",
                "Family Account (5 users)",
                "Priority Support Access",
                "Early Access to Features"
              ].map(item => (
                <li key={item} className="flex gap-4 font-bold text-sm">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="text-accent w-3 h-3 stroke-[4px]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              type="primary"
              size="large"
              className="w-full h-16 rounded-2xl font-black bg-accent text-primary border-none hover:bg-accent/90 shadow-xl shadow-accent/20 text-sm uppercase tracking-widest"
            >
              Get Yearly Plan
            </Button>
            
            <p className="mt-6 text-center text-[10px] font-bold opacity-40 uppercase tracking-widest">
              Billed annually at $69.99/year
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
