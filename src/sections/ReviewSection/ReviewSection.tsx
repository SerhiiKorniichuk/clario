import styles from '@/sections/ReviewSection/reviewSection.module.scss'
import colors from '@/styles/colors.module.scss'
import { TrustpilotSVGIcon } from '@/sections/ReviewSection/components/TrustpilotSVGIcon/TrustpilotSVGIcon'
import { GooglePlaySVGIcon } from '@/sections/ReviewSection/components/GooglePlaySVGIcon/GooglePlaySVGIcon'
import { AppStoreSVGIcon } from '@/sections/ReviewSection/components/AppStoreSVGIcon/AppStoreSVGIcon'
import { GridContainer } from '@/components/GridContainer/GridContainer'
import { Typography } from '@/components/Typography/Typography'
import { ReviewSlider } from '@/sections/ReviewSection/components/ReviewSlider/ReviewSlider'
import { ReviewData } from '@/sections/ReviewSection/types'

export const reviewCompanyLogoByName = {
  trustpilot: <TrustpilotSVGIcon />,
  googlePlay: <GooglePlaySVGIcon />,
  appStore: <AppStoreSVGIcon />,
}

const reviews: ReviewData[] = [
  {
    logo: reviewCompanyLogoByName['trustpilot'],
    text: 'It is a great application to protect yourself from hackers.',
    name: 'Manweet',
  },
  {
    logo: reviewCompanyLogoByName['trustpilot'],
    text: 'Great service! They were an amazing help with making sure my device is secure.',
    name: 'Megan_N',
  },
  {
    color: {
      text: colors.green,
      card: colors.greenLight,
    },
    logo: reviewCompanyLogoByName['googlePlay'],
    text:
      'The best app you could find! ' +
      'I had a problem of malware which added unknown accounts to my device. ' +
      'The "Talk to experts" feature saved the day! I was helped in all possible ways.',
    name: 'Shahu Sardar',
  },
  {
    color: {
      text: colors.blue,
      card: colors.blueLight,
    },
    logo: reviewCompanyLogoByName['appStore'],
    text:
      'Great app! Cool thing with the data breaches - checked ' +
      'mine and my boyfriends emails and found 10! passwords we need to change',
    name: 'Zagkri',
  },
]

export const ReviewSection = () => {
  return (
    <section className={styles.wrapper}>
      <GridContainer>
        <Typography
          className={styles.title}
          variant="h2"
          tag="h2"
          align="center"
        >
          Let’s hear what real Clario users say.
        </Typography>
      </GridContainer>
      <ReviewSlider reviews={reviews} />
    </section>
  )
}
