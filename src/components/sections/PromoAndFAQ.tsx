import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does Olive scan ingredients?",
    answer: "Olive uses advanced OCR technology to read food labels instantly, cross-referencing them with our proprietary database of ingredients.",
  },
  {
    question: "Is Olive safe for kids?",
    answer: "Absolutely. Olive is designed for families, highlighting ingredients concerning for child development.",
  },
  {
    question: "Does Olive work offline?",
    answer: "Olive requires an internet connection to access our live, updated database for the most current information.",
  },
  {
    question: "How often is the database updated?",
    answer: "Our database is updated daily by our team of nutritionists and researchers.",
  },
];

const PromoAndFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="bg-gray-50">
      {/* Promo Block */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-16 shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Protect Your Family From <span className="text-accent">Hidden Toxins</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Download Olive today and start shopping with confidence.
            </p>
            <a
              href="#download"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Download for iOS
            </a>
          </div>

          <div className="flex-1 bg-gradient-to-br from-accent/10 to-primary/5 p-10 rounded-2xl border border-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a.5.5 0 00-.788 0l-.83 1.559-1.721.074c-.325.014-.616.23-.68.553-.063.323.125.64.425.823l1.243.937-.474 1.693c-.1.357.19.671.55.671.288 0 .556-.139.71-.37l1.239-1.854 1.24 1.854c.154.23.422.37.71.37.36 0 .65-.314.55-.67l-.474-1.693 1.243-.937c.3-.183.488-.5.425-.823-.063-.323-.355-.54-.68-.553l-1.72-.074-.83-1.559z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">100% Independent</h3>
            </div>
            <p className="text-gray-700">
              We never take brand deals or affiliate payments, so you can trust our recommendations are always aligned with your health.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Answers to questions from parents like you
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="font-semibold text-primary text-lg">{faq.question}</h3>
                <Plus
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    expandedIndex === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {expandedIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-5 border-t border-gray-200"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PromoAndFAQ;
