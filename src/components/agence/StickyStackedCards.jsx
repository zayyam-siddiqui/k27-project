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
      color: '#d3fd50',
    },
    {
      id: 2,
      title: 'Design Exceptionnel',
      description: 'Chaque pixel compte. Nous créons des designs qui captivent, engagent et convertissent votre audience.',
      icon: '✨',
      color: '#d3fd50',
    },
    {
      id: 3,
      title: 'Contenu Captivant',
      description: 'Les histoires puissantes créent des connexions émotionnelles durables avec votre audience.',
      icon: '📝',
      color: '#d3fd50',
    },
    {
      id: 4,
      title: 'Campagnes Digitales',
      description: 'À l\'ère numérique, votre présence en ligne est primordiale pour le succès de votre marque.',
      icon: '🚀',
      color: '#d3fd50',
    },
    {
      id: 5,
      title: 'Branding Stratégique',
      description: 'Un brand fort est un actif intemporel. Nous construisons des identités mémorables.',
      icon: '👑',
      color: '#d3fd50',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    const totalCards = cards.length;

    // Create scroll trigger for sticky animation
    gsap.to(cardsContainerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalCards * 100}%`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate each card
    cards.forEach((card, index) => {
      const enterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${index * window.innerHeight}px`,
          end: `top+=${(index + 1) * window.innerHeight}px`,
          scrub: 1,
          onUpdate: (self) => {
            // Update card position based on scroll progress
          },
        },
      });

      // Card enters from bottom
      enterTimeline
        .from(
          card,
          {
            opacity: 0,
            y: 100,
            duration: 1,
          },
          0
        )
        // Card scales in
        .from(
          card,
          {
            scale: 0.8,
            duration: 1,
          },
          0
        );

      // Text content stagger animation
      const textElements = card.querySelectorAll('.card-content > *');
      enterTimeline.from(
        textElements,
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
        },
        0.2
      );

      // Exit animation for previous cards
      if (index > 0) {
        const exitTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${(index + 0.5) * window.innerHeight}px`,
            end: `top+=${(index + 1) * window.innerHeight}px`,
            scrub: 1,
          },
        });

        exitTimeline.to(cards[index - 1], {
          opacity: 0,
          scale: 0.95,
          duration: 1,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-[#171616]">
      <div
        ref={cardsContainerRef}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {cardsData.map((cardData, index) => (
          <div
            key={cardData.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="max-w-4xl w-full mx-auto flex items-center gap-16">
              {/* Card Image/Icon Area */}
              <div className="flex-shrink-0">
                <div
                  className="w-[300px] h-[400px] rounded-2xl shadow-2xl flex items-center justify-center text-8xl"
                  style={{
                    background: `linear-gradient(135deg, ${cardData.color}20, ${cardData.color}40)`,
                    border: `2px solid ${cardData.color}`,
                  }}
                >
                  {cardData.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 max-w-2xl card-content">
                <h2 className="font-[font2] text-6xl mb-6 text-[#d3fd50] leading-tight">
                  {cardData.title}
                </h2>
                <p className="font-[font1] text-2xl leading-relaxed text-white mb-8">
                  {cardData.description}
                </p>
                <button
                  className="font-[font2] text-lg uppercase border-2 border-[#d3fd50] text-[#d3fd50] px-8 py-4 rounded-full hover:bg-[#d3fd50] hover:text-black transition-all duration-300"
                  style={{
                    boxShadow: `0 0 20px ${cardData.color}30`,
                  }}
                >
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
