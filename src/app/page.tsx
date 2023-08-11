import styles from './page.module.scss'
import { Header } from '@/sections/Header/Header'
import { WelcomeSection } from '@/sections/WelcomeSection/WelcomeSection'
import { VideoBannerSection } from '@/sections/VideoBannerSection/VideoBannerSection'
import { BannersPresentationSection } from '@/sections/BannersPresentationSection/BannersPresentationSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <WelcomeSection />
      <VideoBannerSection />
      <BannersPresentationSection />
    </main>
  )
}
