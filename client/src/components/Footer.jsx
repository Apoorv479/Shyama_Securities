import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b3d64] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Shyama Manpower Solutions Logo"
                className="h-16 w-auto sm:h-18 md:h-20"
              />
            </Link>
            <h2 className="text-2xl font-bold mb-2">Shyama Manpower Solutions Pvt. Ltd.</h2>
            <p className="text-[#cbd5e1] text-base mb-4 leading-relaxed">
              Delivering Trust, Safety & Excellence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/security-guard"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Security Guard Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/housekeeping"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Housekeeping Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bouncer"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Bouncers & Event Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/logistics-staff"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Logistics Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/industrial-workforce"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Industrial Workforce  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services/office-support-staff"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  Ofiice Support Staff Recruitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#1a9bb9] mt-0.5 shrink-0" />
                <span className="text-[#cbd5e1] text-base">
                3767, A2 Kanhaiya Nagar, New Delhi- 110035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#1a9bb9] shrink-0" />
                <a
                  href="tel:+918368686070"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                  +91-7982668153
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#1a9bb9] shrink-0" />
                <a
                  href="mailto:info@company.com"
                  className="text-[#cbd5e1] hover:text-[#1a9bb9] transition-colors text-base"
                >
                info.shyamamanpowersolution1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e4d7a] pt-6">
          <p className="text-center text-[#cbd5e1] text-base">
            © 2025 Shyama Manpower Solutions Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

