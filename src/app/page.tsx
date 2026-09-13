import { Agents } from "@/components/Agents";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Home } from "@/components/Home";
import { HowItWorks } from "@/components/HowItWorks";
import { LogoBar } from "@/components/LogoBar";
import { OpenLayer } from "@/components/OpenLayer";
import { Tracks } from "@/components/Tracks";

export default function Page() {
  return (
    <Home>
      <Header />
      <Hero />
      <LogoBar />
      <Tracks />
      <Agents />
      <OpenLayer />
      <HowItWorks />
      <Cta />
      <Footer />
    </Home>
  );
}
