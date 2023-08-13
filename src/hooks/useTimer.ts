'use client'

import { useEffect, useState } from 'react'

const HOUR_IN_SECONDS = 3600
const MINUTE_IN_SECONDS = 60
const SECOND_IN_MILLISECONDS = 1000

const convertNumberToStringWithPad = (value: number) =>
  String(value).padStart(2, '0')

export const formatTime = (time: number) => {
  const hours = Math.floor(time / HOUR_IN_SECONDS)
  const minutes = Math.floor((time % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS)
  const seconds = time % MINUTE_IN_SECONDS
  return [
    convertNumberToStringWithPad(hours),
    convertNumberToStringWithPad(minutes),
    convertNumberToStringWithPad(seconds),
  ]
}

export const useTimer = (initialTimeInSeconds: number) => {
  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1)
      }
    }, SECOND_IN_MILLISECONDS)

    if (remainingTime === 0) clearInterval(interval)

    return () => clearInterval(interval)
  }, [remainingTime])

  return formatTime(remainingTime)
}
