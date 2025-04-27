import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./sections/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./components/LogoSection";
import FeaturedCard from "./components/FeaturedCard";
import ExperienceSection from "./components/ExperienceSection";
import TechStack from "./components/TechStack";
import Testimonial from "./components/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize ScrollTrigger for animations
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturedCard />
      <ExperienceSection />
      <TechStack />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
