import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const StickyStackedCards = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
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
    const cards = cardsRef.current;
    const cardHeight = window.innerHeight;
    const totalCards = cards.length;
    
    // Each card gets 100vh of scroll height
    const scrollDistance = totalCards * cardHeight;

    // Animate each card individually
    cards.forEach((card, index) => {
      // Calculate when this card should start and end appearing
      const startScroll = index * cardHeight;
      const endScroll = (index + 1) * cardHeight;

      // Entry animation - card slides up and fades in
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${startScroll}px`,
            end: `top+=${startScroll + cardHeight * 0.3}px`,
            scrub: 1,
            markers: false,
          },
        }
      );

      // Text animations with stagger
      const title = card.querySelector('.card-title');
      const description = card.querySelector('.card-description');
      const button = card.querySelector('.card-button');

      gsap.fromTo(
        [title, description, button],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${startScroll + cardHeight * 0.1}px`,
            end: `top+=${startScroll + cardHeight * 0.4}px`,
            scrub: 1,
            markers: false,
          },
        }
      );

      // Exit animation - card fades out and scales down
      gsap.to(card, {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${endScroll - cardHeight * 0.3}px`,
          end: `top+=${endScroll}px`,
          scrub: 1,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-[#171616]">
      {/* Sticky Container */}
      <div
        ref={cardsContainerRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Cards */}
        {cardsData.map((cardData, index) => (
          <div
            key={cardData.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute inset-0 flex items-center justify-center p-8 opacity-0"
          >
            <div className="max-w-5xl w-full mx-auto flex items-center gap-16">
              {/* Icon/Image Area */}
              <div className="flex-shrink-0">
                <div className="w-[300px] h-[400px] rounded-2xl shadow-2xl flex items-center justify-center text-9xl bg-gradient-to-br from-[#d3fd5020] to-[#d3fd5040] border-2 border-[#d3fd50]">
                  {cardData.icon}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 max-w-2xl">
                <h2 className="card-title font-[font2] text-6xl mb-6 text-[#d3fd50] leading-tight opacity-0">
                  {cardData.title}
                </h2>
                <p className="card-description font-[font1] text-2xl leading-relaxed text-white mb-8 opacity-0">
                  {cardData.description}
                </p>
                <button className="card-button font-[font2] text-lg uppercase border-2 border-[#d3fd50] text-[#d3fd50] px-8 py-4 rounded-full hover:bg-[#d3fd50] hover:text-black transition-all duration-300 shadow-lg opacity-0">
                  Découvrir Plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyStackedCards;
