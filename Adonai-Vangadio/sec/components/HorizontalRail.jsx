import { useRef } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

function HorizontalRail({
  children,
  className = "",
  snap = true,
  controls = true
}) {
  const railRef = useRef(null);

  const scroll = (direction) => {
    if (!railRef.current) return;

    const amount = railRef.current.clientWidth * 0.72;

    railRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth"
    });
  };

  return (
    <div className={`horizontal-rail ${className}`}>

      <div className="horizontal-rail-top">

        {controls && (
          <div className="rail-controls">

            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Anterior"
              className="rail-control"
            >
              <ChevronLeft
                size={15}
                strokeWidth={1.6}
              />
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Seguinte"
              className="rail-control"
            >
              <ChevronRight
                size={15}
                strokeWidth={1.6}
              />
            </button>

          </div>
        )}

      </div>

      <motion.div
        ref={railRef}
        className={`horizontal-rail-track ${
          snap ? "horizontal-rail-snap" : ""
        }`}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
      >
        {children}
      </motion.div>

    </div>
  );
}

export default HorizontalRail;