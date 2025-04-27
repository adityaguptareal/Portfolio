import React, { useEffect } from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import gsap from "gsap";
import { useGSAP} from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
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
    <section id="hero" className="relative overflow-hidden">
    <div className="absolute top-0 left-0 z-10">
      <img src="/images/bg.png" alt="" />
    </div>

    <div className="hero-layout">
      {/* LEFT: Hero Content */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        <div className="flex flex-col gap-7">
          <div className="hero-text">
            <h1>
              Turning
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real world Solution</h1>
            <h1>that Solves your Problem</h1>
          </div>

          <p className="text-white-50 text-md max relative z-10 pointer-events-none">
          Hi, I’m Aditya, turning ideas into real solutions through code.
          </p>

          <Button
            text="See My Work"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
          />
        </div>
      </header>

      {/* RIGHT: 3D Model or Visual */}
      <figure>
        <div className="hero-3d-layout flex justify-center items-center">
          <HeroExperience />
        </div>
      </figure>
    </div>
    <AnimatedCounter/>
    </section>
  );
}

export default Hero;
