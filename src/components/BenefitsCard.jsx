import { motion } from "framer-motion";
import { Shield, GraduationCap, HeadphonesIcon, CheckCircle2 } from "lucide-react";

const BenefitsCard = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Staff",
      description: "All our employees undergo thorough background checks and verification processes.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Comprehensive training programs to ensure you're equipped with the latest skills.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock support system to assist you whenever you need help.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const hiringSteps = [
    "Submit your application with resume",
    "HR team reviews your profile",
    "Shortlisted candidates are contacted",
    "Interview and selection process",
    "Welcome aboard!",
  ];

  return (
    <div className="space-y-6">
      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-br from-[#0b3d64] to-[#1a9bb9] rounded-3xl p-6 md:p-8 text-white shadow-2xl"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Join Us?</h3>
        <div className="space-y-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${benefit.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Hiring Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-6 md:p-8"
      >
        <h3 className="text-xl md:text-2xl font-bold text-[#0b3d64] mb-6">
          Our Hiring Process
        </h3>
        <div className="space-y-4">
          {hiringSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-[#0b3d64] to-[#1a9bb9] flex items-center justify-center text-white font-bold text-sm mt-0.5">
                {index + 1}
              </div>
              <p className="text-gray-700 text-sm md:text-base pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BenefitsCard;

