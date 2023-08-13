import styles from '@/components/Accordion/components/AccordionHeader/accordionHeader.module.scss'
import { Typography } from '@/components/Typography/Typography'
import colors from '@/styles/colors.module.scss'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import { ArrowDownSVGIcon } from '@/components/Accordion/components/ArrowDownSVGIcon/ArrowDownSVGIcon'

interface Props {
  className?: string
  index: number
  isActive?: boolean
  getParams: () => DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  children?: string
}

export const AccordionHeader: FC<Props> = ({
  className,
  index,
  isActive = false,
  children,
  getParams,
}) => {
  return (
    <div
      {...getParams()}
      className={cn(
        styles.container,
        { [styles.isActive]: isActive },
        className,
      )}
    >
      <div className={styles.counter}>
        <Typography variant="subtitle1-bold" tag="span" color={colors.white}>
          {index + 1}
        </Typography>
      </div>
      <Typography
        variant="subtitle1"
        tag="h6"
        color={isActive ? colors.lime : colors.dark}
      >
        {children}
      </Typography>
      <div className={styles.arrow}>
        <ArrowDownSVGIcon />
      </div>
    </div>
  )
}
