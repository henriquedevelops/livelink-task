import styles from './page.module.css'
import LogoSVG from '@/components/LogoSVG'

export default function Home() {
  return (
    <main className={styles.main}>
      <LogoSVG className={styles.logoSVG} />
    </main>
  )
}
