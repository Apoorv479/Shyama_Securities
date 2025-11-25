// src/pages/services/Housekeeping.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowLeft, Check, Home, Clipboard, Sparkles } from "lucide-react"; 
import Footer from "../../components/Footer";

// --- IMAGES ARE NOW IMPORTED LOCALLY ---
// Keeping same hero image as requested
import Hero from "../../assets/cleaning.jpg"; 

// Client Logos
import zeptoLogo from "../../assets/client3.png";
import blinkitLogo from "../../assets/client1.png";
import rkGroupLogo from "../../assets/client4.jpg";
import tataMotorsLogo from "../../assets/client5.jpg";
// ----------------------------------------

const SmartImage = ({ sources = [], alt = "", className = "", style = {} }) => {
  const [idx, setIdx] = useState(0);

  // When an image fails, advance to next source
  const handleError = () => {
    if (idx < sources.length - 1) setIdx((s) => s + 1);
    else setIdx(sources.length); // mark as no more sources
  };

  // If out of sources, render inline SVG placeholder that fits the same space
  if (idx >= sources.length) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gray-100 ${className}`}
        style={{ ...style, minHeight: 160 }}
      >
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="140" height="100" rx="10" fill="#E9F9FB"/>
          <g transform="translate(12,10)" fill="#0b3d64" opacity="0.9">
            <rect x="0" y="48" width="116" height="8" rx="2" />
            <rect x="0" y="30" width="72" height="8" rx="2" />
            <circle cx="94" cy="24" r="14" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    // `crossOrigin` is no longer needed for local images
    <img
      src={sources[idx]}
      alt={alt}
      onError={handleError}
      className={className}
      style={style}
      loading="lazy"
    />
  );
};

const Housekeeping = () => {
  const primary = "text-[#0b3d64]";
  const accentBg = "bg-[#1a9bb9]";
  const accentBgHover = "hover:bg-[#15849b]";
  const gradient = "bg-gradient-to-r from-[#0b3d64] to-[#084057]";

  // --- 1. HERO IMAGE UPDATED ---
  // Now uses the locally imported bouncerHero image
  const heroSources = [Hero];
  // ------------------------------

  // --- 2. LOGOS UPDATED ---
  // Now uses the locally imported logo variables
  const trustedLogos = [
    { 
      src: zeptoLogo, 
      alt: 'Zepto Logo' 
    },
    { 
      src: blinkitLogo, 
      alt: 'Blinkit Logo' 
    },
    { 
      src: rkGroupLogo, 
      alt: 'RK Group Logo' 
    },
    { 
      src: tataMotorsLogo, 
      alt: 'Tata Motors Logo' 
    }
  ];
  // -------------------------

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  return (
    <>
      {/* --- NAVBAR FIX ---
        Added 'pt-20' to prevent the fixed navbar from overlapping.
      */}
      <div className="min-h-screen flex flex-col pt-20">
        {/* Hero */}
        <header className={`${gradient} text-white`}>
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <p className="inline-block py-1 px-3 rounded-full bg-white/10 text-sm font-medium">
                Residential, Commercial & Industrial
              </p>

              <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Quality Assured Housekeeping & Cleaning Services
              </h1>

              <p className="mt-4 text-white/90 max-w-xl">
                Reliable, trained, and vetted housekeeping staff to maintain a clean, safe, and professional environment. Trusted by homes, offices, hotels, and industrial sites for consistent, high-quality cleaning.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+911234567890"
                  className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-medium ${accentBg} ${accentBgHover} text-white shadow-lg`}
                >
                  <Phone size={18} /> Call Now
                </a>

                <a
                  href="mailto:info@shyama-securities.com?subject=Housekeeping%20Service%20Inquiry"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-medium bg-white text-[#0b3d64] hover:bg-white/90 shadow"
                >
                  <Mail size={18} /> Email Us
                </a>
              </div>

              <div className="mt-6 text-sm text-white/80">
                <span className="font-semibold">Available:</span> Daily, Weekly & Monthly Contracts
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <SmartImage
                  sources={heroSources}
                  alt="Professional housekeeping staff cleaning an office"
                  className="w-full h-64 md:h-80 lg:h-[380px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Top navigation back */}
            <motion.div variants={item} className="mb-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-[#0b3d64] hover:underline"
              >
                <ArrowLeft size={16} /> Back to Services
              </Link>
            </motion.div>

            {/* Overview + Key services */}
            <motion.section
              variants={item}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-[#0b3d64]">
                  Housekeeping Services — What We Offer
                </h2>
                <p className="mt-4 text-gray-700 max-w-prose">
                  Our professionally trained housekeeping staff ensure a spotless, organized, and hygienic environment. We handle everything from daily office cleaning and residential upkeep to specialized industrial cleaning, all tailored to your schedule and standards.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Commercial & Office Cleaning</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Daily janitorial services, workstation sanitization, common area upkeep, and restroom cleaning to maintain a productive workspace.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Residential Deep Cleaning</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Top-to-bottom cleaning for homes and apartments. Ideal for move-in/move-out, post-renovation, or seasonal deep cleans.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Industrial & Site Cleaning</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Specialized cleaning for factories, warehouses, and post-construction sites, adhering to all safety and compliance standards.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Pantry & Utility Management</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Stocking supplies, managing pantry areas, and ensuring all utilities and restrooms are clean, hygienic, and fully operational.
                    </p>
                  </div>
                </div>

                {/* Why choose us */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-[#0b3d64]">Why choose our housekeeping staff?</h3>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Trained & Vetted Professionals",
                      "Use of Eco-Friendly & Safe Chemicals",
                      "Reliable & Background-Checked Staff",
                      "Customized Cleaning Checklists",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-1 text-[#1a9bb9]">
                          <Check size={18} />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- UPDATED "HOW IT WORKS" SECTION --- */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-[#0b3d64]">Our Cleaning Service Process</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Step 1 */}
                    <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm bg-white">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-full ${accentBg} text-white`}>
                          <Home size={20} />
                        </span>
                        <h4 className="font-semibold text-lg text-[#0b3d64]">1. On-Site Walkthrough</h4>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        We begin with a no-obligation visit to your property (home, office, or industrial site) to assess the area and understand your specific needs.
                      </p>
                    </div>
                    {/* Step 2 */}
                    <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm bg-white">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-full ${accentBg} text-white`}>
                          <Clipboard size={20} />
                        </span>
                        <h4 className="font-semibold text-lg text-[#0b3d64]">2. Customized Plan</h4>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        Based on the walkthrough, we create a detailed, customized cleaning checklist and schedule, providing a transparent quote with no hidden fees.
                      </p>
                    </div>
                    {/* Step 3 */}
                    <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm bg-white">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-full ${accentBg} text-white`}>
                          <Sparkles size={20} />
                        </span>
                        <h4 className="font-semibold text-lg text-[#0b3d64]">3. Service & Feedback</h4>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        Our trained team arrives on schedule and executes the plan. We follow up with a quality check and gather your feedback to ensure consistent excellence.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ------------------------------------- */}

              </div>

              {/* Right column: contact card */}
              <aside className="p-6 rounded-2xl border border-[#e6f6fa] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white/5">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect width="24" height="24" rx="6" fill="#0b3d64" />
                      <path d="M7 10h10M7 14h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Need Cleaning Services?</p>
                    <p className="text-lg font-semibold text-[#0b3d64]">Contact our team</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+911234567890"
                    className=" w-full text-left inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e6f6fa] bg-white text-[#0b3d64] font-medium hover:bg-[#f8feff]"
                  >
                    <Phone size={16} /> +91 12345 67890
                  </a>

                  <a
                    href="mailto:info@shyama-securities.com?subject=Housekeeping%20Service%20Inquiry"
                    className=" w-full text-left inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e6f6fa] bg-white text-[#0b3d64] font-medium hover:bg-[#f8feff]"
                  >
                    <Mail size={16} /> info@shyama-securities.com
                  </a>
                </div>

                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-white"
                    style={{ background: "linear-gradient(90deg,#0b3d64 0%,#1a9bb9 100%)" }}
                  >
                    Get a Quote
                  </a>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  We provide one-time, daily, weekly, and monthly contracts — send details for a tailored quote.
                </div>
              </aside>
            </motion.section>

            {/* --- 3. "TRUSTED BY" SECTION UPDATED --- */}
            <motion.section variants={item} className="mt-12">
              <h3 className="text-xl font-bold text-[#0b3d64]">Trusted by</h3>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
                {trustedLogos.map((logo) => (
                  <div 
                    key={logo.alt} 
                    className="p-4 h-16 rounded-lg border border-[#f1fbfd] flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      // --- LOGO SIZE INCREASED HERE ---
                      className="max-h-14 w-auto object-contain " 
                    />
                  </div>
                ))}
              </div>
            </motion.section>
            {/* ------------------------------------ */}

            {/* FAQ */}
            <motion.section variants={item} className="mt-12">
              <h3 className="text-xl font-bold text-[#0b3d64]">Frequently asked questions</h3>
              <div className="mt-4 space-y-4">
                
                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">Do you bring your own cleaning supplies?</summary>
                  <p className="mt-2 text-gray-700">Yes, our teams arrive with all necessary professional-grade, eco-friendly cleaning supplies and equipment. We can also use your preferred products if requested.</p>
                </details>

                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">Is your housekeeping staff background-checked?</summary>
                  <p className="mt-2 text-gray-700">Absolutely. All our staff undergo a thorough background verification and vetting process for your peace of mind and security.</p>
                </details>

                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">Can I customize my cleaning service?</summary>
                  <p className="mt-2 text-gray-700">Yes. We build a custom cleaning checklist based on your specific needs and priorities, ensuring our team focuses on what matters most to you.</p>
                </details>

                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">What's the difference between standard and deep cleaning?</summary>
                  <p className="mt-2 text-gray-700">Standard cleaning covers daily/weekly upkeep (dusting, vacuuming, surfaces, trash). Deep cleaning is more thorough, including inside appliances, baseboards, and detailed grout work.</p>
                </details>

              </div>
            </motion.section>
          </motion.div>
        </main>

        {/* Footer CTA */}
        <footer className="bg-[#f8feff] border-t border-white/60">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm text-gray-600">Ready for a cleaner space?</div>
              <div className="mt-2 text-lg font-semibold text-[#0b3d64]">Book our professional housekeeping team today</div>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:+911234567890"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-medium ${accentBg} ${accentBgHover} text-white`}
              >
                <Phone size={16} /> Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-medium bg-white text-[#0b3d64] border border-[#e6f6fa]"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Housekeeping;