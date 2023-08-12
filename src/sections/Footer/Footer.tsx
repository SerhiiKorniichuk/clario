import Image from 'next/image'
import { GridContainer } from '@/components/GridContainer/GridContainer'
import styles from './footer.module.scss'
import { Typography } from '@/components/Typography/Typography'

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <GridContainer>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/logos/main-logo.svg"
            alt="Logo"
            width={90}
            height={24}
          />
          <Typography>© 2023 Clario Tech DMCC</Typography>
          <Typography>All rights reserved.</Typography>
        </div>
      </GridContainer>
    </footer>
  )
}
