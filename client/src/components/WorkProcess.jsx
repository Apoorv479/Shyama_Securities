import { motion } from "framer-motion";
import { ClipboardCheck, ShieldCheck, Users, Headset, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkProcess = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      title: "Requirement Analysis",
      desc: "We assess your specific security needs and site risks to understand the scope.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Custom Strategy",
      desc: "Our experts design a tailored security plan combining manpower and technology.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Rapid Deployment",
      desc: "We deploy verified, trained professionals to your location within the agreed timeline.",
    },
    {
      icon: <Headset className="w-8 h-8 text-white" />,
      title: "24/7 Support",
      desc: "Continuous monitoring and a dedicated support team ensure operations never stop.",
    },
  ];

  return (
    <>
      {/* --- Part 1: The Process Steps --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-4">
              How We Secure Your World
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A seamless 4-step process to ensure your safety without the hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-[#0b3d64] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-[#1a9bb9] transition-all duration-300 border-4 border-white">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#0b3d64] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Part 2: The CTA Banner --- */}
      {/* This sits right above the footer to bridge the gap seamlessly */}
      <section className="py-16 px-6 bg-linear-to-r from-[#0b3d64] to-[#1a9bb9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to Upgrade Your Security?
            </h2>
            <p className="text-blue-100 text-lg opacity-90">
              Get a free consultation and quote within 24 hours.
            </p>
          </div>
          
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0b3d64] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;