import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function ProcessStep({
  number,
  title,
  description,
  index
}) {
  return (
    <motion.article
      className="process-step"
      initial={{
        opacity: 0,
        x: 25
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
        amount: 0.25
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06
      }}
    >
      <div className="process-step-top">
        <span>{number}</span>

        <ArrowRight
          size={15}
          strokeWidth={1.4}
        />
      </div>

      <div className="process-step-content">
        <h3>{title}</h3>

        <p>
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default ProcessStep;