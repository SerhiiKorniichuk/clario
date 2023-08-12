'use client'

import { FC } from 'react'
import { ReviewCard } from '@/sections/ReviewSection/components/ReviewCard/ReviewCard'
import { ReviewData } from '@/sections/ReviewSection/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from '@/sections/ReviewSection/components/ReviewSlider/reviewSlider.module.scss'
import { SliderNextButton } from '@/sections/ReviewSection/components/SliderNextButton/SliderNextButton'
import { SliderPrevButton } from '@/sections/ReviewSection/components/SliderPrevButton/SliderPrevButton'

interface Props {
  reviews: ReviewData[]
}

export const ReviewSlider: FC<Props> = ({ reviews }) => {
  return (
    <Swiper
      className={styles.slider}
      loop
      loopedSlides={2}
      spaceBetween={15}
      centeredSlides
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.name}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}

      <div className={styles.navigation}>
        <SliderPrevButton />
        <SliderNextButton />
      </div>
    </Swiper>
  )
}
