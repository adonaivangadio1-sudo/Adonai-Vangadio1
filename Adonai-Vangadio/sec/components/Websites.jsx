import { motion } from "motion/react";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Code2
} from "lucide-react";

import InternalPageHero from "../components/InternalPageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";

const projects = [
  {
    image: "/images/projeto-1.png",
    category: "Restaurant · Web",
    title: "AV Restaurant",
    href: "https://adonai-vangadio-restaurant.vercel.app/index.html"
  },
  {
    image: "/images/projeto-2.png",
    category: "Studio · Web",
    title: "Adonai Vangadio",
    href: "/"
  },
  {
    image: "/images/projeto-3.png",
    category: "Product · Marketplace",
    title: "AV Market",
    href: "https://adonaivangadio1-sudo-adonai-vangadi.vercel.app/index.html"
  }
];

const features = [
  {
    title: "UX",
    description:
      "Arquitetura e fluxos simples, orientados para tarefas reais."
  },
  {
    title: "UI",
    description:
      "Interfaces com hierarquia, contraste e identidade própria."
  },
  {
    title: "Responsive",
    description:
      "Layouts adaptados para telemóvel, tablet e desktop."
  },
  {
    title: "Front-end",
    description:
      "Tecnologia organizada para facilitar evolução e manutenção."
  },
  {
    title: "Performance",
    description:
      "Estrutura leve e decisões visuais sem excesso."
  },
  {
    title: "Entrega",
    description:
      "Projeto organizado para manutenção e publicação."
  }
];

function Websites() {
  return (
    <section className="internal-page portfolio-page">

      <InternalPageHero
        eyebrow="02 · Web"
        title="Experiências digitais que"
        highlight="fazem sentido."
        description="Websites pensados para apresentar marcas, facilitar ações e criar uma experiência consistente em qualquer ecrã."
      />

      <section className="internal-section">

        <div className="container">

          <SectionHeader
            eyebrow="Projetos digitais"
            title="Experiências construídas para a web."
            description="Uma seleção de experiências desenvolvidas pela Adonai Vangadio."
          />

          <div className="project-showcase">

            {projects.map((project, index) => (

              <motion.a
                key={project.title}
                href={project.href}
                className="showcase-project"
                target={
                  project.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  project.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
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
                  duration: 0.55,
                  delay: index * 0.06
                }}
              >

                <div className="showcase-project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </span>

                </div>

                <div className="showcase-project-info">

                  <div>
                    <small>
                      {project.category}
                    </small>

                    <h3>
                      {project.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />

                </div>

              </motion.a>

            ))}

          </div>

        </div>

      </section>

      <section className="internal-section muted-section">

        <div className="container">

          <SectionHeader
            eyebrow="Construído para ser usado"
            title="Design e tecnologia no mesmo sistema."
            description="A experiência precisa funcionar tanto visualmente como tecnicamente."
          />

          <FeatureGrid items={features} />

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <SectionHeader
            eyebrow="Do briefing ao browser"
            title="Um processo pensado para a web."
          />

          <div className="process-rail">

            <div className="process-item">
              <span>01</span>
              <Monitor size={19} strokeWidth={1.4} />
              <h3>Estrutura</h3>
              <p>
                Conteúdo, páginas e navegação.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <Smartphone size={19} strokeWidth={1.4} />
              <h3>Interface</h3>
              <p>
                Direção visual, componentes e responsive.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <Code2 size={19} strokeWidth={1.4} />
              <h3>Build</h3>
              <p>
                React, CSS, JavaScript e integrações.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <ArrowUpRight size={19} strokeWidth={1.4} />
              <h3>QA</h3>
              <p>
                Testes, ajustes e preparação para publicação.
              </p>
            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Websites;