import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export const usePageTransition = () => {
  const location = useLocation()

  useEffect(() => {
    // Get transition elements
    const transitionBg = document.getElementById('transition-bg')
    const filmReelContainer = document.getElementById('film-reel-container')
    const filmReel = document.getElementById('film-reel')
    const filmStrip = document.getElementById('film-strip')
    const filmContent = document.getElementById('film-content')
    const pageRevealContainer = document.getElementById('page-reveal-container')

    if (!transitionBg || !filmReelContainer || !filmReel || !filmStrip || !filmContent) return

    // Create master timeline
    const tl = gsap.timeline()

    // Phase 1: Fade in background and film reel
    tl.to(
      transitionBg,
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
      0
    )

    tl.to(
      filmReelContainer,
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      },
      0.1
    )

    // Phase 2: Film reel zooms out
    tl.to(
      filmReel,
      {
        scale: 0.5,
        duration: 1,
        ease: 'back.inOut',
      },
      0.4
    )

    // Phase 3: Content inside film strip starts to reveal
    tl.to(
      filmContent,
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      },
      0.5
    )

    // Phase 4: Rotate film reel and slide it to the right with film strip
    tl.to(
      filmReel,
      {
        rotation: 720,
        x: 300,
        duration: 2,
        ease: 'power1.inOut',
      },
      1
    )

    // Phase 4b: Film strip scrolls content forward (reveal effect)
    tl.to(
      filmContent,
      {
        x: 100,
        duration: 1.8,
        ease: 'power2.inOut',
      },
      1
    )

    // Phase 5: New page zooms in from the center with slow scale
    tl.to(
      pageRevealContainer,
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out',
      },
      2.2
    )

    // Phase 6: Fade out transition elements smoothly
    tl.to(
      [transitionBg, filmReelContainer],
      {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in',
      },
      2.8
    )

    // Reset page reveal container opacity so it doesn't interfere
    tl.to(
      pageRevealContainer,
      {
        opacity: 0,
        duration: 0.2,
      },
      3.4
    )
  }, [location])

  return null
}
