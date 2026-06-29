import "./SectionTitle.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="section-heading">
        {title}
      </h2>

      <p className="section-subtitle">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;