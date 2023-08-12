'use client'

import styles from '@/sections/SpecialOfferSection/components/TimerBanner/timerBanner.module.scss'
import colors from '@/styles/colors.module.scss'
import { Typography } from '@/components/Typography/Typography'
import { useTimer } from '@/hooks/useTimer'

export const TimerBanner = () => {
  const THIRTY_MINUTES_IN_SECONDS = 1800

  const [, minutes, seconds] = useTimer(THIRTY_MINUTES_IN_SECONDS)

  const time = `${minutes}:${seconds}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography variant="body2" tag="span" color={colors.orange}>
          Special offer valid for
        </Typography>
        <div className={styles.timer}>
          <Typography variant="h5" tag="span" color={colors.orange}>
            {time}
          </Typography>
          <Typography variant="body2" tag="span" color={colors.orange}>
            min
          </Typography>
        </div>
      </div>
    </div>
  )
}
