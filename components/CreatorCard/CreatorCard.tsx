'use client'

import React, { FC, useState } from 'react'
import styles from './CreatorCard.module.css'

interface Props {
  imageSrc: string
  imageAlt: string
  creatorName: string
  textTitle: string
  text: string
}

const CreatorCard: FC<Props> = ({
  imageSrc,
  imageAlt,
  creatorName,
  textTitle,
  text,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={styles.creatorCard}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
      <div>
        <p className={styles.name}>{creatorName}</p>
        <p className={styles.textTitle}>{textTitle}</p>
        {isExpanded && <p>{text}</p>}
      </div>
    </div>
  )
}

export default CreatorCard
