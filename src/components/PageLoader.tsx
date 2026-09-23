import { useEffect, useState } from 'react'
import { Lottie } from 'lottie-react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const minDisplay = new Promise((resolve) => setTimeout(resolve, 600))
    const windowLoaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve(undefined)
      else window.addEventListener('load', () => resolve(undefined), { once: true })
    })

    Promise.all([minDisplay, windowLoaded]).then(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 400)
    })
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-[400ms] ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <Lottie src="/loading.json" autoplay loop className="w-72 sm:w-96" />
    </div>
  )
}
