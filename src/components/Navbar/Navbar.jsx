import "./Navbar.css";
import { useState, useEffect } from "react";
import navigationLinks from "../../data/navigation";
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [darkMode, setDarkMode]   = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const docH    = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setScrollPct(docH > 0 ? Math.min((scrollY / docH) * 100, 100) : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function onResize() { if (window.innerWidth > 768) setMenuOpen(false); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress">
        <div className="scroll-progress-fill" style={{ width: `${scrollPct}%` }} />
      </div>

      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-emblem">🐃</span>
            <span className="logo-word">
              <span className="logo-main">KAMBALA</span>
              <span className="logo-sub">Coastal Karnataka</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="nav-menu" aria-label="Main navigation">
            {navigationLinks.map((item) => (
              <a key={item.id} href={item.path} className="nav-link">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search">
              <FaSearch />
            </button>
            <button
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <a href="#register" className="nav-cta">Register Now</a>

            <button
              className={`menu-btn ${menuOpen ? "menu-btn--open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          {navigationLinks.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#register" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            Register Now
          </a>
        </div>

      </header>
    </>
  );
}

export default Navbar;