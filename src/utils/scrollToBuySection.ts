import { scrollToSectionById } from '@/utils/scrollToSectionById'
import { BUYING_SECTION_ID } from '@/constants/sectionIds'

const scrollToSectionWithCounter = (sectionId: string) => {
  let counterOfClicks = 0

  return () => {
    scrollToSectionById(sectionId)
    counterOfClicks++
    console.log('Scroll To Price: ', counterOfClicks)
  }
}

export const scrollToBuySection = scrollToSectionWithCounter(BUYING_SECTION_ID)
