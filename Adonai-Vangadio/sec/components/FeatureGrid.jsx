import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">

      {items.map((item, index) => (

        <motion.article
          key={item.title}
          className="feature-grid-card"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.04
          }}
        >

          <div className="feature-grid-top">

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />

          </div>

          <div className="feature-grid-content">

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </div>

        </motion.article>

      ))}

    </div>
  );
}

export default FeatureGrid;