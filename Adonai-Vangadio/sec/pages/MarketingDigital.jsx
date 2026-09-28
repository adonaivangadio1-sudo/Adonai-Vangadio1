import InternalPageHero from "../components/InternalPageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";

const marketingItems = [
  {
    title: "Estratégia",
    description:
      "Objetivos, público, posicionamento e canais."
  },
  {
    title: "SEO",
    description:
      "Estrutura e conteúdo para melhorar descoberta orgânica."
  },
  {
    title: "Campanhas",
    description:
      "Planeamento de comunicação e publicidade online."
  },
  {
    title: "Conteúdo",
    description:
      "Mensagens e peças alinhadas à identidade da marca."
  },
  {
    title: "Métricas",
    description:
      "Acompanhamento de indicadores para aprender e otimizar."
  },
  {
    title: "Consultoria",
    description:
      "Orientação prática para decisões digitais melhores."
  }
];

function MarketingDigital() {
  return (
    <section className="internal-page portfolio-page">

      <InternalPageHero
        eyebrow="03 · Marketing Digital"
        title="Estratégia para transformar presença em"
        highlight="oportunidade."
        description="Planeamento digital orientado para aumentar visibilidade, aproximar públicos e criar crescimento sustentável."
      />

      <section className="internal-section muted-section">

        <div className="container">

          <SectionHeader
            eyebrow="Estratégia"
            title="O digital precisa de direção."
            description="Escolhemos canais e ações a partir do objetivo, não da tendência."
          />

          <FeatureGrid items={marketingItems} />

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <SectionHeader
            eyebrow="Método"
            title="Diagnosticar. Planear. Executar. Melhorar."
            description="Uma estratégia eficaz é construída em ciclos."
          />

          <div className="process-rail">

            <div className="process-item">
              <span>01</span>
              <h3>Diagnóstico</h3>
              <p>
                Onde está a marca hoje.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>Plano</h3>
              <p>
                O que precisa acontecer.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Ação</h3>
              <p>
                Execução das prioridades.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>Otimização</h3>
              <p>
                Aprender e melhorar.
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
                Marketing Digital
              </span>

              <h2>
                Vamos criar uma
                estratégia com propósito.
              </h2>
            </div>

            <a
              href="/#contacto"
              className="button"
            >
              Falar sobre o projeto
            </a>

          </div>

        </div>

      </section>

    </section>
  );
}

export default MarketingDigital;