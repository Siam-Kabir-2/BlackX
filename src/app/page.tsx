import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Switch } from "@/components/Switch";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { HowToBuy } from "@/components/HowToBuy";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><Story /><Switch /><Tokenomics /><Roadmap /><HowToBuy /><Community /></main><Footer /></>;
}
