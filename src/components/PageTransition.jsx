import React from 'react'

const PageTransition = () => {
  return (
    <div
      id="page-transition-overlay"
      className="fixed inset-0 bg-black pointer-events-none z-50"
      style={{
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      }}
    />
  )
}

export default PageTransition
