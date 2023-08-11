import styles from './page.module.scss'
import { Header } from '@/sections/Header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
