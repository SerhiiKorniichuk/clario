import { FC, ReactNode } from 'react'
import { AccordionHeader } from '@/components/Accordion/components/AccordionHeader/AccordionHeader'
import { AccordionBody } from '@/components/Accordion/components/AccordionBody/AccordionBody'
import { useCollapse } from 'react-collapsed'
import cn from 'classnames'

interface Props {
  className?: string
  index: number
  isActive?: boolean
  onSelect?: () => void
  title: string
  children: ReactNode
}

export const AccordionItem: FC<Props> = ({
  className,
  index,
  isActive,
  onSelect,
  title,
  children,
}) => {
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: isActive,
  })

  return (
    <div className={cn(className)}>
      <AccordionHeader
        getParams={() => getToggleProps({ onClick: onSelect })}
        index={index}
        isActive={isActive}
      >
        {title}
      </AccordionHeader>
      <AccordionBody getParams={getCollapseProps}>{children}</AccordionBody>
    </div>
  )
}
