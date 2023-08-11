import Image from 'next/image'
import { GridContainer } from '@/components/GridContainer/GridContainer'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <GridContainer>
        <div className={styles.container}>
          <Image src="/logos/main-logo.svg" alt="Logo" width={80} height={22} />
        </div>
      </GridContainer>
    </div>
  )
}
