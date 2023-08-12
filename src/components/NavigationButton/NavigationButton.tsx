import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from '@/components/NavigationButton/navigationButton.module.scss'
import cn from 'classnames'
import Image from 'next/image'

export type NavigationButtonDirection = 'left' | 'right'

export interface NavigationButtonOptions
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'children'
  > {
  direction?: NavigationButtonDirection
}

const arrowSrc: Record<NavigationButtonDirection, string> = {
  left: '/icons/arrow-left-icon.svg',
  right: '/icons/arrow-right-icon.svg',
}

export const NavigationButton: FC<NavigationButtonOptions> = ({
  className,
  direction = 'left',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn('buttonBaseStyles', styles.button, className)}
    >
      <div className={styles.container}>
        <Image
          src={arrowSrc[direction]}
          alt="Navigation"
          width={24}
          height={24}
        />
      </div>
    </button>
  )
}
