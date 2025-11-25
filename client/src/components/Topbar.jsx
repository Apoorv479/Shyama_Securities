import {  Mail, Phone } from "lucide-react";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-60 bg-linear-to-r from-[#0b3d64] to-[#084057] text-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 md:h-12 items-center justify-between text-xs md:text-sm">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+917982668153"
              className="flex items-center gap-1.5 hover:text-[#1a9bb9] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">+91-7982668153</span>
              <span className="sm:hidden">+91-7982668153</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <a
              href="info.shyamamanpowersolution1@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#1a9bb9] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">info.shyamamanpowersolution1@gmail.com</span>
              <span className="sm:hidden">info.shyamamanpowersolution1@gmail.com</span>
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Topbar;

