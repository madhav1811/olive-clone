import React from "react";
import { Button, Collapse } from "antd";
import { ShieldCheck, Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    key: '1',
    label: 'How does Olive scan ingredients?',
    children: <p>Olive uses advanced OCR (Optical Recognition) technology to read food labels instantly. We then cross-reference these ingredients with our proprietary database.</p>,
  },
  {
    key: '2',
    label: 'Is Olive safe for kids?',
    children: <p>Absolutely. Olive is designed specifically with families in mind. Our database highlights ingredients that are particularly concerning for child development.</p>,
  },
  {
    key: '3',
    label: 'Does Olive work without an internet connection?',
    children: <p>Olive requires a data connection to access our live, updated database ensuring you have the most current information.</p>,
  },
  {
    key: '4',
    label: 'How often is the database updated?',
    children: <p>Our database is updated daily by our team of nutritionists and researchers.</p>,
  },
];

const PromoAndFAQ = () => {
  return (
    <div id="faq" className="bg-secondary/10">
      {/* Promo Block */}
      <section className="section-padding container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/5 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Protect Your Family From <span className="text-primary">Hidden Toxins</span>
            </h2>
            <p className="text-xl text-foreground/60 mb-8">
              Sign up for Olive today and start shopping with confidence.
            </p>
            <Button
              type="primary"
              size="large"
              className="bg-primary hover:bg-primary/90 border-none rounded-full px-12 font-bold h-16 text-lg text-white"
            >
              Download for iOS
            </Button>
          </div>

          <div className="flex-1 bg-secondary/50 p-10 rounded-[2rem] border border-primary/10 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">100% Independent. Always.</h3>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We never monetize through brand deals, affiliate links, or ads — so you can trust our recommendations are always aligned with our users.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Answers to common questions from parents like you.
          </p>
        </div>

        <Collapse 
          ghost 
          expandIcon={({ isActive }) => <Plus className={`w-6 h-6 transition-transform ${isActive ? 'rotate-45' : ''}`} />}
          expandIconPosition="end"
          items={faqs}
          className="faq-collapse"
        />
      </section>
    </div>
  );
};

export default PromoAndFAQ;
