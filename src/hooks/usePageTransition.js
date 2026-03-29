import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export const usePageTransition = () => {
  const location = useLocation()

  useEffect(() => {
    // Get the transition overlay
    const overlay = document.getElementById('page-transition-overlay')
    if (!overlay) return

    // Create a timeline for the transition
    const tl = gsap.timeline()

    // Animate in (reveal the overlay)
    tl.fromTo(
      overlay,
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.6,
        ease: 'power2.inOut',
      }
    )

    // Animate out (hide the overlay)
    tl.to(
      overlay,
      {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        duration: 0.6,
        ease: 'power2.inOut',
      },
      0.1
    )
  }, [location])

  return null
}
