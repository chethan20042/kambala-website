import "./History.css";

import { motion } from "framer-motion";

import historyData from "../../data/historyData";
import SectionTitle from "../UI/SectionTitle";

function History() {
  return (
    <section className="history section" id="history">
      <div className="container">
        <SectionTitle
          title="History of Kambala"
          subtitle="A journey through centuries of tradition, culture, and celebration."
        />

        <div className="timeline">
          {historyData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-content">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default History;