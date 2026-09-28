import { motion } from "motion/react";

import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

function Sobre() {
  return (
    <section className="internal-page">

      <div className="container">

        <motion.div
          className="internal-hero"
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
            SOBRE A ADONAI VANGADIO
          </span>

          <h1>
            Criatividade,
            <br />
            design e tecnologia.
          </h1>

          <p>
            Criamos soluções digitais e visuais
            que transformam ideias em experiências
            modernas, funcionais e com identidade.
          </p>

        </motion.div>

        <div className="internal-content-grid">

          <motion.div
            className="internal-image"
            initial={{
              opacity: 0,
              x: -25
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <img
              src="/images/equipe.png"
              alt="Adonai Vangadio"
              loading="lazy"
            />

          </motion.div>

          <motion.div
            className="internal-copy"
            initial={{
              opacity: 0,
              x: 25
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <SectionHeader
              eyebrow="A nossa visão"
              title="Pensar antes de criar."
              description="Cada projeto procura encontrar o equilíbrio entre estética, estratégia e funcionalidade."
            />

            <Button
              href="/#contacto"
              type="primary"
            >
              Iniciar projeto
            </Button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Sobre;