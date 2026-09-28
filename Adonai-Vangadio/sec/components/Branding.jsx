import { motion } from "motion/react";

import InternalPageHero from "../components/InternalPageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";
import ProjectImage from "../components/ProjectImage";
import Button from "../components/Button";

const brandingItems = [
  {
    title: "Logótipo",
    description:
      "Construção de uma assinatura visual única e funcional."
  },
  {
    title: "Paleta",
    description:
      "Cores com função, contraste e coerência."
  },
  {
    title: "Tipografia",
    description:
      "Hierarquia e personalidade para diferentes aplicações."
  },
  {
    title: "Elementos",
    description:
      "Grafismos, padrões e recursos que ampliam a identidade."
  },
  {
    title: "Aplicações",
    description:
      "Materiais digitais e impressos preparados para utilização."
  },
  {
    title: "Direção",
    description:
      "Orientação para manter a marca consistente."
  }
];

function Branding() {
  return (
    <section
      id="branding"
      className="internal-page portfolio-page"
    >

      <InternalPageHero
        eyebrow="01 · Branding"
        title="Marcas com"
        highlight="presença."
        description="Construímos identidades que traduzem posicionamento em linguagem visual clara, memorável e consistente."
      />

      <section className="internal-section">

        <div className="container">

          <div className="internal-feature">

            <motion.div
              className="internal-feature-media"
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
                src="/images/logo-01.png"
                alt="Identidade visual Adonai Vangadio"
              />
            </motion.div>

            <motion.div
              className="internal-feature-copy"
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

              <span className="eyebrow">
                Case · Adonai Vangadio
              </span>

              <h2>
                Uma identidade criada
                para crescer.
              </h2>

              <p>
                O projeto da própria marca explora uma
                linguagem contemporânea, versátil e
                preparada para diferentes ambientes
                digitais.
              </p>

              <p>
                Da marca principal às aplicações,
                o objetivo é manter reconhecimento
                sem perder personalidade.
              </p>

              <Button href="/#contacto">
                Iniciar projeto
              </Button>

            </motion.div>

          </div>

        </div>

      </section>

      <section className="internal-section muted-section">

        <div className="container">

          <SectionHeader
            eyebrow="Sistema visual"
            title="O sistema por trás da marca."
            description="Mais do que um logótipo, uma identidade precisa funcionar como um conjunto."
          />

          <FeatureGrid items={brandingItems} />

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <SectionHeader
            eyebrow="Processo"
            title="Como construímos."
            description="Um processo curto, colaborativo e focado no resultado."
          />

          <div className="process-rail">

            <div className="process-item">
              <span>01</span>
              <h3>Descoberta</h3>
              <p>
                Marca, contexto, público e objetivos.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>Conceito</h3>
              <p>
                Direção visual e território criativo.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Construção</h3>
              <p>
                Identidade e sistema de aplicações.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>Entrega</h3>
              <p>
                Ficheiros e orientação de utilização.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <div className="premium-cta">

            <div>
              <span className="eyebrow">
                Branding
              </span>

              <h2>
                Vamos construir
                uma marca mais forte.
              </h2>
            </div>

            <Button
              href="/#contacto"
              type="secondary"
            >
              Solicitar projeto
            </Button>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Branding;