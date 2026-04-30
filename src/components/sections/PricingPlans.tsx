import React from "react";
import { Button, Tag } from "antd";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingPlans = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Healthy Choices, Honest Pricing
          </h2>
          <p className="text-lg text-foreground/60">
            Choose the plan that fits your family's needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-10 rounded-[2.5rem] border border-border flex flex-col"
          >
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-foreground/40 block mb-4">Monthly</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">$14.99</span>
                <span className="text-foreground/40 font-medium">/ month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Unlimited Scans",
                "Unlimited Database Searches",
                "Comprehensive Lab-Testing Data"
              ].map(item => (
                <li key={item} className="flex gap-3 text-foreground/80 font-medium">
                  <Check className="text-primary w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              size="large"
              className="w-full h-14 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Subscribe
            </Button>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-primary text-white p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col shadow-2xl scale-105"
          >
            <div className="absolute top-0 right-0 p-4">
              <Tag className="bg-white text-primary border-none rounded-full px-4 py-1 font-bold">
                POPULAR
              </Tag>
            </div>

            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest opacity-60 block mb-4">Yearly</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black">$69.99</span>
                <span className="opacity-60 font-medium">/ year</span>
              </div>
              <p className="mt-2 text-sm opacity-80">
                ($179.88 billed annually, <span className="font-bold underline">60% savings</span>)
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Everything in monthly plan",
                "Get 7 months free",
                "Priority Support",
                "Early access to new features"
              ].map(item => (
                <li key={item} className="flex gap-3 font-medium">
                  <Check className="text-white w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              type="primary"
              size="large"
              className="w-full h-14 rounded-full font-bold bg-white text-primary border-none hover:bg-white/90 text-primary"
            >
              Subscribe
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
