import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div className="footer-brand"><a className="brand" href="#top"><Image src="/blackx-emblem.png" alt="" width={34} height={34} /><span>BLACK<span className="brand-x">X</span></span></a><p>One switch OFF. Another switch ON.</p></div>
        <nav aria-label="Footer navigation"><a href="#story">Story</a><a href="#switch">The Switch</a><a href="#tokenomics">Tokenomics</a><a href="#roadmap">Roadmap</a><a href="#how-to-buy">How to Buy</a><a href="#community">Community</a></nav>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} BlackX</span><p>BlackX is a speculative crypto project. The XRP 589 legend is a community meme, not a guaranteed outcome. Nothing here is financial advice.</p></div>
    </footer>
  );
}
