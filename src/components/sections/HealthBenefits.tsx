import React from "react";
import { motion } from "framer-motion";
import { Progress, Badge, Button } from "antd";
import { CheckCircle2, ShieldAlert, Heart, Star, Sparkles } from "lucide-react";

const HealthBenefits = () => {
  const positives = [
    "Cholesterol-Free", "High Fibre", "No MSG", "Organic Ingredients", 
    "Low PFAS", "Plant-Based", "Gluten-Free", "100% Whole Grain"
  ];

  const negatives = [
    "Artificial Colors", "Sodium Nitrite", "TBHQ", "Added Sugars", 
    "Seed Oils", "Carrageenan", "Aspartame", "Saccharin"
  ];

  return (
    <section id="features" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight font-display">
              Health Insights You Can Trust
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">
              We decode complex labels into simple scores, helping you make 
              proactive choices for your family's long-term well-being.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {/* Benefit 1: Nutritional Clarity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-xl border border-primary/10">
                <Star className="text-accent w-4 h-4 fill-accent" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Expert Backed</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight font-display">Achieve Nutritional <br />Clarity Instantly</h3>
              <ul className="space-y-6">
                {[
                  "Olive breaks down every ingredient into clear, actionable information.",
                  "Scores products out of 100 based on additives, processing, and toxins.",
                  "System designed by registered holistic health experts and nutritionists."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-muted text-lg font-medium leading-relaxed">
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] blur-2xl rotate-3" />
              <div className="relative bg-secondary p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h4 className="text-2xl font-black text-primary font-display">Organic Almond Milk</h4>
                    <p className="text-muted font-bold">Unsweetened, Vanilla</p>
                  </div>
                  <div className="bg-white w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-primary/5">
                    <span className="text-3xl font-black text-accent leading-none">96</span>
                    <span className="text-[10px] font-black text-primary/40 uppercase tracking-tighter">Score</span>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-primary">Ingredients Quality</span>
                      <span className="text-sm font-bold text-accent">Excellent</span>
                    </div>
                    <Progress 
                      percent={96} 
                      strokeColor="#A3E635" 
                      trailColor="#E2E8F0" 
                      showInfo={false} 
                      strokeWidth={14}
                      className="m-0"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/50 p-4 rounded-2xl border border-primary/5">
                      <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-3">Top Positives</p>
                      <div className="flex flex-wrap gap-2">
                        {positives.slice(0, 3).map(tag => (
                          <Badge key={tag} count={tag} className="bg-green-100 text-green-700 !text-[10px] font-bold px-2 py-0.5 rounded-md border-none" />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/50 p-4 rounded-2xl border border-primary/5">
                      <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-3">Flagged Issues</p>
                      <p className="text-xs font-bold text-primary/40 italic">None detected</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefit 2: Proactive Filtering */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-xl border border-red-100">
                <ShieldAlert className="text-red-500 w-4 h-4" />
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Stay Safe</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight font-display">Proactive Ingredient <br />Safety Guard</h3>
              <ul className="space-y-6">
                {[
                  "Olive flags harmful additives before they become mainstream news.",
                  "Custom alerts for allergies, seed oils, and hidden sugars.",
                  "Confident shopping for busy parents who care about long-term health."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-muted text-lg font-medium leading-relaxed">
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-red-50/50 rounded-[3rem] blur-2xl -rotate-2" />
              <div className="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-red-50">
                <h4 className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-8">Flagged Database</h4>
                <div className="grid grid-cols-2 gap-3">
                  {negatives.map(item => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-red-50/30 rounded-xl border border-red-50 group hover:bg-red-50 transition-colors">
                      <ShieldAlert className="w-4 h-4 text-red-400" />
                      <span className="text-sm font-bold text-primary/80">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-red-50 text-center">
                  <p className="text-sm font-bold text-red-500 underline decoration-red-200 underline-offset-4 cursor-pointer">View full database of 5,000+ chemicals</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefit 3: Family Health Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center">
                <Heart className="text-pink-500 w-8 h-8 fill-pink-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight font-display">Real Health <br />Outcomes for Families</h3>
              <p className="text-xl text-muted font-medium leading-relaxed">
                Empowering parents to feel more in control of their family's health through personalized suggestions and transparency.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-4xl font-black text-primary font-display">92%</p>
                    <p className="text-[10px] font-black text-muted uppercase tracking-widest">More Confident</p>
                  </div>
                  <div className="w-px h-12 bg-primary/10" />
                  <div className="text-center">
                    <p className="text-4xl font-black text-primary font-display">15k+</p>
                    <p className="text-[10px] font-black text-muted uppercase tracking-widest">Pantry Checks</p>
                  </div>
                </div>
                <Button className="bg-primary text-white font-bold h-14 px-10 rounded-2xl border-none shadow-lg shadow-primary/20">Read Success Stories</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[120px] scale-75" />
              <img 
                src="/images/family.png" 
                alt="Happy Avocado Family" 
                className="relative z-10 w-full max-w-[450px] object-contain drop-shadow-3xl animate-float"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
