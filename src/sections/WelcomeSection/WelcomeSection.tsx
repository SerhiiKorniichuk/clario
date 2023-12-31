'use client'

import { GridContainer } from '@/components/GridContainer/GridContainer'
import styles from './welcomeSection.module.scss'
import { Typography } from '@/components/Typography/Typography'
import { PlatformInfo } from '@/sections/WelcomeSection/compoenents/PlatformInfo/PlatformInfo'
import { TwoColorTypography } from '@/components/TwoColorTypography/TwoColorTypography'
import { ScrollToBuyButton } from '@/components/ScrollToBuyButton/ScrollToBuyButton'
import { Header } from '@/sections/Header/Header'

export const WelcomeSection = () => {
  return (
    <section className={styles.wrapper} {...{ [Header.observerAttr]: '' }}>
      <GridContainer>
        <div className={styles.container}>
          <TwoColorTypography variant="h1" tag="h1" align="center" split={[10]}>
            Stop your phone from being spied on
          </TwoColorTypography>
          <Typography
            className={styles.subtitle}
            variant="subtitle1"
            align="center"
          >
            Try Clario, a smart anti-spy app that effectively protects your
            privacy.
          </Typography>
          <ScrollToBuyButton className={styles.button} fullWidth />
          <PlatformInfo />
        </div>
      </GridContainer>
    </section>
  )
}
