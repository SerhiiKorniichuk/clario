import { scrollToSectionById } from '@/utils/scrollToSectionById'
import { SpecialOfferSection } from '@/sections/SpecialOfferSection/SpecialOfferSection'

const scrollToSectionWithCounter = (sectionId: string) => {
  let counterOfClicks = 0

  // setTimeout is used to preserve the ability to scroll when the previous scroll has not yet completed.
  let timeout: NodeJS.Timeout | null = null

  return () => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      scrollToSectionById(sectionId)
      counterOfClicks++
      console.log('Scroll To Price: ', counterOfClicks)
      timeout = null
    }, 500)
  }
}

export const scrollToBuySection = scrollToSectionWithCounter(
  SpecialOfferSection.id,
)
