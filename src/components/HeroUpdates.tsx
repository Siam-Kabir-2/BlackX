import { site } from "@/config/site";

export function HeroUpdates() {
  const x = site.socials[0];
  const discord = site.socials[1];
  const telegram = site.socials[2];

  return <div className="hero-updates" aria-label="Join BlackX for fast updates">
    <span>Join for fast updates</span>
    <div>
      <a href={x.href} target="_blank" rel="noopener noreferrer">X <span aria-hidden="true">↗</span></a>
      <a href={discord.href} target="_blank" rel="noopener noreferrer">Discord <span aria-hidden="true">↗</span></a>
      <a href={telegram.href} target="_blank" rel="noopener noreferrer">Telegram <span aria-hidden="true">↗</span></a>
    </div>
  </div>;
}
