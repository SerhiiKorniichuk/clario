import localFont from 'next/font/local'

export const localFonts = localFont({
  src: [
    {
      path: './Moderat-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Moderat-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Moderat-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Moderat-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-moderat',
})
