import Image from "next/image";
import { ContractAddress } from "./ContractAddress";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <picture className="hero-image">
        <source media="(max-width: 767px)" srcSet="/hero-mobile.webp" />
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
        </div>
        <div className="hero-emblem" aria-hidden="true">
          <Image src="/blackx-emblem.png" alt="" width={520} height={520} priority />
        </div>
      </div>
    </section>
  );
}
