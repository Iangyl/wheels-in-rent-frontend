import { useEffect, useState } from 'react'

const useWindowSizes = () => {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return [width, height]
}

export default useWindowSizes
