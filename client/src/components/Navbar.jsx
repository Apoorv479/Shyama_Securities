import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";

const services = [
  { name: "Security Guard", path: "/services/security-guard" },
  { name: "Bouncer", path: "/services/bouncer" },
  { name: "Industrial Workforce", path: "/services/industrial-workforce" },
  { name: "Office Support Staff", path: "/services/office-support-staff" },
  { name: "Pantry Boy", path: "/services/pantry-boy" },
  { name: "House Keeping", path:"/services/housekeeping" },
  { name: "Data Entry Operator", path: "/services/data-entry-operator" },
  { name: "Receptionist", path: "/services/receptionist" },
  { name: "Logistics Staff", path: "/services/logistics-staff" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-10 md:top-12 left-0 right-0 z-50 bg-linear-to-r from-[#d4f1f8] via-[#c8eef5] to-[#d4f1f8] backdrop-blur-md shadow-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex py-4 items-center justify-between">
          
          {/* LOGO + COMPANY NAME */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center transition-transform hover:scale-110">
              <img src={logo} alt="Company Logo" className="h-16 w-auto sm:h-18 md:h-20" />
            </Link>

            {/* COMPANY NAME */}
            <Link to="/" className="hidden sm:block">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0b3d64] tracking-wide">
                <span className="text-[#0b3d64]">Shyama</span>{" "}
                <span className="text-[#0b3d64]">Manpower</span>{" "}
                <span className="text-[#0b3d64]">Solutions</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) => `relative text-[17px] font-medium text-[#0b3d64] transition-all hover:text-[#1a9bb9] px-5
                after:absolute after:-bottom-2 after:left-5 after:h-[3px] after:w-[calc(100%-2.5rem)] after:scale-x-0 after:bg-[#1a9bb9]
                after:origin-left after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100
                ${isActive ? "text-[#1a9bb9] after:scale-x-100" : ""}`}
              end
            >
              Home
            </NavLink>

            <div className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) => `flex items-center gap-1.5 relative text-[17px] font-medium text-[#0b3d64] transition-all hover:text-[#1a9bb9] px-5
                  ${isActive ? "text-[#1a9bb9]" : ""}`}
              >
                Services <ChevronDown className="h-4 w-4" />
              </NavLink>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-5 mt-3 w-72 rounded-lg bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 ease-out">
                <div className="py-2">
                  {services.map((s) => (
                    <NavLink
                      key={s.path}
                      to={s.path}
                      className={({ isActive }) => `block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#1a9bb9]/10 ${isActive ? "text-[#1a9bb9]" : "text-[#0b3d64]"}`}
                    >
                      {s.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) => `relative text-[17px] font-medium text-[#0b3d64] transition-all hover:text-[#1a9bb9] px-5
                after:absolute after:-bottom-2 after:left-5 after:h-[3px] after:w-[calc(100%-2.5rem)] after:scale-x-0 after:bg-[#1a9bb9]
                after:origin-left after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100
                ${isActive ? "text-[#1a9bb9] after:scale-x-100" : ""}`}
            >
              About
            </NavLink>

            <NavLink
              to="/career"
              className={({ isActive }) => `relative text-[17px] font-medium text-[#0b3d64] transition-all hover:text-[#1a9bb9] px-5
                after:absolute after:-bottom-2 after:left-5 after:h-[3px] after:w-[calc(100%-2.5rem)] after:scale-x-0 after:bg-[#1a9bb9]
                after:origin-left after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100
                ${isActive ? "text-[#1a9bb9] after:scale-x-100" : ""}`}
            >
              Career
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `relative text-[17px] font-medium text-[#0b3d64] transition-all hover:text-[#1a9bb9] px-5
                after:absolute after:-bottom-2 after:left-5 after:h-[3px] after:w-[calc(100%-2.5rem)] after:scale-x-0 after:bg-[#1a9bb9]
                after:origin-left after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100
                ${isActive ? "text-[#1a9bb9] after:scale-x-100" : ""}`}
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="rounded-lg bg-[#1a9bb9] px-5 py-2.5 text-[17px] font-medium text-white shadow-lg transition-all hover:bg-[#15849b] hover:shadow-xl ml-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0b3d64] transition-colors hover:bg-[#1a9bb9]/10 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="border-t border-gray-100 bg-white shadow-xl px-4 pb-4 pt-2">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block rounded-md px-4 py-3 text-lg font-semibold transition-colors hover:bg-[#1a9bb9]/10 ${isActive ? "text-[#1a9bb9]" : "text-[#0b3d64]"}`}
              end
            >
              Home
            </NavLink>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between rounded-md px-4 py-3 text-lg font-semibold text-[#0b3d64] hover:bg-[#1a9bb9]/10"
            >
              <span>Services</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="ml-2">
                {services.map((s) => (
                  <NavLink
                    key={s.path}
                    to={s.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-[#1a9bb9]/10 ${isActive ? "text-[#1a9bb9]" : "text-[#0b3d64]"}`}
                  >
                    {s.name}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block rounded-md px-4 py-3 text-lg font-semibold transition-colors hover:bg-[#1a9bb9]/10 ${isActive ? "text-[#1a9bb9]" : "text-[#0b3d64]"}`}
            >
              About
            </NavLink>

            <NavLink
              to="/career"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block rounded-md px-4 py-3 text-lg font-semibold transition-colors hover:bg-[#1a9bb9]/10 ${isActive ? "text-[#1a9bb9]" : "text-[#0b3d64]"}`}
            >
              Career
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block rounded-md px-4 py-3 text-lg font-semibold transition-colors hover:bg-[#1a9bb9]/10 ${isActive ? "text-[#1a9bb9]" : "text-[#0b3d64]"}`}
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-[#1a9bb9] px-4 py-3 text-base font-semibold text-white text-center transition-colors hover:bg-[#15849b]"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
