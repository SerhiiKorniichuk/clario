import styles from '@/sections/SpecialOfferSection/components/OfferBlock/offerBlock.module.scss'
import { TimerBanner } from '@/sections/SpecialOfferSection/components/TimerBanner/TimerBanner'
import { PricePreview } from '@/sections/SpecialOfferSection/components/PricePreview/PricePreview'
import { Typography } from '@/components/Typography/Typography'
import {
  TypographyWithIcon,
  TypographyWithIconOptions,
} from '@/components/TypographyWithIcon/TypographyWithIcon'
import { Button } from '@/components/Button/Button'
import { FC } from 'react'

interface Props {
  offer: {
    price: string
    additionalText: string
  }
  services: TypographyWithIconOptions[]
  achievements: TypographyWithIconOptions[]
}

export const OfferBlock: FC<Props> = ({ offer, services, achievements }) => {
  return (
    <div className={styles.container}>
      <TimerBanner />
      <PricePreview className={styles.price} {...offer} />
      <div className={styles.services}>
        <Typography variant="h5" tag="h5" align="center">
          What you get:
        </Typography>
        <div className={styles.list}>
          {services.map(({ iconScr, text }) => (
            <TypographyWithIcon
              className={styles.service}
              key={text}
              iconScr={iconScr}
              text={text}
              iconSize={20}
            />
          ))}
        </div>
      </div>
      <Button fullWidth>Try for $2.99</Button>
      <Typography className={styles.policy} variant="body4" align="center">
        By clicking above, you agree to try 7 days of Clario for $2.99 as a
        special offer. Your subscription will renew for $39.9/month every 2
        months. Cancel anytime or manage your subscription in your Clario
        account.
      </Typography>
      <div className={styles.achievements}>
        {achievements.map(({ iconScr, text }) => (
          <TypographyWithIcon
            key={text}
            iconScr={iconScr}
            text={text}
            iconSize={20}
            typography={{ variant: 'body3' }}
          />
        ))}
      </div>
    </div>
  )
}
