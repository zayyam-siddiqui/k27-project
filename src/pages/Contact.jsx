import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ProjectFooter from '../components/projects/ProjectCardFooter';

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.contact-hero', {
      height: '50px',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.contact-section',
        scrub: 1,
        start: 'top 100%',
        end: 'top -150%',
      },
    });
  });

  return (
    <div className="pt-4 bg-[#171616] text-white">
      {/* Header */}
      <div className="pt-[49vh] flex items-start pl-2">
        <h1 className="font-[font2] text-[10.5vw] uppercase leading-none text-white">
          Contact
        </h1>
      </div>

      {/* Contact Section */}
      <div className="contact-section -mt-8 px-4 md:px-12">
        <div className="contact-hero w-full py-20">
          <div className="max-w-4xl">
            <p className="font-[font1] text-2xl text-gray-300 mb-12">
              Vous avez un projet en tête? Contactez-nous pour discuter de vos idées.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="px-4 md:px-12 py-24 bg-black/30">
        <ContactInfo />
      </div>

      {/* Footer Section */}
      <ProjectFooter />
    </div>
  );
};

export default Contact;
