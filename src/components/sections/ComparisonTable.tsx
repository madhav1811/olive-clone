import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Ingredient Breakdown", olive: true, others: false },
  { name: "Toxin Detection", olive: true, others: false },
  { name: "Seed Oil Flagging", olive: true, others: false },
  { name: "Health Score", olive: true, others: false },
  { name: "Safe Alternatives", olive: true, others: false },
  { name: "Lab-Testing Data", olive: true, others: false },
];

const ComparisonTable = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Olive?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide the depth of data that other scanner apps miss
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-center font-semibold flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <img src="/images/mascot.png" alt="Olive" className="w-6 h-6 object-contain" />
                  </div>
                  Olive
                </th>
                <th className="px-6 py-4 text-center font-semibold">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-primary">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.olive ? (
                      <Check className="inline-block w-6 h-6 text-accent stroke-[3]" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-gray-300" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.others ? (
                      <Check className="inline-block w-6 h-6 text-accent stroke-[3]" />
                    ) : (
                      <X className="inline-block w-6 h-6 text-gray-300" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
