import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TransitionProvider } from './context/TransitionContext'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import PageTransition from './components/PageTransition'
import { usePageTransition } from './hooks/usePageTransition'

const AppContent = () => {
  usePageTransition()

  return (
    <div>
      <PageTransition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <TransitionProvider>
      <AppContent />
    </TransitionProvider>
  )
}

export default App
