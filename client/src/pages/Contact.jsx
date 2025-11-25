import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Send,
  Loader2,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Home,
  ChevronRight,
  FileText,
} from "lucide-react";
import { toast } from "react-toastify";
import { sendEmail } from "../utils/sendEmail";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";
import TestimonialSlider from "../components/TestimonialSlider";
import hero2 from "../assets/hero2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }
    if (formData.subject.trim().length < 3) {
      toast.error("Subject must be at least 3 characters long");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await sendEmail(formData);

      toast.success("Thank you for your message! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFocusedField(null);

      // Reset form element
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Email Error:", error);
      toast.error(
        error.message ||
          "Sorry, there was an error sending your message. Please try again or contact us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Floating particles animation
  const Particle = ({ delay, duration, x, y }) => (
    <motion.div
      className="absolute w-2 h-2 bg-[#1a9bb9]/30 rounded-full"
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 0],
        y: [0, -100],
        x: [0, Math.random() * 50 - 25],
      }}
      transition={{
        duration: duration || 8,
        delay: delay || 0,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f4f9fc] via-white to-[#f0f7fa] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1a9bb9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0b3d64]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-r from-[#1a9bb9]/5 to-[#0b3d64]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <Particle
          key={i}
          delay={i * 0.5}
          duration={8 + Math.random() * 4}
          x={Math.random() * 100}
          y={Math.random() * 100}
        />
      ))}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden pt-32 md:pt-36"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src={hero2}
            alt="Contact Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b3d64]/90 via-[#0b3d64]/85 to-[#1a9bb9]/80" />
        </motion.div>

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-[#1a9bb9]/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col h-full w-full items-center justify-center text-center px-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Breadcrumb */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-white/90 text-sm md:text-base mb-4"
          > */}
            {/* <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#1a9bb9] transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contact</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-wide"
            style={{ letterSpacing: "0.05em" }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] max-w-3xl mx-auto"
          >
            "Let’s discuss your needs. We are here to help you 24/7."
          </motion.p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section
        ref={sectionRef}
        className="relative z-10 py-16 md:py-24 px-4 md:px-6 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {/* Left Sidebar - Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Contact Info Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3d64] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0b3d64] to-[#1a9bb9] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        3767, A2 Kanhaiya Nagar,
                        <br />
                        New Delhi- 110035
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.a
                    href="tel:+917982668153"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0b3d64] to-[#1a9bb9] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600 text-sm md:text-base group-hover:text-[#1a9bb9] transition-colors">
                        +91-7982668153
                      </p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:info@company.com"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0b3d64] to-[#1a9bb9] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600 text-sm md:text-base group-hover:text-[#1a9bb9] transition-colors">
                       info.shyamamanpowersolution1@gmail.com
                      </p>
                    </div>
                  </motion.a>
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/917982668153"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-linear-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                {/* Social Icons */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    {[
                      {
                        icon: Facebook,
                        href: "https://facebook.com",
                        label: "Facebook",
                      },
                      { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                      {
                        icon: Linkedin,
                        href: "https://linkedin.com",
                        label: "LinkedIn",
                      },
                      {
                        icon: Instagram,
                        href: "https://instagram.com",
                        label: "Instagram",
                      },
                    ].map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-xl bg-linear-to-br from-[#0b3d64] to-[#1a9bb9] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Google Maps Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#0b3d64] mb-4">
                    Find Us
                  </h3>
                  <div className="rounded-2xl overflow-hidden border border-gray-200/50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.0683665012607!2d77.16353127525072!3d28.681465171106197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0246a7467d13%3A0x3e4a85b8eaa9e757!2s3767%2C%203767%2FA2%2C%20Kanhiya%20Nagar%2C%20Tri%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110035!5e0!3m2!1sen!2sin!4v1763378503675!5m2!1sen!2sin" 
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Shyama Manpower Solutions Location"
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden"
              >
                {/* Decorative gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#0b3d64] via-[#1a9bb9] to-[#0b3d64] opacity-20 blur-xl -z-10"></div>
                <div className="absolute inset-px rounded-3xl bg-white/70 backdrop-blur-2xl"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0b3d64] mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 mb-8 text-base md:text-lg">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div variants={itemVariants} className="relative">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <User
                            className={`h-5 w-5 transition-colors ${
                              focusedField === "name"
                                ? "text-[#1a9bb9]"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[#1a9bb9] focus:ring-4 focus:ring-[#1a9bb9]/20 text-gray-700 transition-all duration-300 text-base placeholder:text-gray-400"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div variants={itemVariants} className="relative">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <Mail
                            className={`h-5 w-5 transition-colors ${
                              focusedField === "email"
                                ? "text-[#1a9bb9]"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[#1a9bb9] focus:ring-4 focus:ring-[#1a9bb9]/20 text-gray-700 transition-all duration-300 text-base placeholder:text-gray-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </motion.div>

                    {/* Subject Field */}
                    <motion.div variants={itemVariants} className="relative">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <FileText
                            className={`h-5 w-5 transition-colors ${
                              focusedField === "subject"
                                ? "text-[#1a9bb9]"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[#1a9bb9] focus:ring-4 focus:ring-[#1a9bb9]/20 text-gray-700 transition-all duration-300 text-base placeholder:text-gray-400"
                          placeholder="Subject of your message"
                        />
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div variants={itemVariants} className="relative">
                      <div className="relative">
                        <div className="absolute left-4 top-6 z-10">
                          <MessageSquare
                            className={`h-5 w-5 transition-colors ${
                              focusedField === "message"
                                ? "text-[#1a9bb9]"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows="6"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[#1a9bb9] focus:ring-4 focus:ring-[#1a9bb9]/20 text-gray-700 transition-all duration-300 resize-none text-base placeholder:text-gray-400"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants} className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                        className={`w-full bg-linear-to-r from-[#0b3d64] via-[#1a9bb9] to-[#0b3d64] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold rounded-2xl px-8 py-5 text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                          isLoading
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:scale-105"
                        }`}
                        style={{
                          backgroundSize: "200% 100%",
                        }}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-6 lg:px-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Find answers to common questions about our services
            </p>
          </motion.div>
          <FAQAccordion />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Trusted by leading businesses across industries
            </p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
