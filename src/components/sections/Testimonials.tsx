import React from "react";
import { motion } from "framer-motion";
import { Rate } from "antd";

const testimonials = [
  {
    name: "MEGAN L.",
    quote: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
    rating: 5,
  },
  {
    name: "TINA B.",
    quote: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
    rating: 5,
  },
  {
    name: "LILA M.",
    quote: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real Mothers, Real Results
          </h2>
          <p className="text-lg text-foreground/60">
            Join thousands of satisfied parents who trust Olive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/30 p-10 rounded-[2rem] border border-transparent hover:border-primary/20 transition-all flex flex-col justify-between"
            >
              <div>
                <Rate disabled defaultValue={t.rating} className="text-primary text-sm mb-6" />
                <p className="text-xl text-foreground/80 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="font-bold text-primary tracking-widest text-sm uppercase">
                — {t.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="text-primary font-bold hover:underline underline-offset-4"
          >
            Read all 3,147+ reviews on the App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
