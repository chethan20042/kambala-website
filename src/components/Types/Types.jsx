import "./Types.css";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import typesData from "../../data/typesData";

function Types() {
  return (
    <section className="types section" id="types">
      <div className="container">
        <SectionTitle
          title="Types of Kambala"
          subtitle="Explore the unique race formats that have evolved over centuries."
        />

        <div className="types-grid">
          {typesData.map((type) => (
            <motion.article
              key={type.id}
              className="type-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={type.image}
                alt={type.title}
                className="type-image"
              />

              <div className="type-content">
                <h3>{type.title}</h3>

                <p>{type.description}</p>

                <span>{type.fact}</span>

                <button className="learn-btn">
                  Learn More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Types;