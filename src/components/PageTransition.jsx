import React from 'react'

const PageTransition = () => {
  return (
    <>
      {/* Transition Background */}
      <div
        id="transition-bg"
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          opacity: 0,
        }}
      />

      {/* Film Reel Container */}
      <div
        id="film-reel-container"
        className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          opacity: 0,
        }}
      >
        {/* Film Reel */}
        <div
          id="film-reel"
          className="relative"
          style={{
            width: '120px',
            height: '120px',
            scale: 1,
          }}
        >
          {/* Outer Reel Circle */}
          <div
            className="absolute inset-0 border-8 border-amber-400 rounded-full"
            style={{
              boxShadow: '0 0 40px rgba(255, 193, 7, 0.6), inset 0 0 30px rgba(0, 0, 0, 0.5)',
            }}
          />

          {/* Reel Teeth/Spokes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-amber-500"
              style={{
                width: '12px',
                height: '8px',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${(i * 30)}deg) translateY(-55px)`,
                borderRadius: '2px',
                boxShadow: '0 0 10px rgba(255, 193, 7, 0.8)',
              }}
            />
          ))}

          {/* Center Hub */}
          <div
            className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full"
            style={{
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px rgba(255, 193, 7, 0.7), inset 0 2px 5px rgba(255, 255, 255, 0.3)',
            }}
          />

          {/* Film Strip */}
          <div
            id="film-strip"
            className="absolute top-1/2 left-1/2"
            style={{
              width: '300px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
              border: '2px solid #666',
              borderRadius: '4px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '0 10px',
              zIndex: -1,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-gray-700 border border-gray-600 rounded-sm"
                style={{
                  flex: '0 0 auto',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* New Page Reveal Container */}
      <div
        id="page-reveal-container"
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          opacity: 0,
          scale: 0.5,
        }}
      />
    </>
  )
}

export default PageTransition
