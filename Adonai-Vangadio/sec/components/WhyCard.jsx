import {
  ArrowUpRight
} from "lucide-react";

function WhyCard({
  number,
  title,
  description
}) {
  return (
    <article className="why-card">

      <div className="why-card-header">

        <span>
          {number}
        </span>

        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
        />

      </div>

      <div className="why-card-body">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>

    </article>
  );
}

export default WhyCard;