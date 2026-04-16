import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const StickyStackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cardsData = [
    {
      id: 1,
      title: 'Stratégie Créative',
      description: 'Nous développons des stratégies innovantes qui transforment votre vision en réalité. Notre approche holistique garantit une cohérence totale.',
      icon: '🎯',
    },
    {
      id: 2,
      title: 'Design Exceptionnel',
      description: 'Chaque pixel compte. Nous créons des designs qui captivent, engagent et convertissent votre audience.',
      icon: '✨',
    },
    {
      id: 3,
      title: 'Contenu Captivant',
      description: 'Les histoires puissantes créent des connexions émotionnelles durables avec votre audience.',
      icon: '📝',
    },
    {
      id: 4,
      title: 'Campagnes Digitales',
      description: 'À l\'ère numérique, votre présence en ligne est primordiale pour le succès de votre marque.',
      icon: '🚀',
    },
    {
      id: 5,
      title: 'Branding Stratégique',
      description: 'Un brand fort est un actif intemporel. Nous construisons des identités mémorables.',
      icon: '👑',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    cards.forEach((card, index) => {
      const vh = window.innerHeight;
      const startPixel = index * vh;
      const endPixel = (index + 1) * vh;

      // Card entrance animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${startPixel}px`,
          end: `top+=${startPixel + vh * 0.4}px`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
      });

      // Title animation
      const title = card.querySelector('.card-title');
      if (title) {
        gsap.from(title, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${startPixel + 50}px`,
            end: `top+=${startPixel + vh * 0.3}px`,
            scrub: 1.2,
          },
          opacity: 0,
          x: -60,
          duration: 0.6,
        });
      }

      // Description animation
      const description = card.querySelector('.card-description');
      if (description) {
        gsap.from(description, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${startPixel + 100}px`,
            end: `top+=${startPixel + vh * 0.35}px`,
            scrub: 1.2,
          },
          opacity: 0,
          x: -60,
          duration: 0.6,
        });
      }

      // Button animation
      const button = card.querySelector('.card-button');
      if (button) {
        gsap.from(button, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${startPixel + 150}px`,
            end: `top+=${startPixel + vh * 0.4}px`,
            scrub: 1.2,
          },
          opacity: 0,
          x: -60,
          duration: 0.6,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[600vh] bg-[#171616]">
      {cardsData.map((cardData, index) => (
        <div
          key={cardData.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="relative w-full h-screen flex items-center justify-center px-8"
        >
          <div className="max-w-6xl w-full flex items-center gap-20 mx-auto">
            {/* Icon/Image Area */}
            <div className="flex-shrink-0">
              <div className="w-[300px] h-[400px] rounded-2xl shadow-2xl flex items-center justify-center text-9xl bg-gradient-to-br from-[#d3fd5020] to-[#d3fd5040] border-2 border-[#d3fd50]">
                {cardData.icon}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 max-w-2xl">
              <h2 className="card-title font-[font2] text-6xl mb-6 text-[#d3fd50] leading-tight">
                {cardData.title}
              </h2>
              <p className="card-description font-[font1] text-xl leading-relaxed text-white mb-8">
                {cardData.description}
              </p>
              <button className="card-button font-[font2] text-lg uppercase border-2 border-[#d3fd50] text-[#d3fd50] px-8 py-4 rounded-full hover:bg-[#d3fd50] hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_#d3fd50]">
                Découvrir Plus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyStackedCards;
