import react from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ExamCards from "../components/ExamCards";
import SelectionSection from "../components/SelectionSection";
import Director from "../components/Director";
/* import Library from "../components/Library"; */
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ExamCards />
        <SelectionSection />
        <Director />
        {/*  <Library /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
