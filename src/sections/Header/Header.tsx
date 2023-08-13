'use client'

import Image from 'next/image'
import { GridContainer } from '@/components/GridContainer/GridContainer'
import styles from './header.module.scss'
import cn from 'classnames'
import { ScrollToBuyButton } from '@/components/ScrollToBuyButton/ScrollToBuyButton'
import React, { useState } from 'react'
import { useShowingObserver } from '@/hooks/useShowingObserver'

export const StaticHeader = ({ className }: { className?: string }) => {
  return (
    <header className={cn(styles.header, className)}>
      <GridContainer>
        <div className={cn(styles.containerStatic)}>
          <Image src="/logos/main-logo.svg" alt="Logo" width={80} height={22} />
        </div>
      </GridContainer>
    </header>
  )
}

export const StickyHeader = ({ className }: { className?: string }) => {
  return (
    <header className={cn(styles.header, styles.isSticky, className)}>
      <GridContainer>
        <div className={cn(styles.containerSticky)}>
          <div className={styles.logo}>
            <Image
              src="/logos/main-logo.svg"
              alt="Logo"
              width={80}
              height={22}
            />
          </div>
          <div className={styles.button}>
            <ScrollToBuyButton size="sm" />
          </div>
        </div>
      </GridContainer>
    </header>
  )
}

export const Header = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  const handleStickyHeaderObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setShowStickyHeader(!entry.isIntersecting)
    })
  }

  useShowingObserver({
    attribute: Header.observerAttr,
    callback: handleStickyHeaderObserver,
  })

  return showStickyHeader ? <StickyHeader /> : <StaticHeader />
}

Header.observerAttr = 'data-observer-header-threshold'
