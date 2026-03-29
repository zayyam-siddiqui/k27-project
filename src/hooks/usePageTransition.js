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
    const pageRevealContainer = document.getElementById('page-reveal-container')

    if (!transitionBg || !filmReelContainer || !filmReel || !filmStrip) return

    // Create master timeline
    const tl = gsap.timeline()

    // Phase 1: Fade in background and film reel
    tl.to(
      transitionBg,
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      },
      0
    )

    tl.to(
      filmReelContainer,
      {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      },
      0
    )

    // Phase 2: Film reel zooms out
    tl.to(
      filmReel,
      {
        scale: 0.6,
        duration: 0.6,
        ease: 'back.inOut',
      },
      0.2
    )

    // Phase 3: Rotate film reel and slide it to the right
    tl.to(
      filmReel,
      {
        rotation: 360,
        x: 200,
        duration: 1.2,
        ease: 'power1.inOut',
      },
      0.8
    )

    // Phase 3b: Film strip moves forward (appears to slide)
    tl.to(
      filmStrip,
      {
        x: 150,
        opacity: 0.3,
        duration: 1,
        ease: 'power2.inOut',
      },
      0.8
    )

    // Phase 4: New page zooms in from the center
    tl.to(
      pageRevealContainer,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out',
      },
      1.4
    )

    // Phase 5: Fade out transition elements
    tl.to(
      [transitionBg, filmReelContainer],
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      1.8
    )

    // Reset page reveal container opacity so it doesn't interfere
    tl.to(
      pageRevealContainer,
      {
        opacity: 0,
        duration: 0.1,
      },
      2.0
    )
  }, [location])

  return null
}
