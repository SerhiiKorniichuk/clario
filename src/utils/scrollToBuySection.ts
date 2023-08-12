import { scrollToSectionById } from '@/utils/scrollToSectionById'
import { BUYING_SECTION_ID } from '@/constants/sectionIds'

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

export const scrollToBuySection = scrollToSectionWithCounter(BUYING_SECTION_ID)
