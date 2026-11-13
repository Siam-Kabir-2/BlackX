import Image from "next/image";
import { ContractAddress } from "./ContractAddress";
import { HeroUpdates } from "./HeroUpdates";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="BlackX: One switch off, another switch on">
      <picture className="hero-image">
        <source media="(max-width: 767px)" srcSet="/hero-mobile-scene.webp" />
        <img src="/hero-desktop.webp" alt="A city skyline in darkness with a narrow current of light" fetchPriority="high" />
      </picture>
      <div className="hero-shade" />
      <div className="hero-inner shell">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="status-line" /> The BlackX moment</p>
          <h1 id="hero-title">One switch <em>off.</em><br />Another switch <em>on.</em></h1>
          <p className="hero-lede">The world goes dark. The XRP legend lights up. BlackX is the moment between the two.</p>
          <div className="hero-actions">
            <a className="button button--light" href="#switch">Flip the switch <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#story">Discover the story <span aria-hidden="true">↗</span></a>
          </div>
          <ContractAddress placement="hero" />
          <HeroUpdates />
        </div>
        <div className="hero-emblem" aria-hidden="true">
          <Image src="/blackx-emblem.png" alt="" width={520} height={520} priority />
        </div>
      </div>
      <div className="hero-mobile-layout">
        <div className="hero-mobile-intro">
          <Image className="hero-mobile-mark" src="/blackx-emblem.png" alt="" width={120} height={120} priority />
          <p className="hero-mobile-kicker"><span />The BlackX Moment<span /></p>
          <h1>One switch off.<br />Another switch <em>on.</em></h1>
          <p className="hero-mobile-lede">The world goes dark. The XRP legend lights up.<br />BlackX is the moment between the two.</p>
        </div>
        <div className="hero-mobile-bottom">
          <a className="hero-mobile-flip" href="#switch"><span>Flip the switch</span><span aria-hidden="true">›</span></a>
          <div className="hero-mobile-link-row">
            <a className="hero-mobile-buy" href="#how-to-buy">Buy BLACKX <span aria-hidden="true">›</span></a>
            <div className="hero-mobile-socials" role="group" aria-label="BlackX social channels">
              <a href={site.socials[0].href} target="_blank" rel="noopener noreferrer" aria-label="BlackX on X"><Image src="/icons/x-logo.svg" alt="" width={24} height={24} /></a>
              <a href={site.socials[2].href} target="_blank" rel="noopener noreferrer" aria-label="BlackX on Telegram"><Image src="/icons/telegram-logo.svg" alt="" width={24} height={24} /></a>
              <a href={site.socials[1].href} target="_blank" rel="noopener noreferrer" aria-label="BlackX on Discord"><Image src="/icons/discord-logo.svg" alt="" width={24} height={24} /></a>
            </div>
          </div>
          <div className="hero-mobile-status">
            <div><span>Launch status</span><strong>Coming soon</strong><small>{site.launchDate}</small></div>
            <div><span>Target narrative</span><strong><span aria-hidden="true">✕</span> 589</strong></div>
          </div>
          <p className="hero-mobile-signal"><span />The 589 Signal<span /></p>
        </div>
      </div>
    </section>
  );
}
