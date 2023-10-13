import { FC } from 'react'
import styles from './page.module.css'
import LogoSVG from '@/components/LogoSVG'
import CreatorCard from '@/components/CreatorCard/CreatorCard'

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <LogoSVG className={styles.logoSVG} />

      <div className={styles.creatorCardsWrapper}>
        <CreatorCard />
      </div>
    </main>
  )
}

export default Home
