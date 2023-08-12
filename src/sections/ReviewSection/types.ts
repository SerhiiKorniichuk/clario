import { ReactNode } from 'react'

export interface ReviewData {
  color?: {
    text?: string
    card?: string
  }
  logo: ReactNode
  text: string
  name: string
}
