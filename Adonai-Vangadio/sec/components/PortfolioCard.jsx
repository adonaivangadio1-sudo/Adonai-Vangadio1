import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function PortfolioCard({
  project
}) {
  return (
    <motion.a
      href={project.href}
      className="portfolio-card"
      whileHover={{
        y: -5
      }}
      transition={{
        duration: 0.3
      }}
    >

      <div className="portfolio-card-image">

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

        <span className="portfolio-card-overlay">
          <ArrowUpRight
            size={17}
            strokeWidth={1.5}
          />
        </span>

      </div>

      <div className="portfolio-card-info">

        <div>

          <span className="portfolio-card-category">
            {project.categoryLabel}
          </span>

          <h3>
            {project.title}
          </h3>

        </div>

        <ArrowUpRight
          className="portfolio-card-arrow"
          size={15}
          strokeWidth={1.5}
        />

      </div>

    </motion.a>
  );
}

export default PortfolioCard;