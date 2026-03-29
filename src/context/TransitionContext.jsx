import React, { createContext, useContext, useState } from 'react'

const TransitionContext = createContext()

export const TransitionProvider = ({ children }) => {
  const [nextPageContent, setNextPageContent] = useState(null)

  return (
    <TransitionContext.Provider value={{ nextPageContent, setNextPageContent }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransitionContext = () => {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('useTransitionContext must be used within TransitionProvider')
  }
  return context
}
