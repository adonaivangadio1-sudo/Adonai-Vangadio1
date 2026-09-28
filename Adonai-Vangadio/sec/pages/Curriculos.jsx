import InternalPageHero from "../components/InternalPageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";
import ProjectImage from "../components/ProjectImage";

const materials = [
  {
    title: "Currículos",
    description:
      "Estrutura visual limpa e profissional para destacar experiência e competências."
  },
  {
    title: "Cartas",
    description:
      "Documentos personalizados para candidaturas e comunicação profissional."
  },
  {
    title: "Flyers",
    description:
      "Peças promocionais com hierarquia e impacto visual."
  },
  {
    title: "Apresentações",
    description:
      "Slides organizados para propostas, negócios e apresentações."
  },
  {
    title: "Documentos",
    description:
      "Materiais institucionais com identidade consistente."
  },
  {
    title: "Adaptações",
    description:
      "Formatos preparados para impressão e utilização digital."
  }
];

function Curriculos() {
  return (
    <section className="internal-page portfolio-page">

      <InternalPageHero
        eyebrow="05 · Materiais Profissionais"
        title="Apresentação profissional,"
        highlight="sem ruído."
        description="Criamos documentos e peças visuais que organizam informação e elevam a forma como uma pessoa ou negócio se apresenta."
      />

      <section className="internal-section muted-section">

        <div className="container">

          <SectionHeader
            eyebrow="Materiais"
            title="Materiais que trabalham por si."
            description="Design editorial para comunicar competências, propostas e informações de forma clara."
          />

          <FeatureGrid items={materials} />

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <SectionHeader
            eyebrow="Trabalho selecionado"
            title="Alguns exemplos."
          />

          <div className="portfolio-page-grid">

            <ProjectImage
              src="/images/portfolio/cv-01.png"
              alt="Currículo profissional"
            />

            <ProjectImage
              src="/images/portfolio/cv-02.png"
              alt="Currículo profissional"
            />

            <ProjectImage
              src="/images/portfolio/cv-03.png"
              alt="Currículo profissional"
            />

            <ProjectImage
              src="/images/portfolio/carta-01.png"
              alt="Carta de apresentação"
            />

            <ProjectImage
              src="/images/portfolio/carta-02.png"
              alt="Carta de apresentação"
            />

            <ProjectImage
              src="/images/portfolio/carta-03.png"
              alt="Carta de apresentação"
            />

          </div>

        </div>

      </section>

      <section className="internal-section">

        <div className="container">

          <div className="manifesto-large">

            <span className="eyebrow">
              Direção
            </span>

            <h2>
              Informação boa também
              precisa de boa apresentação.
            </h2>

            <p>
              O objetivo é reduzir o esforço de leitura,
              criar hierarquia e fazer cada documento
              parecer parte de uma identidade profissional.
            </p>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Curriculos;