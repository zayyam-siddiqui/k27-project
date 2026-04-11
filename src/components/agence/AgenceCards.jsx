import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AgenceCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cardsData = [
    {
      id: 1,
      image: 'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
      title: 'Stratégie Créative',
      description: 'Nous développons des stratégies innovantes qui transforment votre vision en réalité. Notre approche holistique garantit une cohérence totale dans tous les aspects de votre marque.',
    },
    {
      id: 2,
      image: 'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
      title: 'Design Exceptionnel',
      description: 'Chaque pixel compte. Nous créons des designs qui captivent, engagent et convertissent. Nos créations reflètent l\'essence unique de votre marque.',
    },
    {
      id: 3,
      image: 'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
      title: 'Contenu Captivant',
      description: 'Les histoires puissantes créent des connexions émotionnelles durables. Nous tisserons votre narration de marque avec authenticité et créativité.',
    },
    {
      id: 4,
      image: 'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
      title: 'Campagnes Digitales',
      description: 'À l\'ère numérique, votre présence en ligne est primordiale. Nous créons des campagnes qui résonnent, engagent et inspirent votre audience.',
    },
    {
      id: 5,
      image: 'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
      title: 'Branding Stratégique',
      description: 'Un brand fort est un actif intemporel. Nous construisons des identités de marque mémorables qui se démarquent dans un marché compétitif.',
    },
  ];

  useGSAP(function () {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top ${20 + index * 15}%`,
          end: `top ${10 + index * 15}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Card entrance and stacking animation
      tl.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
      }, 0)
        .to(
          card,
          {
            y: -index * 60,
            rotation: index * 2,
            duration: 1,
          },
          0
        );

      // Text content animation
      const textElements = card.querySelectorAll('.card-text');
      tl.from(
        textElements,
        {
          opacity: 0,
          x: 50,
          stagger: 0.2,
          duration: 0.8,
        },
        0.2
      );
    });
  });

  return (
    <div ref={containerRef} className="relative w-full min-h-screen py-20">
      <div className="relative h-[800px]">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute inset-0 w-full h-[600px] top-[100px]"
          >
            <div className="flex items-center justify-center gap-12 h-full px-8">
              {/* Card Image */}
              <div className="flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Text Content */}
              <div className="flex-1 max-w-[500px]">
                <div className="card-text">
                  <h3 className="font-[font2] text-5xl mb-6 text-[#d3fd50]">
                    {card.title}
                  </h3>
                </div>
                <div className="card-text">
                  <p className="font-[font1] text-2xl leading-relaxed text-white">
                    {card.description}
                  </p>
                </div>
                <div className="card-text mt-8">
                  <button className="font-[font2] text-xl uppercase border-2 border-[#d3fd50] text-[#d3fd50] px-8 py-4 rounded-full hover:bg-[#d3fd50] hover:text-black transition-all duration-300">
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to allow scrolling through all cards */}
      <div className="h-[1200px]" />
    </div>
  );
};

export default AgenceCards;
