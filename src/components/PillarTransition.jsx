import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const PillarTransition = () => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const topPillars = containerRef.current?.querySelectorAll('[data-pillar="top"]')
    const bottomPillars = containerRef.current?.querySelectorAll('[data-pillar="bottom"]')
    if (!topPillars || !bottomPillars) return

    const timeline = gsap.timeline()

    // Step 1: Pillars DROP with gravity effect - fast and heavy
    timeline.to(
      topPillars,
      {
        height: '50vh',
        duration: 0.35,
        ease: 'back.out(1.2)',
      },
      0
    )

    // Bottom pillar rises up with same gravity effect
    timeline.to(
      bottomPillars,
      {
        height: '50vh',
        duration: 0.35,
        ease: 'back.out(1.2)',
      },
      0
    )

    // Step 2: Pillars snap into place with maximum opacity
    timeline.to(
      [topPillars, bottomPillars],
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      },
      0
    )

    // Step 3: Hold screen covered for page transition
    timeline.to({}, {}, '+=0.4')

    // Step 4: Pillars retract away - quick and smooth
    timeline.to(
      topPillars,
      {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      },
      0.4
    )

    timeline.to(
      bottomPillars,
      {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      },
      0.4
    )

    // Step 5: Fade out for clean finish
    timeline.to(
      [topPillars, bottomPillars],
      {
        opacity: 0,
        duration: 0.2,
      },
      0.7
    )
  }, [location])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ overflow: 'hidden' }}
    >
      {/* Top Pillars (falling down) */}
      <div
        data-pillar="top"
        className="fixed top-0 left-0 w-full"
        style={{
          height: 0,
          backgroundColor: '#000000',
          opacity: 0,
          boxShadow: '0 40px 100px rgba(0, 0, 0, 1), inset 0 -10px 40px rgba(0, 0, 0, 0.8)',
          zIndex: 50,
        }}
      />

      {/* Bottom Pillars (rising up) */}
      <div
        data-pillar="bottom"
        className="fixed bottom-0 left-0 w-full"
        style={{
          height: 0,
          backgroundColor: '#000000',
          opacity: 0,
          boxShadow: '0 -40px 100px rgba(0, 0, 0, 1), inset 0 10px 40px rgba(0, 0, 0, 0.8)',
          zIndex: 50,
        }}
      />
    </div>
  )
}

export default PillarTransition
