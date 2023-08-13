import { useEffect } from 'react'

interface ShowingObserverOptions {
  attribute: string
  callback: (entries: IntersectionObserverEntry[]) => void
  options?: IntersectionObserverInit
}

export const useShowingObserver = ({
  attribute,
  callback,
  options,
}: ShowingObserverOptions) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)

    const sections = document.querySelectorAll(`[${attribute}]`)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [attribute, callback, options])
}
