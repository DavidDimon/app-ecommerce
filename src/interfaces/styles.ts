export interface IColor {
  dark: string
  light: string
}

export interface ITheme {
  mode: 'light' | 'dark'
  colors: IColors
}


export interface IColors {
  background: IColor
  default: IColor
  primary: IColor
  brand: IColor
  error: IColor
  placeholder: IColor
  text: IColor
  opposite: (mode: string, type: string) => string
}
