import { site } from "@/config/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContractAddress } from "./ContractAddress";

export function Tokenomics() {
  const [remaining, team, marketing] = site.tokenomics;
  const firstStop = remaining.percentage;
  const secondStop = remaining.percentage + team.percentage;

  return (
    <section className="section tokenomics-section" id="tokenomics" aria-labelledby="tokenomics-title">
      <div className="shell">
        <SectionHeading id="tokenomics-title" label="Tokenomics" title="A clear starting split." description="Three allocations. One open decision. Final supply details will be shared when confirmed." />
        <Reveal className="tokenomics-layout" delay={0.08}>
          <div className="token-chart" role="img" aria-label={site.tokenomics.map((item) => `${item.label} ${item.percentage}%`).join(", ")} style={{ background: `conic-gradient(#e8eaed 0 ${firstStop}%, #9ea3ab ${firstStop}% ${secondStop}%, #555b65 ${secondStop}% 100%)` }}>
            <div className="token-chart-inner"><span>BLACKX</span><strong>100<small>%</small></strong><span>ALLOCATION</span></div>
          </div>
          <div className="token-list">
            {[remaining, team, marketing].map((item, index) => <div className="token-row" key={item.label}>
              <span className={`token-swatch token-swatch--${index}`} aria-hidden="true" />
              <div><h3>{item.label}</h3>{index === 0 && <p>Purpose to be confirmed</p>}</div>
              <strong>{item.percentage}%</strong>
            </div>)}
            <p className="token-footnote">The purpose of the remaining supply will be announced when confirmed. Allocations may be updated before launch.</p>
          </div>
        </Reveal>
        <div className="ca-row"><ContractAddress placement="tokenomics" /></div>
      </div>
    </section>
  );
}
