import React from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const ProjectFooter = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  const handleContactClick = () => {
    navigate("/contact");
    handleScrollToTop();
  };

  const handleSocialClick = (platform) => {
    const links = {
      FB: "https://facebook.com",
      IG: "https://instagram.com",
      IN: "https://linkedin.com",
      BE: "https://behance.net",
    };
    if (links[platform]) {
      window.open(links[platform], "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="h-[65vh] w-full bg-black text-white flex flex-col justify-between p-4 md:p-8">
      <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-0">
        <div className="font-[font2] flex justify-between gap-2 md:gap-4 flex-wrap md:flex-nowrap">
          <button
            onClick={() => handleSocialClick("FB")}
            className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-4xl md:text-8xl font-[font2] border-2 rounded-full pt-2 px-3 md:px-6 text-white border-white font-bold transition-all duration-300 cursor-pointer"
            aria-label="Visit Facebook"
          >
            FB
          </button>
          <button
            onClick={() => handleSocialClick("IG")}
            className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-4xl md:text-8xl font-[font2] border-2 rounded-full pt-2 px-3 md:px-6 text-white border-white font-bold transition-all duration-300 cursor-pointer"
            aria-label="Visit Instagram"
          >
            IG
          </button>
          <button
            onClick={() => handleSocialClick("IN")}
            className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-4xl md:text-8xl font-[font2] border-2 rounded-full pt-2 px-3 md:px-6 text-white border-white font-bold transition-all duration-300 cursor-pointer"
            aria-label="Visit LinkedIn"
          >
            IN
          </button>
          <button
            onClick={() => handleSocialClick("BE")}
            className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-4xl md:text-8xl font-[font2] border-2 rounded-full pt-2 px-3 md:px-6 text-white border-white font-bold transition-all duration-300 cursor-pointer"
            aria-label="Visit Behance"
          >
            BE
          </button>
        </div>
        <button
          onClick={handleContactClick}
          className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-4xl md:text-8xl font-[font2] border-2 rounded-full pt-2 px-3 md:px-6 text-white border-white font-bold transition-all duration-300 cursor-pointer"
          aria-label="Go to Contact page"
        >
          Contact
        </button>
      </div>
      <div className="flex justify-between uppercase flex-col md:flex-row gap-4 md:gap-0">
        <div className="font-[font1] text-lg md:text-2xl">montreal</div>
        <div className="flex justify-between gap-4 md:gap-8 flex-wrap md:flex-nowrap text-xs md:text-sm">
          <button
            className="cursor-pointer font-[font1] hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors duration-300"
            aria-label="Privacy Policy"
          >
            Politique de confidentialité
          </button>
          <button
            className="cursor-pointer font-[font1] hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors duration-300"
            aria-label="Privacy Notice"
          >
            Avis de confidentialité
          </button>
          <button
            className="cursor-pointer font-[font1] hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors duration-300"
            aria-label="Ethics Report"
          >
            Rapport éthique
          </button>
          <button
            className="cursor-pointer font-[font1] hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors duration-300"
            aria-label="Consent Options"
          >
            options de consentement
          </button>
        </div>
        <button
          onClick={handleScrollToTop}
          className="font-[font1] text-lg md:text-2xl hover:text-[#d3fd50] transition-colors duration-300 cursor-pointer"
          aria-label="Scroll back to top"
        >
          retour en haut
        </button>
      </div>
    </div>
  );
};

export default ProjectFooter;
