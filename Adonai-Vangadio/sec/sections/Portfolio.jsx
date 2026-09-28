import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import HorizontalRail from "../components/HorizontalRail";
import SectionHeader from "../components/SectionHeader";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioFilters from "../components/PortfolioFilters";

import {
  portfolioCategories,
  portfolioProjects
} from "../data/portfolio";

function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("todos");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "todos") {
      return portfolioProjects;
    }

    return portfolioProjects.filter(
      (project) =>
        project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="portfolio-section"
    >

      <div className="container">

        <SectionHeader
          eyebrow="Trabalho selecionado"
          title="Projetos com identidade."
          description="Uma seleção de trabalhos desenvolvidos para diferentes necessidades, contextos e experiências."
        />

        <PortfolioFilters
          categories={portfolioCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

      </div>

      <AnimatePresence mode="wait">

        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            x: 25
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: -25
          }}
          transition={{
            duration: 0.3
          }}
        >

          <HorizontalRail
            className="portfolio-rail"
            snap={true}
            controls={true}
          >

            {filteredProjects.map(
              (project) => (
                <div
                  key={project.id}
                  className="portfolio-rail-item"
                >
                  <PortfolioCard
                    project={project}
                  />
                </div>
              )
            )}

          </HorizontalRail>

        </motion.div>

      </AnimatePresence>

    </section>
  );
}

export default Portfolio;