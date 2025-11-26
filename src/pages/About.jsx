import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Target, 
  Users, 
  Headphones, 
  GraduationCap, 
  MapPin, 
  UserCheck, 
  Zap 
} from "lucide-react";
import Footer from "../components/Footer";
import hero4 from "../assets/hero4.jpg";
import card1 from "../assets/hero1.jpg";

const About = () => {
  const overviewRef = useRef(null);
  const missionRef = useRef(null);
  const featuresRef = useRef(null);
  
  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });

  // Hero animation variants
  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Slide animations
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Why Choose Us features
  const features = [
    {
      icon: Users,
      title: "Experienced Workforce",
      description: "Our team consists of highly trained professionals with years of industry experience."
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance to address your needs and concerns at any time."
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Comprehensive training programs ensure our staff meets the highest standards."
    },
    {
      icon: MapPin,
      title: "Nationwide Presence",
      description: "Serving clients across multiple cities with our extensive network."
    },
    {
      icon: UserCheck,
      title: "Verified Staff",
      description: "All personnel undergo thorough background checks and verification processes."
    },
    {
      icon: Zap,
      title: "Quick Response Team",
      description: "Rapid deployment and efficient solutions for urgent staffing requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden pt-32 md:pt-36">
        <div className="absolute inset-0">
          <img
            src={hero4}
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b3d64]/85 to-[#1a9bb9]/75" />
        </div>
        <motion.div
          className="relative z-10 flex h-full w-full items-center justify-center text-center px-6"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              About Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Trusted Manpower & Security Partner Since 2010.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={overviewRef}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate={isOverviewInView ? "visible" : "hidden"}
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              variants={slideInLeft}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={card1}
                  alt="Company Overview"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full md:w-1/2"
              variants={slideInRight}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-6">
                Company Overview
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                Shyama Manpower Solutions Pvt. Ltd. is a leading provider of security and workforce management services across multiple industries. With over a decade of experience, we specialize in delivering professional, trained, and reliable manpower for industrial, commercial, and residential clients.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our commitment to excellence, integrity, and customer satisfaction has made us a trusted partner for businesses and individuals seeking reliable security and staffing solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-4">
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-[#1a9bb9] mx-auto"></div>
          </motion.div>

          <motion.div
            ref={missionRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
          >
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a9bb9]/10 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-[#1a9bb9]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0b3d64] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To deliver dependable manpower solutions with integrity, discipline, and professionalism.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a9bb9]/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#1a9bb9]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0b3d64] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become India's most trusted name in manpower and security services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-4">
              Why Choose Shyama?
            </h2>
            <div className="w-20 h-1 bg-[#1a9bb9] mx-auto"></div>
          </motion.div>

          <motion.div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1a9bb9]/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-[#1a9bb9]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b3d64] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-linear-to-r from-[#0b3d64] to-[#1a9bb9]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Looking for trusted manpower services?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Get in touch with us today and let us provide you with the best solutions for your needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#0b3d64] shadow-xl hover:bg-gray-50 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
