import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContractAddress } from "./ContractAddress";

const steps = [
  { number: "01", title: "Follow the official channels", copy: "Get launch details directly from the BlackX community links below." },
  { number: "02", title: "Verify the details", copy: "Check the announced network, contract address, and trading venue before taking action." },
  { number: "03", title: "XRP pair confirmed", copy: "BlackX will be paired with XRP. Exact buying steps will be shared when the network and trading venue are announced." },
];

export function HowToBuy() {
  return (
    <section className="section buy-section" id="how-to-buy" aria-labelledby="buy-title">
      <div className="shell">
      <div className="buy-layout">
        <div className="buy-intro"><SectionHeading id="buy-title" label="How to buy" title="Be ready for the signal." description="The XRP pair is confirmed. The contract, network and trading route will be shared when verified." /><a className="text-link" href="#community">Find the community <span aria-hidden="true">↗</span></a></div>
        <Reveal className="buy-steps" delay={0.08}>
          {steps.map((step) => <article className="buy-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}
          <div className="buy-status"><span className="status-line" /><p>Network, contract and trading method pending official confirmation.</p></div>
        </Reveal>
      </div>
      <div className="ca-row"><ContractAddress placement="buy" /></div>
      </div>
    </section>
  );
}
