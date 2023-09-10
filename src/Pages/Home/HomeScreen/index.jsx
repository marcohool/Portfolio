import About from "../About";
import HeroSection from "../HeroSection";
import Portfolio from "../Portfolio";
import Skills from "../Skills";

export default function Home() {
   return (
      <>
         <HeroSection />
         <Skills />
         <About />
         <Portfolio />
      </>
   )
}