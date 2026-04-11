import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ContactInfo = () => {
  useGSAP(() => {
    gsap.from('.info-item', {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.6,
    });
  });

  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="info-item">
        <h3 className="text-[#d3fd50] font-[font2] text-4xl mb-4 uppercase">Email</h3>
        <p className="font-[font1] text-2xl text-white hover:text-[#d3fd50] transition-colors">
          <a href="mailto:hello@k27.ca">hello@k27.ca</a>
        </p>
      </div>

      <div className="info-item">
        <h3 className="text-[#d3fd50] font-[font2] text-4xl mb-4 uppercase">Téléphone</h3>
        <p className="font-[font1] text-2xl text-white hover:text-[#d3fd50] transition-colors">
          <a href="tel:+1234567890">+1 (514) 000-0000</a>
        </p>
      </div>

      <div className="info-item">
        <h3 className="text-[#d3fd50] font-[font2] text-4xl mb-4 uppercase">Adresse</h3>
        <p className="font-[font1] text-2xl text-white">
          Montreal, QC<br />
          Canada
        </p>
      </div>

      <div className="info-item">
        <h3 className="text-[#d3fd50] font-[font2] text-4xl mb-4 uppercase">Réseaux</h3>
        <div className="flex gap-6">
          <a href="#" className="font-[font2] text-2xl uppercase border-2 border-white text-white hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors p-2">
            FB
          </a>
          <a href="#" className="font-[font2] text-2xl uppercase border-2 border-white text-white hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors p-2">
            IG
          </a>
          <a href="#" className="font-[font2] text-2xl uppercase border-2 border-white text-white hover:text-[#d3fd50] hover:border-[#d3fd50] transition-colors p-2">
            IN
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
