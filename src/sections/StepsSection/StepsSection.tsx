import { GridContainer } from '@/components/GridContainer/GridContainer'
import { TwoColorTypography } from '@/components/TwoColorTypography/TwoColorTypography'
import styles from '@/sections/StepsSection/stepsSection.module.scss'
import colors from '@/styles/colors.module.scss'
import { Accordion } from '@/components/Accordion/Accordion'
import { AccordionData } from '@/components/Accordion/types'

const steps: AccordionData[] = [
  {
    title: 'Install Clario',
    description:
      'Free yourself from worrying about online security by installing Clario quickly and easily.',
  },
  {
    title: 'Set up your protection',
    description:
      'Create a secure barrier for your digital assets with Clario - in just a few steps.',
  },
  {
    title: 'Enjoy spy-free life',
    description: 'Relax and let Clario do the job.',
  },
]

export const StepsSection = () => {
  return (
    <section className={styles.wrapper}>
      <GridContainer>
        <TwoColorTypography
          className={styles.title}
          variant="h2"
          tag="h2"
          align="center"
          secondaryColor={colors.lime}
          split={[22, 34]}
        >
          All you need to do is&nbsp;3&nbsp;easy&nbsp;steps.
        </TwoColorTypography>
        <Accordion className={styles.accordion} list={steps} />
      </GridContainer>
    </section>
  )
}
