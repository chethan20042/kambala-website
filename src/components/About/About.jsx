import "./About.css";

import { motion } from "framer-motion";

import aboutData from "../../data/aboutData";
import SectionTitle from "../UI/SectionTitle";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionTitle
          title="About Kambala"
          subtitle="Discover the heritage, culture, and spirit behind Karnataka's most iconic buffalo race."
        />

        <div className="about-grid">
          {aboutData.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className="about-card"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="about-icon-wrapper">
                  <Icon className="about-icon" />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;