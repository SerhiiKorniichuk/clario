import { TypographyVariantsDefinition } from '@/components/Typography/types'
import cn from 'classnames'
import styles from '@/components/Typography/typography.module.scss'

export const typographyVariantClassNames: TypographyVariantsDefinition = {
  h1: cn(styles.typography, styles.heading1),
  h2: cn(styles.typography, styles.heading2),
  h4: cn(styles.typography, styles.heading4),
  h5: cn(styles.typography, styles.heading5),
  subtitle1: cn(styles.typography, styles.subtitle1),
  body1: cn(styles.typography, styles.body1),
  ['body1-bold']: cn(styles.typography, styles['body1-bold']),
  body2: cn(styles.typography, styles.body2),
  body3: cn(styles.typography, styles.body3),
  body4: cn(styles.typography, styles.body4),
  button1: cn(styles.typography, styles.button1),
  button2: cn(styles.typography, styles.button2),
  price1: cn(styles.typography, styles.price1),
  price2: cn(styles.typography, styles.price2),
  price3: cn(styles.typography, styles.price3),
}
