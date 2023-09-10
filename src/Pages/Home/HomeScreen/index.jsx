import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

export default function Home() {
   return (
      <>
         <HeroSection />
         <Skills />
         <About />
         <Portfolio />
         <Contact />
         <Footer />
      </>
   )
}