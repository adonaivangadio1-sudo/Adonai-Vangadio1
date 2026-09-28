import { motion } from "motion/react";

import HorizontalRail from "../components/HorizontalRail";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";

import { services } from "../data/services";

function Services() {
  return (
    <section
      id="servicos"
      className="services-section"
    >

      <div className="container">

        <SectionHeader
          eyebrow="O que fazemos"
          title="Soluções com intenção."
          description="Criamos experiências visuais e digitais pensadas para comunicar com clareza."
        />

      </div>

      <HorizontalRail
        className="services-rail"
        snap={true}
        controls={true}
      >

        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="service-rail-item"
            initial={{
              opacity: 0,
              x: 35
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
              delay: index * 0.04
            }}
          >
            <ServiceCard
              number={service.number}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}

      </HorizontalRail>

    </section>
  );
}

export default Services;