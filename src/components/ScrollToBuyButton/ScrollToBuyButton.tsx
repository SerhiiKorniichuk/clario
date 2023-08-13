'use client'

import { Button, ButtonOptions } from '@/components/Button/Button'
import { FC } from 'react'
import { scrollToBuySection } from '@/utils/scrollToBuySection'

export const ScrollToBuyButton: FC<Omit<ButtonOptions, 'onClick'>> = (
  props,
) => {
  return (
    <Button {...props} onClick={scrollToBuySection}>
      Protect me now
    </Button>
  )
}
