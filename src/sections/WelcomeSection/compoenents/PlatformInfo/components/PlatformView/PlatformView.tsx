import Image from 'next/image'
import { Typography } from '@/components/Typography/Typography'
import { FC } from 'react'
import styles from './platformView.module.scss'

export interface PlatformViewOptions {
  iconSrc: string
  title: string
}

export const PlatformView: FC<PlatformViewOptions> = ({ iconSrc, title }) => {
  return (
    <div className={styles.container}>
      <Image src={iconSrc} alt={title} width={14} height={14} />
      <Typography>{title}</Typography>
    </div>
  )
}
