import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import BlogCard from '../components/blog/BlogCard';
import ProjectFooter from '../components/projects/ProjectCardFooter';

const Blogue = () => {
  gsap.registerPlugin(ScrollTrigger);

  const blogPosts = [
    {
      id: 1,
      title: 'Tendances du Design 2024',
      date: 'Mars 2024',
      excerpt: 'Découvrez les tendances design qui façonnent le paysage numérique en 2024. De la minimalité au maximalisme, explorez ce qui fonctionne vraiment.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Stratégie de Branding Efficace',
      date: 'Février 2024',
      excerpt: 'Comment construire une identité de marque authentique et mémorable. Un guide complet pour créer une connection émotionnelle avec votre audience.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'L\'Art de la Typographie Web',
      date: 'Janvier 2024',
      excerpt: 'Explorez les principes fondamentaux de la typographie pour le web. Apprenez comment les polices peuvent transformer l\'expérience utilisateur.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Accessibilité: Un Impératif Moderne',
      date: 'Décembre 2023',
      excerpt: 'Pourquoi l\'accessibilité n\'est pas optionnelle. Découvrez comment créer des designs inclusifs qui accueillent tous les utilisateurs.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Optimisation des Performances',
      date: 'Novembre 2023',
      excerpt: 'Les secrets pour créer des sites rapides et efficaces. Une plongée profonde dans les techniques d\'optimisation modernes.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Animation et Micro-interactions',
      date: 'Octobre 2023',
      excerpt: 'Comment l\'animation peut améliorer l\'expérience utilisateur. Des détails qui créent des moments magiques dans vos designs.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
  ];

  useGSAP(() => {
    gsap.from('.hero', {
      height: '50px',
      stagger: {
        amount: 0.1,
      },
      scrollTrigger: {
        trigger: '.blog-section',
        scrub: 1,
        start: 'top 100%',
        end: 'top -150%',
      },
    });

    gsap.from('.blog-card', {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.blog-grid',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });
  });

  return (
    <div className="pt-4 bg-[#171616] text-white">
      {/* Header */}
      <div className="pt-[49vh] flex items-start pl-2">
        <h2 className="font-[font2] text-[10.5vw] uppercase leading-none text-white">
          Blogue
        </h2>
        <h2 className="font-[font2] text-[3vw] uppercase leading-none text-white pt-[1vw]">
          {blogPosts.length}
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="-mt-8 blog-section">
        <div className="hero w-full">
          <div className="blog-grid px-4 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <ProjectFooter />
    </div>
  );
};

export default Blogue;
