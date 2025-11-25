import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import HeroBannerIllustration from "../components/illustrations/HeroBannerIllustration";
import JobRolesShowcase from "../components/illustrations/JobRolesShowcase";
import HiringBenefitsIllustration from "../components/illustrations/HiringBenefitsIllustration";
import ResumeUploadIllustration from "../components/illustrations/ResumeUploadIllustration";

const GOOGLE_FORM_URL = "https://forms.gle/Zy6tjPPakA3UMwEm6"; 


const Career = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f4f9fc] via-white to-[#f0f7fa]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 md:pt-36 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
        {/* Hero Illustration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <HeroBannerIllustration className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-600 text-sm md:text-base mb-6"
          >
           
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b3d64] mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
          >
            We are always looking for dedicated and professional individuals to join our security and manpower solutions team.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 mb-10"
          >
            Whether you're an experienced security guard, a trained professional, or someone looking to start a career in security services,
            we offer competitive packages, comprehensive training, and opportunities for growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-linear-to-r from-[#0b3d64] to-[#1a9bb9] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Job Roles Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3d64] mb-4">
              Available Positions
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Explore various career opportunities across different roles
            </p>
          </motion.div>
          <JobRolesShowcase />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3d64] mb-6 text-center">
              Why Join Shyama Manpower Solutions?
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-center">
              Be part of a team that values integrity, professionalism, and excellence. We provide a supportive work environment
              where your skills are recognized and your career can flourish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-linear-to-br from-[#0b3d64]/5 to-[#1a9bb9]/5 rounded-2xl p-6 border border-[#1a9bb9]/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <HiringBenefitsIllustration benefit="verified" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold text-[#0b3d64] mb-3">Verified Staff</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  All employees undergo thorough background checks and verification.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-linear-to-br from-[#0b3d64]/5 to-[#1a9bb9]/5 rounded-2xl p-6 border border-[#1a9bb9]/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <HiringBenefitsIllustration benefit="fast" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold text-[#0b3d64] mb-3">Fast Hiring</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Quick and efficient hiring process to get you started as soon as possible.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-linear-to-br from-[#0b3d64]/5 to-[#1a9bb9]/5 rounded-2xl p-6 border border-[#1a9bb9]/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <HiringBenefitsIllustration benefit="training" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold text-[#0b3d64] mb-3">Training & Development</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Comprehensive training programs to enhance your skills and career growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-linear-to-br from-[#0b3d64]/5 to-[#1a9bb9]/5 rounded-2xl p-6 border border-[#1a9bb9]/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <HiringBenefitsIllustration benefit="support" className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold text-[#0b3d64] mb-3">24/7 Support</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Round-the-clock support system to assist you whenever you need help.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Upload Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-linear-to-br from-[#0b3d64]/5 to-[#1a9bb9]/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-xl p-8 md:p-10"
          >
            <div className="flex justify-center mb-6">
              <ResumeUploadIllustration className="w-32 h-32 md:w-40 md:h-40" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3d64] mb-4">
              Ready to Apply?
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Fill out our online application form and upload your resume in PDF format. Our HR team will review your application and get back to you.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-linear-to-r from-[#0b3d64] to-[#1a9bb9] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Submit Your Resume
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
