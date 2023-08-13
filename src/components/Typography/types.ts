export type TypographyTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'button'
  | 'sup'
  | 'sub'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h4'
  | 'h5'
  | 'subtitle1'
  | 'subtitle1-bold'
  | 'body1'
  | 'body1-bold'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'button1'
  | 'button2'
  | 'price1'
  | 'price2'
  | 'price3'

export type TypographyVariantsDefinition = Record<TypographyVariant, string>

export type TypographyAlign = 'inherit' | 'left' | 'center' | 'right'
