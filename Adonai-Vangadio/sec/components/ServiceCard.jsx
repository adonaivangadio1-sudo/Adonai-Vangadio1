import { ArrowUpRight } from "lucide-react";

function ServiceCard({
  number,
  title,
  description
}) {
  return (
    <article className="service-card">

      <div className="service-card-top">

        <span className="service-number">
          {number}
        </span>

        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
        />

      </div>

      <div className="service-card-content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>

      <div className="service-card-line" />

    </article>
  );
}

export default ServiceCard;