import { motion } from "motion/react";

function ProjectImage({
  src,
  alt,
  className = ""
}) {
  return (
    <motion.figure
      className={`project-image ${className}`}
      initial={{
        opacity: 0,
        y: 25
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: 0.55
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
      />
    </motion.figure>
  );
}

export default ProjectImage;