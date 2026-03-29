import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import PageTransition from './components/PageTransition'
import { usePageTransition } from './hooks/usePageTransition'

const App = () => {
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

export default App
