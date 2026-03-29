import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const PillarTransition = () => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const pillars = containerRef.current?.querySelectorAll('[data-pillar]')
    if (!pillars || pillars.length === 0) return

    const timeline = gsap.timeline()

    // Step 1: Pillars expand from edges to center (cover entire screen)
    timeline.to(
      pillars,
      {
        width: '100vw',
        duration: 1.2,
        ease: 'expo.inOut',
        stagger: 0.08,
      },
      0
    )

    // Step 2: Pillars reach maximum expansion
    timeline.to(
      pillars,
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut',
      },
      0.1
    )

    // Step 3: All pillars stay expanded for a moment (screen covered)
    timeline.to({}, {}, '+=0.4')

    // Step 4: Pillars retract back to edges (reveal new content underneath)
    timeline.to(
      pillars,
      {
        width: 0,
        duration: 1.4,
        ease: 'expo.inOut',
        stagger: 0.08,
      },
      '-=0.2'
    )

    // Step 5: Fade out pillars
    timeline.to(
      pillars,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.8'
    )
  }, [location])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 flex"
      style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}
    >
      {/* Left Pillar */}
      <div
        data-pillar="left"
        className="h-full"
        style={{
          width: 0,
          backgroundColor: '#0a0a0a',
          opacity: 0,
          flex: '0 0 auto',
          boxShadow: 'inset -4px 0 20px rgba(0, 0, 0, 0.8)',
        }}
      />

      {/* Center Pillars - Multiple for depth */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`center-${i}`}
          data-pillar="center"
          className="h-full"
          style={{
            width: 0,
            backgroundColor: `rgba(10, 10, 10, ${1 - i * 0.15})`,
            opacity: 0,
            flex: '0 0 auto',
            boxShadow: `inset 0 0 ${30 + i * 10}px rgba(0, 0, 0, 0.6)`,
          }}
        />
      ))}

      {/* Right Pillar */}
      <div
        data-pillar="right"
        className="h-full"
        style={{
          width: 0,
          backgroundColor: '#0a0a0a',
          opacity: 0,
          flex: '0 0 auto',
          boxShadow: 'inset 4px 0 20px rgba(0, 0, 0, 0.8)',
          marginLeft: 'auto',
        }}
      />
    </div>
  )
}

export default PillarTransition
