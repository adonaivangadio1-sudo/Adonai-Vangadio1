import HorizontalRail from "../components/HorizontalRail";
import SectionHeader from "../components/SectionHeader";
import ProcessStep from "../components/ProcessStep";

import { processSteps } from "../data/process";

function Process() {
  return (
    <section
      id="processo"
      className="process-section"
    >
      <div className="container">

        <SectionHeader
          eyebrow="Como trabalhamos"
          title="Da ideia à experiência."
          description="Um processo simples, pensado para manter direção, clareza e qualidade em cada etapa."
        />

      </div>

      <HorizontalRail
        className="process-home-rail"
        snap={true}
        controls={true}
      >
        {processSteps.map((step, index) => (
          <div
            key={step.number}
            className="process-home-item"
          >
            <ProcessStep
              {...step}
              index={index}
            />
          </div>
        ))}
      </HorizontalRail>

    </section>
  );
}

export default Process;