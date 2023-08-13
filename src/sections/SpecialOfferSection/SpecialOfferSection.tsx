import { GridContainer } from '@/components/GridContainer/GridContainer'
import styles from '@/sections/SpecialOfferSection/specialOfferSection.module.scss'
import colors from '@/styles/colors.module.scss'
import Image from 'next/image'
import { Typography } from '@/components/Typography/Typography'
import { OfferBlock } from '@/sections/SpecialOfferSection/components/OfferBlock/OfferBlock'

const data = {
  offer: {
    price: '2.99',
    additionalText: '/7 days',
  },
  services: [
    {
      iconScr: '/icons/protection-icon.svg',
      text: 'Protection for 3 devices',
    },
    {
      iconScr: '/icons/guard-icon.svg',
      text: 'Anti-spy checkup',
    },
    {
      iconScr: '/icons/spying-icon.svg',
      text: 'Unlimited access to anti-spying tools',
    },
    {
      iconScr: '/icons/chat-icon.svg',
      text: '24/7 help from security experts',
    },
  ],
  achievements: [
    {
      iconScr: '/icons/money-back-icon.svg',
      text: '30-day money-back guarantee',
    },
    {
      iconScr: '/icons/downloads-icon.svg',
      text: '100.000 + downloads',
    },
  ],
}

export const SpecialOfferSection = () => {
  return (
    <section id={SpecialOfferSection.id} className={styles.wrapper}>
      <div className={styles.backgroundPicture}>
        <Image
          src="/pictures/special-offer-background.svg"
          alt="Background"
          fill
        />
      </div>
      <GridContainer>
        <div className={styles.content}>
          <Typography variant="h2" tag="h2" color={colors.white} align="center">
            Start your spy-free week for as low as
          </Typography>
          <OfferBlock {...data} />
        </div>
      </GridContainer>
    </section>
  )
}

SpecialOfferSection.id = 'buying-section'
