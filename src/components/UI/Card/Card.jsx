import "./Card.css";

function Card({
  image,
  title,
  subtitle,
  description,
  children,
  className = "",
}) {
  return (
    <article className={`card ${className}`}>

      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="card-content">

        {subtitle && (
          <p className="card-subtitle">
            {subtitle}
          </p>
        )}

        <h3 className="card-title">
          {title}
        </h3>

        {description && (
          <p className="card-description">
            {description}
          </p>
        )}

        {children}

      </div>

    </article>
  );
}

export default Card;