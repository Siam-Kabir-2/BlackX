import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContractAddress } from "./ContractAddress";
import { buyLink, site } from "@/config/site";

const steps = [
  { number: "01", title: "Follow the official channels", copy: "Get launch details directly from the BlackX community links below." },
  { number: "02", title: "Verify the details", copy: site.contractAddress ? "Match the contract address shown below with the announced network before trading." : "Check the announced network, contract address, and trading venue before taking action." },
  { number: "03", title: site.buyUrl ? "Use the official buy link" : "Buying route pending", copy: site.buyUrl ? "Follow the official link on this page and review the trading venue before confirming a transaction." : "Exact buying steps will be shared when the trading venue is announced." },
];

export function HowToBuy() {
  const description = site.buyUrl
    ? "The official buying route is linked below. Verify the contract address and network before trading."
    : site.contractAddress
      ? "The official contract address is below. The buying link will appear when verified."
      : "Contract and buying details will be shared when verified.";
  const status = site.buyUrl
    ? "The official buy link is available. Verify the contract address and network before trading."
    : site.contractAddress
      ? "Contract address published. The official buy link is still pending."
      : "Network, contract and trading method pending official confirmation.";

  return (
    <section className="section buy-section" id="how-to-buy" aria-labelledby="buy-title">
      <div className="shell">
      <div className="buy-layout">
        <div className="buy-intro"><SectionHeading id="buy-title" label="How to buy" title="Be ready for the signal." description={description} />{site.buyUrl ? <a className="button button--light" {...buyLink}>Buy now <span aria-hidden="true">↗</span></a> : <a className="text-link" href="#community">Find the community <span aria-hidden="true">↗</span></a>}</div>
        <Reveal className="buy-steps" delay={0.08}>
          {steps.map((step) => <article className="buy-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}
          <div className="buy-status"><span className="status-line" /><p>{status}</p></div>
        </Reveal>
      </div>
      <div className="ca-row"><ContractAddress placement="buy" /></div>
      </div>
    </section>
  );
}
