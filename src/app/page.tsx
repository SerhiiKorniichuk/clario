import styles from './page.module.scss'
import { Header } from '@/sections/Header/Header'
import { WelcomeSection } from '@/sections/WelcomeSection/WelcomeSection'
import { VideoBannerSection } from '@/sections/VideoBannerSection/VideoBannerSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <WelcomeSection />
      <VideoBannerSection />
    </main>
  )
}
