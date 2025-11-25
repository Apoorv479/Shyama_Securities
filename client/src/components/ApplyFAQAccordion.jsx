import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ApplyFAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the hiring process take?",
      answer:
        "Typically, our HR team reviews applications within 3-5 business days. Shortlisted candidates are contacted within a week. The entire process from application to onboarding usually takes 2-3 weeks.",
    },
    {
      question: "What documents do I need to submit?",
      answer:
        "You need to submit your resume (PDF, DOC, or DOCX format). During the interview process, you may be asked to provide additional documents like ID proof, educational certificates, and previous employment letters.",
    },
    {
      question: "Will I receive training after joining?",
      answer:
        "Yes! All new employees undergo comprehensive training programs relevant to their role. We provide both theoretical and practical training to ensure you're fully prepared for your responsibilities. Training duration varies by position.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3">
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
            className="w-full px-5 py-4 flex items-center justify-between text-left group"
          >
            <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#0b3d64] transition-colors pr-4">
              {faq.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown className="h-4 w-4 text-[#1a9bb9] group-hover:text-[#0b3d64] transition-colors" />
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
                <div className="px-5 pb-4 pt-0">
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
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

export default ApplyFAQAccordion;

