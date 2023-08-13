import styles from '@/sections/SpecialOfferSection/components/PricePreview/pricePreview.module.scss'
import { Typography } from '@/components/Typography/Typography'
import { FC } from 'react'
import cn from 'classnames'
import colors from '@/styles/colors.module.scss'

interface Props {
  className?: string
  suffix?: string
  price: string
  period?: string
  additionalText?: string
}

export const PricePreview: FC<Props> = ({
  className,
  suffix,
  price,
  additionalText,
}) => {
  const [dollars, cents] = price.split('.')

  return (
    <div className={cn(styles.container, className)}>
      <Typography
        className={styles.prefix}
        variant="price2"
        tag="span"
        color={colors.purple}
      >
        {suffix || '$'}
      </Typography>
      <Typography
        className={styles.price}
        variant="price1"
        tag="span"
        color={colors.purple}
      >
        {dollars}
      </Typography>
      <div className={styles.suffix}>
        {Boolean(cents) && (
          <Typography variant="price3" tag="span" color={colors.purple}>
            {cents}
          </Typography>
        )}
        {Boolean(additionalText) && (
          <Typography
            className={styles.period}
            variant="price3"
            tag="span"
            color={colors.gray}
          >
            {additionalText}
          </Typography>
        )}
      </div>
    </div>
  )
}
