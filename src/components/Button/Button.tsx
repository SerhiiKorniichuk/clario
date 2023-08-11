import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { Typography } from '@/components/Typography/Typography'
import cn from 'classnames'
import styles from './button.module.scss'
import colors from '@/styles/colors.module.scss'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fullWidth?: boolean
}

export const Button: FC<Props> = ({
  className,
  fullWidth = false,
  children,
  ...props
}) => {
  const buttonClassNames = cn(
    styles.button,
    { [styles.fullWidth]: fullWidth },
    className,
  )

  return (
    <button {...props} className={buttonClassNames}>
      <Typography variant="button1" color={colors.white}>
        {children}
      </Typography>
    </button>
  )
}
