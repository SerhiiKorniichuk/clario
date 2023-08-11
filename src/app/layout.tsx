import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { localFonts } from '@/fonts'

export const metadata: Metadata = {
  title: 'Clario',
  description: 'Clario Web Application',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={localFonts.className}>{children}</body>
    </html>
  )
}
