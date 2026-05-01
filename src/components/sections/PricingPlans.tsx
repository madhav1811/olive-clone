import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingPlans = () => {
  const plans = [
    {
      name: "Standard",
      price: "$14.99",
      period: "per month",
      features: ["Unlimited Scans", "Ingredient Analysis", "Health Scores", "Safe Alternatives"],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$69.99",
      period: "per year",
      features: ["Everything in Standard", "Lab-Testing Data", "Family Accounts", "Priority Support", "Early Features"],
      cta: "Get Premium",
      highlight: true,
      badge: "Save 60%",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Choose the plan that fits your family's needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-primary text-white border-accent shadow-lg"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.badge && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  plan.highlight ? "bg-accent/20 text-accent" : "bg-accent/10 text-primary"
                }`}>
                  {plan.badge}
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlight ? "text-white/70" : "text-gray-600"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-accent text-primary hover:bg-accent/90"
                    : "bg-gray-100 text-primary hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
