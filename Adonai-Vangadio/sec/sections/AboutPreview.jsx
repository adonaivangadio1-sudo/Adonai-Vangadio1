import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function AboutPreview() {
  return (
    <section
      id="sobre"
      className="about-preview-section"
    >
      <div className="container">

        <div className="about-preview">

          <motion.div
            className="about-preview-image"
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6
            }}
          >
            <img
              src="/images/equipe.png"
              alt="Adonai Vangadio"
              loading="lazy"
            />
          </motion.div>


          <motion.div
            className="about-preview-content"
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6,
              delay: 0.08
            }}
          >

            <span className="section-eyebrow">
              Sobre a Adonai Vangadio
            </span>

            <h2>
              Criatividade com
              direção.
            </h2>

            <p>
              Criamos soluções digitais e visuais
              que unem design, tecnologia e uma
              visão clara para cada projeto.
            </p>

            <a
              href="/sobre"
              className="section-link"
            >
              Conhecer a Adonai Vangadio

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;