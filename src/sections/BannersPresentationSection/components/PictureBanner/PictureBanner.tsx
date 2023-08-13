import styles from './pictureBanner.module.scss'
import Image from 'next/image'
import { FC } from 'react'
import cn from 'classnames'

export type PictureBannerColor = 'purple' | 'pink' | 'blue' | 'green'

interface Props {
  className?: string
  color?: PictureBannerColor
  src: string
  alt: string
}

export const PictureBanner: FC<Props> = ({
  className,
  color = 'purple',
  src,
  alt,
}) => {
  return (
    <div className={cn(styles.wrapper, styles[color], className)}>
      <div className={styles.container}>
        <Image src={src} alt={alt} fill />
      </div>
    </div>
  )
}
