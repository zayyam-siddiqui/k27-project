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

    // Step 1: Pillars fall down from top and rise up from bottom to cover screen
    timeline.to(
      topPillars,
      {
        height: '50vh',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0
    )

    timeline.to(
      bottomPillars,
      {
        height: '50vh',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0
    )

    // Step 2: Pillars fully cover screen (opacity boost for depth)
    timeline.to(
      [topPillars, bottomPillars],
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      0.1
    )

    // Step 3: Hold for brief moment while page transitions
    timeline.to({}, {}, '+=0.2')

    // Step 4: Pillars retract - fall back up/down to reveal new page
    timeline.to(
      topPillars,
      {
        height: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0.7
    )

    timeline.to(
      bottomPillars,
      {
        height: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0.7
    )

    // Step 5: Fade out
    timeline.to(
      [topPillars, bottomPillars],
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      },
      0.8
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
          backgroundColor: '#0a0a0a',
          opacity: 0,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
          zIndex: 50,
        }}
      />

      {/* Bottom Pillars (rising up) */}
      <div
        data-pillar="bottom"
        className="fixed bottom-0 left-0 w-full"
        style={{
          height: 0,
          backgroundColor: '#0a0a0a',
          opacity: 0,
          boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.9)',
          zIndex: 50,
        }}
      />
    </div>
  )
}

export default PillarTransition
