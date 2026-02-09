import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigationLinks } from "../../constants/navigation";
import { Sparkles } from "lucide-react";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a scroll listener to make the header feel more dynamic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-poppins ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-linear-to-r from-coral-red via-soft-orange to-warm-yellow py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-3">
          {/* 1. The Logo */}
          <img
            src={logo}
            alt="Property Wala Bhaiya Logo"
            className="h-10 w-auto object-contain"
          />

          {/* 2. The Text Group */}
          <div className="flex items-baseline gap-1">
            <span
              className={`text-2xl font-black tracking-tighter transition-colors ${
                scrolled ? "text-coral-red" : "text-white"
              }`}
            >
              PROPERTY{" "}
              <span
                className={scrolled ? "text-soft-orange" : "text-warm-yellow"}
              >
                WALA
              </span>
            </span>

            <span
              className={`text-sm font-light ${
                scrolled ? "text-slate-500" : "text-white/80"
              }`}
            >
              Bhaiya
            </span>
          </div>
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
    hidden lg:flex items-center gap-3 px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.25em] 
    transition-all duration-500 shadow-lg hover:shadow-coral-red/20 active:scale-95 group relative
   
    bg-coral-red 
   
    text-white hover:bg-white hover:text-coral-red hover:border-coral-red
  `}
          >
            <div className="relative z-10 flex items-center gap-2">
              <Sparkles
                size={14}
                /* Icons swap colors on hover to stay visible */
                className={`transition-colors duration-500 ${scrolled ? "text-soft-orange" : "text-soft-orange group-hover:text-warm-yellow"}`}
              />
              <span className="flex items-center gap-1.5">
                Join us as a{" "}
                <span className="underline decoration-warm-yellow underline-offset-4 decoration-2">
                  Property Wala Bhaiya
                </span>{" "}
              </span>
            </div>

            {/* Subtle Internal Glow using Soft Orange on Hover */}
            <span className="absolute inset-0 bg-linear-to-r from-soft-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transform transition ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute w-full transition-all duration-300 ease-in-out ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="bg-white border-t border-slate-100 p-6 space-y-4 shadow-2xl">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-slate-800 hover:text-coral-red border-b border-slate-50 pb-2"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/property-wala-bhaiya"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-linear-to-r from-coral-red to-soft-orange text-white py-4 rounded-xl font-bold"
          >
            Join Us As Property Wala Bhaiya
          </Link>
        </div>
      </div>
    </header>
  );
}
