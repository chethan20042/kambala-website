import "./GalleryFilter.css";

const categories = [
  "All",
  "Race",
  "Buffalo",
  "Crowd",
  "Night",
  "Awards",
  "Preparation",
];

function GalleryFilter({ activeCategory, setActiveCategory }) {
  return (
    <section className="gallery-filter">

      <div className="container">

        <div className="filter-buttons">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryFilter;