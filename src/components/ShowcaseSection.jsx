import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//for implementing gsap animations scrolltrigger
gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: (index + 1) * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);
  function handleProject(link) {
    return () => {
      window.open(link, "_blank", "noopener,noreferrer");
    };
  }

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full ">
        <div className="showcaselayout ">
          {/* Left Side */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div
              onClick={handleProject("https://brandneomedia.com/")}
              className=" cursor-pointer image-wrapper"
            >
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>Influencer Marketing Platform for BrandNeoMedia</h2>
              <p className="text-white-50 md:text-xl">
                A platform built to connect brands with influencers, enabling
                seamless collaboration and campaign management. Developed
                Wordpress.
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project cursor-pointer"
              onClick={handleProject("https://vitalaicure.web.app/")}
              ref={project2Ref}
            >
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Ai Healthcare Assistant</h2>
            </div>
            <div
              className="project cursor-pointer"
              
              onClick={handleProject("https://kidslearnifyr.web.app/")}
              ref={project3Ref}
            >
              <div
                className="image-wrapper hover:backdrop-brightness-75
               bg-[#ffe7eb]"
              >
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>Playschool Website</h2>
            </div>
          </div>
        </div>

    {/* Custom Project */}

    
      </div>
    </section>
  );
}

export default ShowcaseSection;
