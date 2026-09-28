import { motion } from "motion/react";

function PortfolioFilters({
  categories,
  activeCategory,
  onChange
}) {
  return (
    <div className="portfolio-filters">

      {categories.map((category) => {
        const active =
          activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            className={`portfolio-filter ${
              active
                ? "is-active"
                : ""
            }`}
            onClick={() =>
              onChange(category.id)
            }
          >

            {active && (
              <motion.span
                layoutId="portfolio-filter-active"
                className="portfolio-filter-active"
              />
            )}

            <span>
              {category.label}
            </span>

          </button>
        );
      })}

    </div>
  );
}

export default PortfolioFilters;