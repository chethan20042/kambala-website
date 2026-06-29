import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";
import { motion } from "framer-motion";
import Button from "../UI/Button";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left — Content Panel */}
      <div className="hero-content">

        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-dot" />
          Coastal Karnataka's Living Heritage
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          KAMBALA
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          The ancient buffalo race that unites tradition, community, and the
          spirit of Tulu Nadu — alive for over 800 years.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <Button variant="primary">
            Explore History
          </Button>

          <Button variant="secondary">
            View Gallery
          </Button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat">
            <span className="stat-number">800+</span>
            <span className="stat-label">Years of Tradition</span>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Annual Events</span>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Spectators per Race</span>
          </div>
        </motion.div>

      </div>

      {/* Right — Image Panel */}
      <motion.div
        className="hero-image-panel"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Kambala buffalo race in action"
          className="hero-image"
        />

        <div className="image-badge">
          <span className="badge-icon">🐃</span>
          <span>Kambala Season 2026</span>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;