import "./RaceCalendar.css";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import calendarData from "../../data/calendarData";
import SectionTitle from "../UI/SectionTitle";

function RaceCalendar() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const districts = [
    "All",
    ...new Set(calendarData.map((item) => item.district)),
  ];

  const filteredData = useMemo(() => {
    let data = [...calendarData];

    if (search) {
      data = data.filter((item) =>
        item.event.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (district !== "All") {
      data = data.filter((item) => item.district === district);
    }

    data.sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });

    return data;
  }, [search, district, sortOrder]);

  return (
    <section className="calendar section" id="calendar">
      <div className="container">

        <SectionTitle
          title="Race Calendar"
          subtitle="Explore upcoming Kambala events across Coastal Karnataka."
        />

        <div className="calendar-controls">

          <input
            type="text"
            placeholder="Search Event..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            {districts.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Oldest First</option>
            <option value="desc">Newest First</option>
          </select>

        </div>

        <div className="calendar-table-wrapper">

          <table className="calendar-table">

            <thead>
              <tr>
                <th>Event</th>
                <th>Village</th>
                <th>District</th>
                <th>Date</th>
                <th>Status</th>
                <th>Venue</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.map((item) => (

                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >

                  <td>{item.event}</td>
                  <td>{item.village}</td>
                  <td>{item.district}</td>

                  <td>
                    {new Date(item.date).toLocaleDateString("en-IN")}
                  </td>

                  <td>
                    <span className="status upcoming">
                      {item.status}
                    </span>
                  </td>

                  <td>{item.venue}</td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default RaceCalendar;