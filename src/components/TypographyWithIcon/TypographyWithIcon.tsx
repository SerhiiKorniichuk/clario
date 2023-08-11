import Image from 'next/image'
import {
  Typography,
  TypographyOptions,
} from '@/components/Typography/Typography'
import styles from '@/components/TypographyWithIcon/typographyWithIcon.module.scss'
import { FC } from 'react'
import cn from 'classnames'

export interface TypographyWithIconOptions {
  className?: string
  iconScr: string
  iconSize?: number
  typography?: Omit<TypographyOptions, 'children'>
  text: string
}

export const TypographyWithIcon: FC<TypographyWithIconOptions> = ({
  className,
  iconScr,
  iconSize = 16,
  typography,
  text,
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <Image src={iconScr} alt={text} width={iconSize} height={iconSize} />
      <Typography {...typography} variant={typography?.variant || 'body1'}>
        {text}
      </Typography>
    </div>
  )
}
