import React from 'react'

const PageTransition = () => {
  return (
    <>
      {/* Top mask reveal */}
      <div
        id="page-transition-top"
        className="fixed top-0 left-0 right-0 bg-black pointer-events-none z-50"
        style={{
          height: '0%',
          overflow: 'hidden',
        }}
      />
      
      {/* Bottom mask reveal */}
      <div
        id="page-transition-bottom"
        className="fixed bottom-0 left-0 right-0 bg-black pointer-events-none z-50"
        style={{
          height: '0%',
          overflow: 'hidden',
        }}
      />
    </>
  )
}

export default PageTransition
