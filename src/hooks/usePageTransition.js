import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export const usePageTransition = () => {
  const location = useLocation()

  useEffect(() => {
    // Get the transition overlays
    const topMask = document.getElementById('page-transition-top')
    const bottomMask = document.getElementById('page-transition-bottom')
    
    if (!topMask || !bottomMask) return

    // Create a timeline for the mask reveal transition
    const tl = gsap.timeline()

    // Phase 1: Masks expand from top and bottom to meet in the middle
    tl.to(
      topMask,
      {
        height: '50%',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0
    )
    tl.to(
      bottomMask,
      {
        height: '50%',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0
    )

    // Phase 2: Masks shrink back (reveal new content)
    tl.to(
      topMask,
      {
        height: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0.4
    )
    tl.to(
      bottomMask,
      {
        height: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0.4
    )
  }, [location])

  return null
}
