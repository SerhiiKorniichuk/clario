import {
  Typography,
  TypographyOptions,
} from '@/components/Typography/Typography'
import colors from '@/styles/colors.module.scss'
import { splitString } from '@/utils/splitString'
import { FC } from 'react'

interface Props extends Omit<TypographyOptions, 'children' | 'color'> {
  split: [number] | [number, number]
  primaryColor?: string
  secondaryColor?: string
  children: string
}

export const TwoColorTypography: FC<Props> = ({
  className,
  split,
  primaryColor,
  secondaryColor = colors.purple,
  variant,
  tag,
  align,
  children,
}) => {
  const [firstPart, secondPart, thirdPart] = splitString(
    children,
    split[0],
    split[1],
  )

  return (
    <Typography
      className={className}
      variant={variant}
      tag={tag}
      color={primaryColor}
      align={align}
    >
      {firstPart}
      <Typography variant={variant} tag="span" color={secondaryColor}>
        {secondPart}
      </Typography>
      {thirdPart || ''}
    </Typography>
  )
}
