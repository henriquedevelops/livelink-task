import React, { FC } from 'react'
import styles from './CreatorCard.module.css'
import creatorsData from '@/utils/creatorsData'

const CreatorCard: FC = () => {
  return (
    <>
      {creatorsData.map((creator) => (
        <div className={styles.creatorCard}>
          <img className={styles.image} src={creator.image} alt="" />
          <div className={styles.nameAndTitleWrapper}>
            <p className={styles.name}>{creator.name}</p>
            <p>{creator.textTitle}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default CreatorCard
