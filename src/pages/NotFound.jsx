import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ProjectFooter from '../components/projects/ProjectCardFooter';

gsap.registerPlugin(ScrollTrigger);

const NotFound = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const textRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .from(titleRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
        })
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          },
          '-=0.3'
        );
    },
    { scope: containerRef }
  );

  const handleGoHome = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.5,
      onComplete: () => navigate('/'),
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-[#171616] text-white flex flex-col">
      {/* Hero Section */}
      <div className="h-screen w-full flex flex-col items-center justify-center px-4 md:px-8">
        {/* 404 Text */}
        <div className="text-center">
          <h1
            ref={titleRef}
            className="font-[font2] text-[15vw] md:text-[12vw] leading-[0.8] mb-4 text-[#d3fd50] font-bold"
          >
            404
          </h1>
          <h2
            ref={textRef}
            className="font-[font2] text-4xl md:text-6xl uppercase mb-8 text-white"
          >
            Page non trouvée
          </h2>
          <p className="font-[font1] text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour continuer votre visite.
          </p>

          <button
            ref={buttonRef}
            onClick={handleGoHome}
            className="font-[font2] text-2xl md:text-4xl uppercase border-2 border-[#d3fd50] text-[#d3fd50] rounded-full px-8 md:px-12 py-4 md:py-6 hover:bg-[#d3fd50] hover:text-black transition-all duration-300 font-bold cursor-pointer"
          >
            Retour à l&apos;accueil
          </button>
        </div>
      </div>

      {/* Footer */}
      <ProjectFooter />
    </div>
  );
};

export default NotFound;
