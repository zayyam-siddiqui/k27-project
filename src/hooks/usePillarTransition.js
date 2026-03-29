import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const usePillarTransition = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0)
  }, [location])

  return null
}
