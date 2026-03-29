import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export const usePillarTransition = () => {
  const location = useLocation()

  useEffect(() => {
    // Hide page content while transition happens
    const routes = document.querySelectorAll('[class*="page"]')
    
    // Set content to hidden immediately
    const timeline = gsap.timeline()
    
    // Hide current page content
    timeline.to(
      'main, div[class*="page"], div[class*="home"], div[class*="agence"], div[class*="projects"]',
      {
        opacity: 0,
        duration: 0.1,
        overwrite: false,
      },
      0
    )

    // Wait for transition to complete, then show new content
    timeline.to(
      'main, div[class*="page"], div[class*="home"], div[class*="agence"], div[class*="projects"]',
      {
        opacity: 1,
        duration: 0.3,
      },
      0.7
    )

    // Scroll to top on page change
    window.scrollTo(0, 0)
  }, [location])

  return null
}
