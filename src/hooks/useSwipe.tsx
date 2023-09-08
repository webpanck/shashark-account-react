import {RefObject, useEffect, useRef, useState} from 'react'

interface Config {
  onTouchStart?: (e: TouchEvent) => void
  onTouchRemove?: (e: TouchEvent) => void
  onTouchEnd?: (e: TouchEvent) => void
}
export const useSwipe = (elementRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
  const x = useRef(-1)
  const onTouchStart = (e: TouchEvent) => {
    config?.onTouchStart?.(e)
    x.current = e.touches[0].clientX
  }
  const onTouchRemove = (e: TouchEvent) => {
    config?.onTouchRemove?.(e)
    const newX = e.touches[0].clientX
    const d = newX - x.current
    if (Math.abs(d) < 3) {
      setDirection('')
    } else if (d > 0) {
      setDirection('right')
    } else {
      setDirection('left')
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    config?.onTouchEnd?.(e)
    setDirection('')
  }
  useEffect(() => {
    if (!elementRef.current) return
    elementRef.current.addEventListener('touchstart', onTouchStart)
    elementRef.current.addEventListener('touchmove', onTouchRemove)
    elementRef.current.addEventListener('touchend', onTouchEnd)
    return () => {
      if (!elementRef.current) return
      elementRef.current.removeEventListener('touchstart', onTouchStart)
      elementRef.current.removeEventListener('touchmove', onTouchRemove)
      elementRef.current.removeEventListener('touchend', onTouchEnd)
    }
  }, [])
  return {direction}
}