import { NoiseTexture } from "./components/NoiseTexture";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { HowItWorks } from "./components/HowItWorks";
import { TenantBenefit } from "./components/TenantBenefit";
import { LiveDemo } from "./components/LiveDemo";
import { WhyDory } from "./components/WhyDory";
import { FAQ } from "./components/FAQ";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <NoiseTexture />
      <Hero />
      <Problem />
      <HowItWorks />
      <TenantBenefit />
      <LiveDemo />
      <WhyDory />
      <FAQ />
      <Waitlist />
      <Footer />
    </>
  );
}
