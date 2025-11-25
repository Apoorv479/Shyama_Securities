// src/pages/services/Bouncer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowLeft, Check, ClipboardList, Users, ShieldCheck } from "lucide-react"; // Added new icons
import Footer from "../../components/Footer";

// --- IMAGES ARE NOW IMPORTED LOCALLY ---
// Hero Image
import bouncerHero from "../../assets/Bouncer.png";

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

const Bouncer = () => {
  const primary = "text-[#0b3d64]";
  const accentBg = "bg-[#1a9bb9]";
  const accentBgHover = "hover:bg-[#15849b]";
  const gradient = "bg-gradient-to-r from-[#0b3d64] to-[#084057]";

  // --- 1. HERO IMAGE UPDATED ---
  const heroSources = [bouncerHero];
  // ------------------------------

  // --- 2. LOGOS UPDATED ---
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
                Professional Security Services
              </p>

              <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Expert Bouncer & Door Supervisor Services
              </h1>

              <p className="mt-4 text-white/90 max-w-xl">
                Reliable, trained and licensed bouncers to manage entry-control,
                crowd safety, guest screening and venue security. Trusted by
                hotels, clubs, events and private venues for professional conduct
                and rapid incident response.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+911234567890"
                  className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-medium ${accentBg} ${accentBgHover} text-white shadow-lg`}
                >
                  <Phone size={18} /> Call Now
                </a>

                <a
                  href="mailto:info@shyama-securities.com?subject=Bouncer%20Service%20Inquiry"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-medium bg-white text-[#0b3d64] hover:bg-white/90 shadow"
                >
                  <Mail size={18} /> Email Us
                </a>
              </div>

              <div className="mt-6 text-sm text-white/80">
                <span className="font-semibold">Available:</span> 24/7 · On-site or
                contract · Nationwide
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              {/* --- IMAGE CONTAINER FIX --- */}
              {/* Added bg-gray-900 to make blank spaces blend in */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900">
                <SmartImage
                  sources={heroSources}
                  alt="Professional bouncers guarding entrance"
                  // --- IMAGE FIT FIX ---
                  // Changed to 'object-contain' to guarantee the head is never cut.
                  className="w-full h-64 md:h-80 lg:h-[380px] object-contain"
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
                  Bouncer Services — What We Offer
                </h2>
                <p className="mt-4 text-gray-700 max-w-prose">
                  Our professionally trained bouncers ensure smooth entry control,
                  reduce risk, manage crowd behavior, and maintain a safe
                  environment for guests and staff. Each team member is
                  background-checked, certified in conflict de-escalation, and
                  trained in first aid.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Crowd Management</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Organizing queues, controlling entry flow, and handling
                      peak-hour crowds safely and professionally.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Guest Screening</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      ID checks, bag searches, and ensuring only authorized guests
                      gain access—keeping your venue compliant and secure.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Incident Response</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Fast, calm response to incidents with incident logging and
                      coordination with emergency services when required.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm">
                    <h3 className="font-semibold text-[#0b3d64]">Customer Relations</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Trained to protect patrons and property while maintaining a
                      respectful and professional demeanor.
                    </p> 
                  </div>
                </div>

                {/* Why choose us */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-[#0b3d64]">Why choose our bouncers?</h3>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Licensed & Insured",
                      "First Aid & Crowd Control Certified",
                      "Background-checked professionals",
                      "Uniformed & Discreet",
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
                  <h3 className="text-xl font-bold text-[#0b3d64]">Our Deployment Process</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Step 1 */}
                    <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm bg-white">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-full ${accentBg} text-white`}>
                          <ClipboardList size={20} />
                        </span>
                        <h4 className="font-semibold text-lg text-[#0b3d64]">1. Site Assessment</h4>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        We start with a full consultation to understand your venue, risk factors, crowd size, and specific entry-control requirements.
                      </p>
                    </div>
                    {/* Step 2 */}
                    <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm bg-white">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-full ${accentBg} text-white`}>
                          <Users size={20} />
                        </span>
                        <h4 className="font-semibold text-lg text-[#0b3d64]">2. Team Selection</h4>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        We hand-pick a team of licensed, background-checked bouncers with the right temperament and experience for your specific event or venue.
                      </p>
                    </div>
                    {/* Step 3 */}
                    <div className="p-5 rounded-xl border border-[#e6f6fa] shadow-sm bg-white">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-full ${accentBg} text-white`}>
                          <ShieldCheck size={20} />
                        </span>
                        <h4 className="font-semibold text-lg text-[#0b3d64]">3. On-Site Operations</h4>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        Our team arrives briefed and uniformed, managed by a supervisor who coordinates with you and ensures all procedures are followed.
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
                    <p className="text-sm text-gray-500">Need Bouncers Now?</p>
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
                    href="mailto:info@shyama-securities.com?subject=Bouncer%20Service%20Inquiry"
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
                  We provide short-term and long-term staffing — send details for a tailored quote.
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
                      className="max-h-10 w-auto object-contain "
                    />
                  </div>
                ))}
              </div>
            </motion.section>
            {/* ------------------------------------ */}

            {/* --- FAQ SECTION UPDATED --- */}
            <motion.section variants={item} className="mt-12">
              <h3 className="text-xl font-bold text-[#0b3d64]">Frequently asked questions</h3>
              <div className="mt-4 space-y-4">
                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">Are your bouncers licensed?</summary>
                  <p className="mt-2 text-gray-700">Yes — all team members are licensed and background-checked.</p>
                </details>

                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">Can you scale staff for large events?</summary>
                  <p className="mt-2 text-gray-700">Absolutely — we have teams ready for events from 50 to 50,000 attendees.</p>
                </details>

                {/* --- NEW FAQ 1 --- */}
                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">What training do your bouncers have?</summary>
                  <p className="mt-2 text-gray-700">Our bouncers are trained in conflict de-escalation, crowd management, first aid/CPR, and local licensing requirements. They are prepared to handle situations professionally and safely.</p>
                </details>

                {/* --- NEW FAQ 2 --- */}
                <details className="p-4 border rounded-lg">
                  <summary className="font-medium text-[#0b3d64] cursor-pointer">Do your bouncers wear a uniform?</summary>
                  <p className="mt-2 text-gray-700">Yes, our staff typically wear a professional, all-black uniform. We can also accommodate specific dress codes (like suits or black-tie) to match your event's style.</p>
                </details>
                
              </div>
            </motion.section>
            {/* --------------------------- */}
          </motion.div>
        </main>

        {/* Footer CTA */}
        <footer className="bg-[#f8feff] border-t border-white/60">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm text-gray-600">Ready to secure your venue?</div>
              <div className="mt-2 text-lg font-semibold text-[#0b3d64]">Book our professional bouncers today</div>
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

export default Bouncer;