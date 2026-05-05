import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { PhoneIcon } from "./icons";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/verify-us", label: "Verify Us" },
  { to: "/contact", label: "Contact" },
];

type NavbarProps = {
  bannerVisible?: boolean;
};

export default function Navbar({ bannerVisible = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "is-scrolled" : ""} ${
          bannerVisible ? "navbar--with-banner" : ""
        }`}
      >
        <div className="container navbar__inner">
          <Link
            to="/"
            className="navbar__brand"
            aria-label="State Surplus Recovery, home"
          >
            <img src="/logo.png" alt="State Surplus Recovery" />
          </Link>

          <nav aria-label="Primary">
            <ul className="navbar__links">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.end}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__cta">
            <a href="tel:+18776004919" className="navbar__phone">
              <PhoneIcon size={16} />
              (877) 600-4919
            </a>
            <Link to="/contact" className="btn btn--crimson">
              Free Check
            </Link>
          </div>

          <button
            type="button"
            className={`navbar__hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-panel__overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`mobile-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-panel__cta">
          <span className="mobile-panel__cta-label">Call Us Anytime</span>
          <a href="tel:+18776004919" className="phone-link">
            <PhoneIcon size={18} /> (877) 600-4919
          </a>
          <Link to="/contact" className="btn btn--crimson">
            Free Check
          </Link>
        </div>
      </aside>
    </>
  );
}
