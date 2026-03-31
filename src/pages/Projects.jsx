import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectFooter from "../components/projects/ProjectCardFooter";

const Projects = () => {
  const projects = [
    {
      image1: "/images/work 1.jpg",
      image2: "/images/work 2.png",
    },
    {
      image1: "/images/know 1.jpg",
      image2: "/images/last 1.jpg",
    },
    {
      image1: "/images/heart.png",
      image2: "/images/last 2.gif",
    },
    {
      image1: "/images/work 2.png",
      image2: "/images/know 1.jpg",
    },
    {
      image1: "/images/last 1.jpg",
      image2: "/images/work 1.jpg",
    },
    {
      image1: "/images/last 2.gif",
      image2: "/images/heart.png",
    },
    {
      image1: "/images/know 1.jpg",
      image2: "/images/work 2.png",
    },
    {
      image1: "/images/work 1.jpg",
      image2: "/images/last 1.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".hero", {
      height: "50px",
      stagger: {
        amount: 0.1,
      },
      scrollTrigger: {
        trigger: ".projects",
        scrub: 1,
        start: "top 100%",
        end: "top -150%",
      },
    });
  });

  return (
    <div className="pt-4 bg-white">
      {/* header */}
      <div className=" pt-[49vh] flex items-start">
        <h2 className="pl-2 font-[font2] text-[10.5vw] uppercase leading-none text-black">
          Projets
        </h2>
        <h2 className="font-[font2] text-[3vw] uppercase leading-none text-black pt-[1vw]">
          16
        </h2>
      </div>
      {/* projects */}
      <div className="-mt-8 projects">
        {projects.map(function (elem, index, idx) {
          return (
            <div key={idx} className="hero w-full h-[650px]  flex mb-2 gap-2">
              <ProjectCard
                key={index}
                image1={elem.image1}
                image2={elem.image2}
              />{" "}
            </div>
          );
        })}
      </div>
      {/* footer */}
      <ProjectFooter />
    </div>
  );
};

export default Projects;
