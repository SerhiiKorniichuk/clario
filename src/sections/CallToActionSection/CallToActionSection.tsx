import { GridContainer } from '@/components/GridContainer/GridContainer'
import { TwoColorTypography } from '@/components/TwoColorTypography/TwoColorTypography'
import styles from '@/sections/CallToActionSection/callToActionSection.module.scss'
import { ScrollToBuyButton } from '@/components/ScrollToBuyButton/ScrollToBuyButton'

export const CallToActionSection = () => {
  return (
    <section className={styles.wrapper}>
      <GridContainer>
        <div className={styles.container}>
          <TwoColorTypography
            variant="h1"
            tag="h1"
            align="center"
            split={[10, 35]}
          >
            Stop your phone from being spied on.
          </TwoColorTypography>
          <ScrollToBuyButton fullWidth />
        </div>
      </GridContainer>
    </section>
  )
}
