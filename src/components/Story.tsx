import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const beats = [
  { number: "01", title: "The blackout", copy: "Everything familiar goes quiet. One switch falls to OFF." },
  { number: "02", title: "The flip", copy: "At that same instant, another switch moves to ON." },
  { number: "03", title: "The legend", copy: "For the XRP community, that second switch echoes the long-running $589 XRP legend." },
];

export function Story() {
  return (
    <section className="section story-section" id="story" aria-labelledby="story-title">
      <div className="shell">
        <SectionHeading id="story-title" label="The story" title="The moment the lights go out." description="BlackX is built around one simple idea: when one thing ends, another begins." />
        <Reveal className="story-grid" delay={0.08}>
          <div className="story-statement"><span className="story-rule" /><p>OFF <span>is only<br />half the story.</span></p><span className="story-on">ON</span></div>
          <div className="story-beats">
            {beats.map((beat) => <article className="story-beat" key={beat.number}>
              <span className="beat-number">{beat.number}</span>
              <div><h3>{beat.title}</h3><p>{beat.copy}</p></div>
            </article>)}
          </div>
        </Reveal>
        <p className="story-note">$589 XRP is a community meme and speculative price target, never a promised outcome.</p>
      </div>
    </section>
  );
}
