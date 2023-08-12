import { GridContainer } from '@/components/GridContainer/GridContainer'
import {
  InfoBanner,
  InfoBannerData,
} from '@/sections/BannersPresentationSection/components/InfoBanner/InfoBanner'
import styles from './bannersPresentationSection.module.scss'
import { Typography } from '@/components/Typography/Typography'

const banners: InfoBannerData[] = [
  {
    pictureSrc: '/banners/spyware-detector-banner.svg',
    title: 'Spyware detector',
    subtitle: 'Find apps secretly spying on you and your data.',
    list: [
      {
        iconScr: '/icons/identity-icon.svg',
        text: 'Full background anti-spyware scan',
      },
      {
        iconScr: '/icons/ring-icon.svg',
        text: 'Instant spyware detection alerts',
      },
      {
        iconScr: '/icons/network-icon.svg',
        text: 'Immediate threat quarantining',
      },
    ],
  },
  {
    color: 'pink',
    pictureSrc: '/banners/tracker-detector-banner.svg',
    title: 'Tracker detector',
    subtitle: 'Discover who tracks your location to spy on you.',
    list: [
      {
        iconScr: '/icons/eye-icon.svg',
        text: 'Stop being secretly tracked',
      },
      {
        iconScr: '/icons/location-icon.svg',
        text: 'Protect your real location',
      },
      {
        iconScr: '/icons/safari-icon.svg',
        text: 'Control who sees your location',
      },
    ],
  },
  {
    color: 'blue',
    pictureSrc: '/banners/social-media-protection-banner.svg',
    title: 'Social media protection',
    subtitle: 'Easily prevent social media account hacks.',
    list: [
      {
        iconScr: '/icons/instagram-icon.svg',
        text: 'See who uses your accounts',
      },
      {
        iconScr: '/icons/shield-icon.svg',
        text: 'Revoke access for other users',
      },
      {
        iconScr: '/icons/ring-icon.svg',
        text: 'Get unauthorized login alerts',
      },
    ],
  },
  {
    color: 'green',
    pictureSrc: '/banners/call-recorder-blocker-banner.svg',
    title: 'Call recorder blocker',
    subtitle: 'Discover if someone records your calls and chats.',
    list: [
      {
        iconScr: '/icons/mobile-icon.svg',
        text: 'Hide your call history and records',
      },
      {
        iconScr: '/icons/widget-icon.svg',
        text: 'Revoke sharing your contact list',
      },
      {
        iconScr: '/icons/alert-icon.svg',
        text: 'Help secret texts remain secret',
      },
    ],
  },
  {
    pictureSrc: '/banners/screen-recording-detector-banner.svg',
    title: 'Screen recording detector',
    subtitle: 'Don’t let anyone access your phone screen.',
    list: [
      {
        iconScr: '/icons/incognito-icon.svg',
        text: 'Find out if your screen is being recorded',
      },
      {
        iconScr: '/icons/not-incognito-icon.svg',
        text: 'Immediately stop silent recordings',
      },
      {
        iconScr: '/icons/ring-icon.svg',
        text: 'Get alerts if your camera is in use',
      },
    ],
  },
]

export const BannersPresentationSection = () => {
  return (
    <section className={styles.wrapper}>
      <GridContainer>
        <Typography
          variant="h2"
          tag="h2"
          align="center"
          className={styles.title}
        >
          Clario helps you easily avoid spying.
        </Typography>
        <div className={styles.banners}>
          {banners.map((banner) => (
            <InfoBanner key={banner.title} {...banner} />
          ))}
        </div>
      </GridContainer>
    </section>
  )
}
