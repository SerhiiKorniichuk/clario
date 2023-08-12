import { CSSProperties, FC } from 'react'
import styles from '@/sections/ReviewSection/components/ReviewCard/reviewCard.module.scss'
import colors from '@/styles/colors.module.scss'
import { Typography } from '@/components/Typography/Typography'
import { ReviewData } from '@/sections/ReviewSection/types'

export const ReviewCard: FC<ReviewData> = ({
  color = {
    text: colors.purpleDark,
    card: colors.purpleLight,
  },
  logo,
  text,
  name,
}) => {
  const style = {
    '--text-color': color.text,
    '--background-color': color.card,
  } as CSSProperties

  return (
    <div style={style} className={styles.container}>
      <div className={styles.logo}>{logo}</div>
      <Typography variant="subtitle1-bold" color={color.text}>
        {text}
      </Typography>
      <Typography
        className={styles.name}
        variant="subtitle1"
        color={color.text}
      >
        {name}
      </Typography>
    </div>
  )
}
