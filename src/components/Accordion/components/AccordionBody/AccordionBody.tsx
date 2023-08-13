import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import { Typography } from '@/components/Typography/Typography'
import styles from '@/components/Accordion/components/AccordionBody/accordionBody.module.scss'
import cn from 'classnames'

interface Props {
  className?: string
  getParams: () => DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  children: ReactNode
}

export const AccordionBody: FC<Props> = ({
  className,
  getParams,
  children,
}) => {
  return (
    <div {...getParams()}>
      <div className={cn(styles.container, className)}>
        <Typography>{children}</Typography>
      </div>
    </div>
  )
}
