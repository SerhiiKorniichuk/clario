import { FC, ReactNode } from 'react'
import styles from './gridContainer.module.scss'

interface Props {
  children?: ReactNode
}

export const GridContainer: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
