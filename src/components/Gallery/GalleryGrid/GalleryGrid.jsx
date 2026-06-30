import "./GalleryGrid.css";

import { motion } from "framer-motion";

import Card from "../../UI/Card";

function GalleryGrid({
  images,
  onImageClick,
}) {
  return (
    <section className="gallery-grid section">

      <div className="container">

        <div className="gallery-grid-container">

          {images.map((item) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              <Card
                image={item.image}
                title={item.title}
                subtitle={item.location}
              >

                <button
                  className="gallery-view-btn"
                  onClick={() => onImageClick(item)}
                >
                  View Image
                </button>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryGrid;