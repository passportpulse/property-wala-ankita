import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";
import { Sparkles } from "lucide-react";
import logo1 from "../assets/logo_img.png";
import logo2 from "../assets/logo_text.png";
import Container from "./layout/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for dynamic styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-poppins ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-linear-to-r from-coral-red via-soft-orange to-warm-yellow py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-end gap-1">
          {/* Image Logo */}
          <img
            src={logo1}
            alt="Property Wala Bhaiya Logo"
            className={`h-16 w-auto object-contain transition-all duration-300 ${
              scrolled ? "filter brightness-0" : "filter brightness-100"
            }`}
          />

          {/* Text Logo */}
          <img
            src={logo2}
            alt="Property Wala Bhaiya Logo"
            className={`h-10 w-auto object-contain transition-all duration-300 ${
              scrolled ? "filter brightness-0" : "filter brightness-100"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) => `
                relative text-sm font-semibold uppercase tracking-wide transition-all duration-200
                ${scrolled ? "text-slate-700 hover:text-coral-red" : "text-white hover:text-warm-yellow"}
                ${isActive ? "after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-current" : ""}
              `}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-4">
          <Link
            to="/property-wala-bhaiya"
            className={`
              hidden lg:flex items-center gap-3 px-8 py-3 rounded-full font-black text-sm uppercase tracking-[0.25em] 
              transition-all duration-500 shadow-lg hover:shadow-coral-red/20 active:scale-95 group relative
              ${scrolled ? "bg-coral-red text-white" : "bg-white text-coral-red"}
            `}
          >
            <div className="relative z-10 flex items-center gap-2">
              <Sparkles
                size={14}
                className={scrolled ? "text-warm-yellow" : "text-coral-red"}
              />
              <span className="flex items-center gap-1.5">
                Join Our Network
              </span>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute w-full transition-all duration-500 ease-in-out border-b border-slate-100 ${
          open
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <Container className="bg-white shadow-2xl py-6 space-y-4">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                block text-lg font-bold uppercase tracking-wider pb-2 border-b border-slate-50 transition-colors
                ${isActive ? "text-coral-red" : "text-slate-800"}
              `}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/property-wala-bhaiya"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-3 w-full bg-linear-to-r from-coral-red to-soft-orange text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
          >
            <Sparkles size={16} className="text-warm-yellow" />
            Join Our Network
          </Link>
        </Container>
      </div>
    </header>
  );
}
