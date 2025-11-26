import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Shyama Manpower Solutions provide?",
      answer:
        "We provide comprehensive manpower solutions including security guard services, housekeeping, bouncers, office support staff, data entry operators, industrial workforce, logistics staff, and facility management services across various industries.",
    },
    {
      question: "How quickly can you provide staff for our requirements?",
      answer:
        "We understand the urgency of staffing needs. Typically, we can provide qualified staff within 24-48 hours for standard positions. For specialized roles, we may require 3-5 business days to ensure we match the right candidate with your requirements.",
    },
    {
      question: "Are your staff members trained and certified?",
      answer:
        "Yes, all our staff members undergo rigorous training and certification programs relevant to their roles. Security personnel are trained in security protocols, first aid, and emergency response. We ensure compliance with industry standards and regulations.",
    },
    {
      question: "What is your service coverage area?",
      answer:
        "We primarily serve New Delhi and the National Capital Region (NCR). However, we also provide services across major cities in India. Please contact us to discuss your specific location requirements.",
    },
    {
      question: "How do you ensure quality and reliability of your services?",
      answer:
        "We maintain strict quality control through regular performance reviews, client feedback systems, and continuous training programs. Our team conducts periodic site visits to ensure service standards are met. We also have a 24/7 support system to address any concerns immediately.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-[#0b3d64] transition-colors pr-4">
              {faq.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-[#1a9bb9] group-hover:text-[#0b3d64] transition-colors" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;

