import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import gsap from "gsap";
import { useGSAP} from "@gsap/react";

function Hero() {
  // const words=[{
  //     text:"Ideas", imgPath:"/images/ideas.svg",
  //     text:"Concepts", imgPath:"/images/concepts.svg"
  // }]

   useGSAP(()=>{
    gsap.fromTo(".hero-text h1",{
        y:50,
        opacity:0
    },{
        y:0,
        opacity:1,
        stagger:0.2,
        duration:1,
        ease:"power2.inOut"
    })
   })

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
              Shaping
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
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          <p className="text-white-50 text-md max relative z-10 pointer-events-none">
            Hi, I’m Aditya, a developer based in Noida with a passion for
            solving problem through code.
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
    </section>
  );
}

export default Hero;
