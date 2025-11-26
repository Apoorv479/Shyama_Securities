// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Footer from "../components/Footer";

// --- STEP 1: IMPORT YOUR IMAGES ---
// (Assuming your images are in 'src/assets/')
// (Update these paths/filenames if they are different!)
import bouncerImg from '../assets/bouncer-placeholder.png';
import securityGuardImg from '../assets/security-placeholder.png';
import housekeepingImg from '../assets/housekeeping-placeholder.png';
import industrialImg from '../assets/industrial-placeholder.png';
import logisticsImg from '../assets/logistics-placeholder.png';
import officeSupportImg from '../assets/office-support-placeholder.png';
import pantryBoyImg from '../assets/pantryboy-placeholder.png';
import receptionistImg from '../assets/receptionist-placeholder.png';
import dataEntryImg from '../assets/dataentry-placeholder.png';

/**
 * Services.jsx
 * - Images are now imported from the 'src' folder
 */

// This ImageWithFallback component is no longer needed
// because React's 'import' handles fallbacks during the build.
// We will use a standard <img> tag.

// --- STEP 2: USE THE IMPORTED VARIABLES IN THE ARRAY ---
const services = [
  {
    title: "Bouncer",
    slug: "bouncer",
    description: "Licensed and trained bouncers for professional event security, crowd management, and access control at clubs, venues, and private parties.",
    image: bouncerImg,
  },
  {
    title: "Security Guard",
    slug: "security-guard",
    description: "Licensed security guards for 24/7 site safety, access control, and premise monitoring for corporate, residential, and industrial properties.",
    image: securityGuardImg,
  },
  {
    title: "Housekeeping",
    slug: "housekeeping",
    description: "Reliable housekeeping teams for commercial, residential, and industrial cleaning. We ensure top standards of hygiene and maintenance.",
    image: housekeepingImg,
  },
  {
    title: "Industrial Workforce",
    slug: "industrial-workforce",
    description: "Skilled industrial workforce including machine operators, technicians, and supervisors for manufacturing, assembly lines, and site operations.",
    image: industrialImg,
  },
  {
    title: "Logistics Staff",
    slug: "logistics-staff",
    description: "Experienced logistics staff for loading, unloading, sorting, and warehouse management. Trained in safe material handling.",
    image: logisticsImg,
  },
  {
    title: "Office Support Staff",
    slug: "office-support-staff",
    description: "Professional office support staff, including office boys, helpers, and supervisors, to ensure smooth daily administrative operations.",
    image: officeSupportImg,
  },
  {
    title: "Pantry Boy",
    slug: "pantry-boy",
    description: "Courteous and hygienic pantry staff for managing office refreshments, kitchen inventory, and maintaining pantry upkeep.",
    image: pantryBoyImg,
  },
  {
    title: "Receptionist",
    slug: "receptionist",
    description: "Articulate and professional receptionists for front-desk management, visitor handling, and administrative assistance.",
    image: receptionistImg,
  },
  {
    title: "Data Entry Operator",
    slug: "data-entry-operator",
    description: "Accurate and efficient data entry operators for high-volume digitization, data processing, and database management tasks.",
    image: dataEntryImg,
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-white pt-28"> {/* Navbar padding fix */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b3d64]">
              Our Services
            </h1>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide a wide range of professional staffing solutions tailored to your business needs. Click on any service below to learn more about our offerings.
            </p>
          </header>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="group block rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                aria-label={`View ${svc.title} service`}
              >
                <div className="flex flex-col h-full">
                  {/* ADJUSTMENT 1: Increased height from h-52 to h-80 to fit full bodies 
                  */}
                  <div className="relative w-full h-80 overflow-hidden bg-gray-100">
                    {/* Updated to use a standard img tag with the imported src */}
                    <img
                      src={svc.image}
                      alt={`${svc.title} image`}
                      /* ADJUSTMENT 2: Added 'object-top' to ensure heads are not cut off 
                      */
                      className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* ADJUSTMENT 3: Reduced padding from p-6 to p-4 to minimize white space
                  */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#0b3d64] group-hover:text-[#1a9bb9] transition-colors">
                        {svc.title}
                      </h2>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-50">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1a9bb9] group-hover:underline">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* --- FOOTER CTA --- */}
          <div className="mt-16 bg-linear-to-r from-[#f0f9ff] to-white border border-[#e0f2fe] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#0b3d64]">Not sure what you need?</h3>
              <p className="mt-2 text-gray-600 max-w-lg">
                Contact our expert team today. We’ll analyze your requirements and recommend the perfect staffing solution for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-[#1a9bb9] hover:bg-[#15849b] text-white shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+91-7982668153"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-[#0b3d64] border-2 border-[#e6f6fa] hover:border-[#1a9bb9] hover:bg-[#f8feff] transition-all active:scale-95"
              >
                <Phone size={18} className="text-[#1a9bb9]" /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}