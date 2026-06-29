import "./Events.css";

import { motion } from "framer-motion";
import eventsData from "../../data/eventsData";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";

function Events() {
  return (
    <section className="events section" id="events">
      <div className="container">

        <SectionTitle
          title="Famous Kambala Events"
          subtitle="Experience the most celebrated Kambala races across Coastal Karnataka."
        />

        <div className="events-grid">

          {eventsData.map((event) => (

            <motion.article
              key={event.id}
              className="event-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >

              <div className="event-image-wrapper">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />

                <div className="event-overlay">
                  <span>{event.district}</span>
                </div>

              </div>

              <div className="event-content">

                <h3>{event.title}</h3>

                <p className="event-location">
                  📍 {event.village}, {event.district}
                </p>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-buttons">

                  <a
                    href={event.maps}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>
                      Google Maps
                    </Button>
                  </a>

                  <Button variant="secondary">
                    Learn More
                  </Button>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Events;