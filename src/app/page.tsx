import styles from './page.module.scss'
import { Header } from '@/sections/Header/Header'
import { WelcomeSection } from '@/sections/WelcomeSection/WelcomeSection'
import { VideoBannerSection } from '@/sections/VideoBannerSection/VideoBannerSection'
import { BannersPresentationSection } from '@/sections/BannersPresentationSection/BannersPresentationSection'
import { Footer } from '@/sections/Footer/Footer'
import { CallToActionSection } from '@/sections/CallToActionSection/CallToActionSection'
import { SpecialOfferSection } from '@/sections/SpecialOfferSection/SpecialOfferSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <WelcomeSection />
      <VideoBannerSection />
      <BannersPresentationSection />
      <SpecialOfferSection />
      <CallToActionSection />
      <Footer />
    </main>
  )
}
