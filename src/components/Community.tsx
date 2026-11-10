import { site } from "@/config/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Community() {
  return (
    <section className="section community-section" id="community" aria-labelledby="community-title">
      <div className="shell community-layout">
        <div><SectionHeading id="community-title" label="Community" title="Be there when it flips." description="The switch story belongs to the people watching it. Join the conversation." /></div>
        <Reveal className="social-list" delay={0.08}>
          {site.socials.map((social) => <a href={social.href} target="_blank" rel="noopener noreferrer" className="social-row" key={social.label}><span><strong>{social.label}</strong><small>{social.handle}</small></span><span aria-hidden="true">↗</span></a>)}
        </Reveal>
      </div>
    </section>
  );
}
