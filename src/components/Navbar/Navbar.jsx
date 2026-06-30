import "./Navbar.css";

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import navigationLinks from "../../data/navigation";

import { FaSearch, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollY > 60);

      setScrollPct(
        docH > 0
          ? Math.min((scrollY / docH) * 100, 100)
          : 0
      );
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", onResize);

    return () =>
      window.removeEventListener("resize", onResize);
  }, []);

  const handleNavigation = (item) => {
    setMenuOpen(false);

    // Open normal pages
    if (item.type === "page") {
      navigate(item.path);
      return;
    }

    // Home button
    if (item.type === "home") {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Scroll sections
    const id = item.path.replace("/#", "");

    // Already on Home page
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Coming from another page
    navigate(`/#${id}`);
  };

  return (
    <>
      <div className="scroll-progress">
        <div
          className="scroll-progress-fill"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      <header
        className={`navbar ${
          scrolled ? "navbar--scrolled" : ""
        }`}
      >
        <div className="navbar-inner">

          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logo-emblem">🐃</span>

            <span className="logo-word">
              <span className="logo-main">
                KAMBALA
              </span>

              <span className="logo-sub">
                Coastal Karnataka
              </span>
            </span>
          </Link>

          <nav className="nav-menu">
            {navigationLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                className="nav-link"
                onClick={() => handleNavigation(item)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <button
              className="icon-btn"
              aria-label="Toggle Theme"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              type="button"
              className="nav-cta"
              onClick={() => handleNavigation({ type: "page", path: "/register" })}
            >
              Register Now
            </button>

            <button
              type="button"
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

        <div
          className={`mobile-menu ${
            menuOpen
              ? "mobile-menu--open"
              : ""
          }`}
        >
          {navigationLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              className="mobile-link"
              onClick={() => handleNavigation(item)}
            >
              {item.name}
            </button>
          ))}

          <button
            type="button"
            className="mobile-cta"
            onClick={() => {
              setMenuOpen(false);
              handleNavigation({ type: "page", path: "/register" });
            }}
          >
            Register Now
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;