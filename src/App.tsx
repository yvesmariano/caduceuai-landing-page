import { Agents } from "./components/Agents.tsx";
import { Cta } from "./components/Cta.tsx";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { HowItWorks } from "./components/HowItWorks.tsx";
import { LogoBar } from "./components/LogoBar.tsx";
import { OpenLayer } from "./components/OpenLayer.tsx";
import { Tracks } from "./components/Tracks.tsx";

export default function App() {
  return (
    <div id="top" className="page">
      <Header />
      <Hero />
      <LogoBar />
      <Tracks />
      <Agents />
      <OpenLayer />
      <HowItWorks />
      <Cta />
      <Footer />
    </div>
  );
}
