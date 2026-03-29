import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import PillarTransition from './components/PillarTransition'
import { usePillarTransition } from './hooks/usePillarTransition'

const App = () => {
  usePillarTransition()

  return (
    <div>
      <PillarTransition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
