import { NavigationButton } from '@/components/NavigationButton/NavigationButton'
import { useSwiper } from 'swiper/react'

export const SliderPrevButton = () => {
  const swiper = useSwiper()

  const handleClick = () => {
    swiper.slidePrev()
  }

  return <NavigationButton onClick={handleClick} />
}
