import React from "react";
import { motion } from "framer-motion";
import { Tag, Progress } from "antd";
import { CheckCircle2, ShieldAlert, Heart } from "lucide-react";

const HealthBenefits = () => {
  const positives = [
    "Cholesterol-Free", "High Fibre", "No MSG", "Organic Ingredients", 
    "Low PFAS", "Plant-Based", "Gluten-Free", "100% Whole Grain", 
    "Non-GMO", "Rich in Antioxidants"
  ];

  const negatives = [
    "Artificial Colors", "Sodium Nitrite", "TBHQ", "Monosodium Glutamate", 
    "Potassium Sorbate", "BHA", "Carrageenan", "Potassium Bromate", 
    "Aspartame", "Saccharin", "Palm Oil", "Sodium Benzoate", "Xanthan Gum"
  ];

  return (
    <section id="features" className="section-padding bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Health Benefits of Using Olive
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Get clarity on what’s inside your food and make proactive choices for your family.
          </p>
        </div>

        <div className="space-y-24">
          {/* Benefit 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">Achieve Nutritional Clarity</h3>
              <ul className="space-y-4">
                {[
                  "Olive breaks down every ingredient into clear, actionable information.",
                  "Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.",
                  "Our ranking system is designed by registered holistic health experts."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="text-xl font-bold">Straus Ice Cream</h4>
                  <p className="text-sm text-foreground/40">Organic Vanilla Bean</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-primary">98</span>
                  <span className="text-sm text-foreground/40 block">Excellent</span>
                </div>
              </div>
              <Progress 
                percent={98} 
                strokeColor="#4b6343" 
                trailColor="#f5f5f0" 
                showInfo={false} 
                strokeWidth={12}
                className="mb-8"
              />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 block">Positives</span>
                  <div className="space-y-2">
                    <div className="h-4 bg-green-50 rounded-full w-full" />
                    <div className="h-4 bg-green-50 rounded-full w-3/4" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 block">Negatives</span>
                  <div className="text-xs text-foreground/30 italic">None detected</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefit 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2 space-y-6"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <ShieldAlert className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">Proactive Ingredient Filtering</h3>
              <ul className="space-y-4">
                {[
                  "Olive flags harmful additives and controversial ingredients before they become mainstream.",
                  "Keeps you ahead of potential food safety concerns.",
                  "Gives busy parents the confidence to make safer food choices."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-1 bg-white p-8 rounded-[2.5rem] shadow-xl border border-red-50"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-6">Ingredient Database</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {positives.slice(0, 6).map(tag => (
                  <Tag key={tag} className="bg-green-50 text-green-700 border-none rounded-full px-4 py-1 font-medium">
                    {tag}
                  </Tag>
                ))}
                <Tag className="bg-primary/10 text-primary border-none rounded-full px-4 py-1 font-medium">+100 more</Tag>
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">Flagged Ingredients</span>
                <div className="flex flex-wrap gap-2">
                  {negatives.slice(0, 8).map(tag => (
                    <Tag key={tag} className="bg-red-50 text-red-500 border-none rounded-full px-4 py-1 font-medium">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefit 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                <Heart className="text-pink-500 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">Real Health Outcomes</h3>
              <ul className="space-y-4">
                {[
                  "Empowers parents to feel more in control of their family's health.",
                  "Delivers personalized suggestions for healthier food choices.",
                  "Promotes long-term well-being through informed, balanced decisions."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="text-4xl font-bold mb-4">92%</p>
                <p className="text-xl font-medium opacity-90 leading-snug">
                  of parents feel more confident about their grocery choices after just one week with Olive.
                </p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-60">Source: User health outcome survey 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
