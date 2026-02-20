import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";
import { User } from "lucide-react";
import logo1 from "../assets/logo_img.png";
import logo2 from "../assets/logo_text.png";
import Container from "./layout/Container";

/* =========================
   LOGO COMPONENT
========================= */
function NavbarLogo({ scrolled }) {
  const logoStyle = `transition-all duration-300 ${
    scrolled ? "filter brightness-0" : "filter brightness-100"
  }`;

  return (
    <Link to="/" className="flex items-end lg:items-center gap-2">
      <img
        src={logo1}
        alt="Logo"
        className={`h-12 lg:h-16 w-auto ${logoStyle}`}
      />
      <img
        src={logo2}
        alt="Logo"
        className={`h-8 lg:h-9 w-auto ${logoStyle}`}
      />
    </Link>
  );
}
function DesktopUser({ scrolled }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className={`
        hidden lg:flex
        items-center justify-center
        w-10 h-10
        rounded-full
        border
        transition-all duration-300
        shadow-sm
        hover:bg-dark-orange hover:text-white hover:border-dark-orange hover:shadow-md
        ${
          scrolled
            ? "text-dark-orange border-dark-orange bg-white"
            : "text-white border-white/40 bg-white/10 backdrop-blur-md"
        }
      `}
    >
      <User size={20} strokeWidth={2.5} />
    </button>
  );
}

/* =========================
   DESKTOP NAV LINKS (VERTICALLY CENTERED)
========================= */
function DesktopNav({ scrolled }) {
  return (
    <nav className="hidden lg:flex items-center gap-10 h-full">
      {navigationLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            `relative text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
              scrolled
                ? "text-slate-600 hover:text-dark-orange"
                : "text-white hover:text-warm-yellow"
            } ${
              isActive
                ? "after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-current"
                : ""
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

function MobileActions({ open, setOpen, scrolled }) {
  const navigate = useNavigate();
  return (
    <div
      className={`
        lg:hidden flex items-center gap-1
        px-1.5 py-0.5
        rounded-full
        border
        shadow-lg
        transition-all duration-300
        bg-white

        ${scrolled ? " border-dark-orange" : " border-slate-100"}
      `}
    >
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center justify-center
          w-9 h-9 rounded-full
          transition-all duration-300
          hover:bg-dark-orange hover:text-white
          text-dark-orange
        `}
      >
        <div className="w-5 h-4 relative flex items-center justify-center">
          <span
            className={`absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>

      {/* Divider */}
      <div className={`w-px h-5 bg-warm-yellow`} />

      {/* User Login */}
      <button
        onClick={() => navigate("/dashboard")}
        className={`
          flex items-center justify-center
          w-9 h-9 rounded-full
          transition-all duration-300
          hover:bg-dark-orange hover:text-white
          text-dark-orange
        `}
      >
        <User size={19} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function MobileMenu({ open, setOpen }) {
  return (
    <div className="lg:hidden absolute top-full left-0 w-full z-100">
      <div
        className={`
          bg-gray-50 shadow-lg border border-gray-200 rounded-b-4xl
          flex flex-col items-start pl-4 gap-5
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? "max-h-125 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
      >
        {navigationLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-gray-900 text-base uppercase tracking-wide transition-colors duration-200 hover:text-dark-orange ${
                isActive ? "text-dark-orange" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

/* =========================
   MAIN NAVBAR
========================= */
export default function Navbar({ promoVisible }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = `sticky z-50 transition-all duration-300 font-poppins ${
    scrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
      : "bg-linear-to-r from-dark-orange via-lighter-orange to-warm-yellow py-4"
  } ${promoVisible ? "md:top-0 top-10 mb-8 lg:mb-0" : "top-0"}`;

  return (
    <header className={headerStyle}>
      <Container className="flex items-end lg:items-center justify-between">
        <NavbarLogo scrolled={scrolled} />

        <div className="flex items-center gap-6">
          <DesktopNav scrolled={scrolled} />
          <DesktopUser scrolled={scrolled} />
        </div>

        <div className="flex items-end gap-4">
          <MobileActions open={open} setOpen={setOpen} scrolled={scrolled} />
        </div>
      </Container>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
