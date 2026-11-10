import { site } from "@/config/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Roadmap() {
  return (
    <section className="section roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
      <div className="shell">
        <SectionHeading id="roadmap-title" label="Roadmap" title="What could come next." description="A proposed path for the BlackX story. Stages are direction, not dated commitments." />
        <Reveal className="roadmap-grid" delay={0.08}>
          {site.roadmap.map((stage, index) => <article className="roadmap-stage" key={stage.title}>
            <span className="roadmap-index">0{index + 1}</span>
            <div className="roadmap-stage-content"><h3>{stage.title}</h3><p>{stage.description}</p></div>
            <span className="roadmap-arrow" aria-hidden="true">↗</span>
          </article>)}
        </Reveal>
        <p className="roadmap-note">Plans may change as the project develops.</p>
      </div>
    </section>
  );
}
