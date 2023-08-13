import {
  PictureBanner,
  PictureBannerColor,
} from '@/sections/BannersPresentationSection/components/PictureBanner/PictureBanner'
import styles from '@/sections/BannersPresentationSection/components/InfoBanner/infoBanner.module.scss'
import { FC } from 'react'
import { Typography } from '@/components/Typography/Typography'
import {
  TypographyWithIcon,
  TypographyWithIconOptions,
} from '@/components/TypographyWithIcon/TypographyWithIcon'
import { BannersPresentationSection } from '@/sections/BannersPresentationSection/BannersPresentationSection'

export interface InfoBannerData {
  color?: PictureBannerColor
  pictureSrc: string
  title: string
  subtitle: string
  list: TypographyWithIconOptions[]
}

export const InfoBanner: FC<InfoBannerData> = ({
  color,
  pictureSrc,
  title,
  subtitle,
  list,
}) => {
  return (
    <div
      className={styles.container}
      {...{ [BannersPresentationSection.observerAttr]: title }}
    >
      <PictureBanner src={pictureSrc} alt={title} color={color} />
      <div className={styles.header}>
        <Typography variant="h4" tag="h4" align="center">
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {subtitle}
        </Typography>
      </div>
      <div className={styles.list}>
        {list.map((item) => (
          <TypographyWithIcon
            key={item.text}
            typography={{ variant: 'body1-bold' }}
            iconSize={24}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
