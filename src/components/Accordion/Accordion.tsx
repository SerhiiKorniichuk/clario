'use client'

import { AccordionItem } from '@/components/Accordion/components/AccordionItem/AccordionItem'
import styles from '@/components/Accordion/Accordion.module.scss'
import { Children, cloneElement, FC, ReactElement, useState } from 'react'
import { AccordionData } from '@/components/Accordion/types'
import { generateUniqId } from '@/utils/generateUniqId'
import cn from 'classnames'

interface Props {
  className?: string
  list: AccordionData[]
}

const AccordionParent = ({
  className,
  children,
}: {
  className?: string
  itemClassName?: string
  children: ReactElement[]
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  return (
    <div className={cn(styles.container, className)}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          ...child,
          className: styles.item,
          isActive: activeIndex === index,
          onSelect: () => setActiveIndex(activeIndex === index ? null : index),
        }),
      )}
    </div>
  )
}

export const Accordion: FC<Props> = ({ className, list }) => {
  return (
    <AccordionParent className={className}>
      {list.map(({ title, description }, index) => (
        <AccordionItem
          key={generateUniqId('accordion')}
          title={title}
          index={index}
        >
          {description}
        </AccordionItem>
      ))}
    </AccordionParent>
  )
}
