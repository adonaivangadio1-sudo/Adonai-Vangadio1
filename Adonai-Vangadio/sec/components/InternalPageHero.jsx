import { motion } from "motion/react";

function InternalPageHero({
  eyebrow,
  title,
  highlight,
  description
}) {
  return (
    <section className="internal-hero-section">

      <div className="container">

        <div className="internal-hero-grid">

          <motion.div
            className="internal-hero-content"
            initial={{
              opacity: 0,
              y: 25
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
          >

            <span className="eyebrow">
              {eyebrow}
            </span>

            <h1>
              {title}

              {highlight && (
                <>
                  {" "}
                  <em>{highlight}</em>
                </>
              )}
            </h1>

          </motion.div>

          <motion.p
            className="internal-hero-description"
            initial={{
              opacity: 0,
              x: 25
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
          >
            {description}
          </motion.p>

        </div>

      </div>

    </section>
  );
}

export default InternalPageHero;