import React from "react";

const ProjectFooter = () => {
  return (
    <div className="h-[65vh] w-full bg-black text-white flex flex-col justify-between p-4">
      <div className="flex justify-between">
        <div className="font-[font2] flex justify-between gap-2">
          <div className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-8xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
            FB
          </div>
          <div className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-8xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
            IG
          </div>
          <div className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-8xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
            IN
          </div>
          <div className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-8xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
            BE
          </div>
        </div>
        <div className="hover:text-[#d3fd50] hover:border-[#d3fd50] uppercase text-8xl font-[font2] border-2 rounded-full pt-2 px-6 text-white border-white font-bold">
          Contact
        </div>
      </div>
      <div className="flex justify-between uppercase">
        <div className="font-[font1] text-2xl">montreal</div>
        <div className="flex justify-between gap-8">
          <div className="cursor-pointer font-[font1] text-l hover:text-[#d3fd50] hover:border-[#d3fd50]">
            Politique de confidentialité
          </div>
          <div className="cursor-pointer font-[font1] text-l hover:text-[#d3fd50] hover:border-[#d3fd50]">
            Avis de confidentialité
          </div>
          <div className="cursor-pointer font-[font1] text-l hover:text-[#d3fd50] hover:border-[#d3fd50]">
            Rapport éthique
          </div>
          <div className="cursor-pointer font-[font1] text-l hover:text-[#d3fd50] hover:border-[#d3fd50]">
            options de consentement
          </div>
        </div>
        <div className="font-[font1] text-2xl hover:text-[#d3fd50]">
          retour en haut
        </div>
      </div>
    </div>
  );
};

export default ProjectFooter;