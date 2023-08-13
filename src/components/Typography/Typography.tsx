import { createElement, CSSProperties, FC, ReactNode } from 'react'
import {
  TypographyAlign,
  TypographyTag,
  TypographyVariant,
} from '@/components/Typography/types'
import { typographyVariantClassNames } from '@/components/Typography/utils'
import cn from 'classnames'
import colors from '@/styles/colors.module.scss'

export interface TypographyOptions {
  className?: string
  tag?: TypographyTag
  variant?: TypographyVariant
  color?: string
  align?: TypographyAlign
  children?: ReactNode
}

export const Typography: FC<TypographyOptions> = ({
  className,
  tag = 'p',
  variant = 'body1',
  color = colors.dark,
  align = 'inherit',
  children,
}) => {
  const currentVariantClassName = typographyVariantClassNames[variant]

  const style = {
    '--typography-color': color,
    '--typography-align': align,
  } as CSSProperties

  return createElement(
    tag,
    { style, className: cn(currentVariantClassName, className) },
    children,
  )
}
