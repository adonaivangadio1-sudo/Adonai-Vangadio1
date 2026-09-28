import InternalPageHero from "../components/InternalPageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";

const socialItems = [
  {
    title: "Planeamento",
    description:
      "Calendário, temas, objetivos e formatos."
  },
  {
    title: "Conteúdo",
    description:
      "Peças visuais e textos alinhados à marca."
  },
  {
    title: "Publicação",
    description:
      "Organização e consistência ao longo do mês."
  },
  {
    title: "Comunidade",
    description:
      "Proximidade e resposta ao público."
  },
  {
    title: "Análise",
    description:
      "Leitura de métricas e comportamento."
  },
  {
    title: "Otimização",
    description:
      "Ajustes para melhorar a comunicação."
  }
];

function MidiasSociais() {
  return (
    <section className="internal-page portfolio-page">

      <InternalPageHero
        eyebrow="04 · Mídias Sociais"
        title="Presença digital com"
        highlight="consistência."
        description="Planeamos, criamos e organizamos conteúdos para que a marca tenha uma voz visual coerente e relevante."
      />

      <section className="internal-section">

        <div className="container">

          <div className="manifesto-large">

            <span className="eyebrow">
              Mais do que publicar
            </span>

            <h2>
              Uma presença social forte
              precisa de direção, ritmo
              e identidade.
            </h2>

          </div>

        </div>

      </section>

      <section className="internal-section muted-section">

        <div className="container">

          <SectionHeader
            eyebrow="Serviço"
            title="Uma presença pensada como marca."
            description="Cada peça deve fazer parte de uma linguagem visual reconhecível."
          />

          <FeatureGrid items={socialItems} />

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <SectionHeader
            eyebrow="Fluxo"
            title="O nosso fluxo."
          />

          <div className="process-rail">

            <div className="process-item">
              <span>01</span>
              <h3>Descoberta</h3>
              <p>
                Objetivos e público.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>Planeamento</h3>
              <p>
                Calendário e direção.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Produção</h3>
              <p>
                Conteúdo e design.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>Leitura</h3>
              <p>
                Resultados e evolução.
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
                Mídias Sociais
              </span>

              <h2>
                Vamos dar consistência
                à sua presença.
              </h2>
            </div>

            <a
              href="/#contacto"
              className="button"
            >
              Iniciar conversa
            </a>

          </div>

        </div>

      </section>

    </section>
  );
}

export default MidiasSociais;