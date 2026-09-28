import { motion } from "motion/react";

import HorizontalRail from "../components/HorizontalRail";
import SectionHeader from "../components/SectionHeader";
import WhyCard from "../components/WhyCard";

import { whyAdonai } from "../data/whyAdonai";

function WhyAdonai() {
  return (
    <section
      id="porque"
      className="why-section"
    >

      <div className="container">

        <SectionHeader
          eyebrow="A nossa abordagem"
          title="Criatividade com direção."
          description="Uma experiência visual pensada para equilibrar estética, clareza e funcionalidade."
        />

      </div>

      <HorizontalRail
        className="why-rail"
        snap={false}
        controls={true}
      >

        {whyAdonai.map((item, index) => (
          <motion.div
            key={item.number}
            className="why-rail-item"
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
              amount: 0.3
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08
            }}
          >

            <WhyCard
              number={item.number}
              title={item.title}
              description={item.description}
            />

          </motion.div>
        ))}

      </HorizontalRail>

    </section>
  );
}

export default WhyAdonai;