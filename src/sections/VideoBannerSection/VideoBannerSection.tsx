import styles from '@/sections/VideoBannerSection/videoBannerSection.module.scss'
import { GridContainer } from '@/components/GridContainer/GridContainer'
import { TypographyWithIcon } from '@/components/TypographyWithIcon/TypographyWithIcon'
import { Typography } from '@/components/Typography/Typography'

const checkList = [
  {
    iconScr: '/icons/check-icon.svg',
    text: 'reveal hidden spying apps',
  },
  {
    iconScr: '/icons/check-icon.svg',
    text: 'stop silent location tracking',
  },
  {
    iconScr: '/icons/check-icon.svg',
    text: 'avoid social media hacks',
  },
  {
    iconScr: '/icons/check-icon.svg',
    text: 'provide 24/7 expert security help',
  },
]

export const VideoBannerSection = () => {
  return (
    <section className={styles.wrapper}>
      <GridContainer>
        <div className={styles.container}>
          <video className={styles.video} loop autoPlay muted>
            <source src="/videos/radar.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.info}>
          <Typography variant="h5" tag="h5" align="center">
            The anti-spy Clario app can:
          </Typography>
          <div className={styles.list}>
            {checkList.map(({ iconScr, text }) => (
              <TypographyWithIcon key={text} iconScr={iconScr} text={text} />
            ))}
          </div>
        </div>
      </GridContainer>
    </section>
  )
}
