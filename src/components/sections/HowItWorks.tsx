import React from "react";
import { Scan, Database, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Tag } from "antd";

const steps = [
  {
    title: "Scan & Detect",
    description: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive’s intuitive design means busy parents can quickly see which items contain harmful substances.",
    icon: <Scan className="w-10 h-10 text-primary" />,
    color: "bg-primary/10",
  },
  {
    title: "Data Analysis & Validation",
    description: "After scanning, our app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients.",
    icon: <Database className="w-10 h-10 text-primary" />,
    color: "bg-primary/10",
    badge: "Safe to consume",
  },
  {
    title: "Actionable Insights & Recommendations",
    description: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations.",
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    color: "bg-primary/10",
    extra: ["Veggie Spaghetti Squash", "Chhole (Chickpea Curry)", "Lentil and Spinach Soup"],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How the Olive Food Scanner App Works
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Empowering parents with real-time data and expert insights for healthier grocery shopping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/20 rounded-[2rem] p-8 border border-primary/5 hover:border-primary/20 transition-all group"
            >
              <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {step.description}
              </p>
              
              {step.badge && (
                <Tag color="success" className="px-3 py-1 rounded-full text-sm font-semibold border-none bg-green-100 text-green-700">
                  {step.badge}
                </Tag>
              )}

              {step.extra && (
                <ul className="mt-4 space-y-2">
                  {step.extra.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
