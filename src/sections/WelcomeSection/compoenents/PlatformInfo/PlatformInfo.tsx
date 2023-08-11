import {
  PlatformView,
  PlatformViewOptions,
} from '@/sections/WelcomeSection/compoenents/PlatformInfo/components/PlatformView/PlatformView'
import styles from './platformInfo.module.scss'

const platforms: PlatformViewOptions[] = [
  { iconSrc: '/icons/apple-icon.svg', title: 'iOS' },
  { iconSrc: '/icons/desktop-icon.svg', title: 'macOS, Windows' },
]

export const PlatformInfo = () => {
  return (
    <div className={styles.container}>
      {platforms.map(({ iconSrc, title }) => (
        <PlatformView key={title} iconSrc={iconSrc} title={title} />
      ))}
    </div>
  )
}
