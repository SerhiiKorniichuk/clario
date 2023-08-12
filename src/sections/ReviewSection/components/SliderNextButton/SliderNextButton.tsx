import { NavigationButton } from '@/components/NavigationButton/NavigationButton'
import { useSwiper } from 'swiper/react'

export const SliderNextButton = () => {
  const swiper = useSwiper()

  const handleClick = () => {
    swiper.slideNext()
  }

  return <NavigationButton direction="right" onClick={handleClick} />
}
