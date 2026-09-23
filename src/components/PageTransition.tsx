import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div
      className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  )
}
