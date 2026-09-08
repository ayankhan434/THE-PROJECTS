import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import SelectedWork from "../components/home/SelectedWork";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import AboutPreview from "../components/home/AboutPreview";
import WhyUs from "../components/home/WhyUs";
import Testimonials from "../components/home/Testimonials";
import FinalCTA from "../components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SelectedWork />
      <Services />
      <Process />
      <AboutPreview />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}