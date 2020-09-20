import { IColor, ITheme } from '@interfaces/styles'

export const theme: ITheme = {
  mode: 'light',
  colors: {
    background: {
      dark: '#3d3d3d',
      light: '#f3f4f6',
    },
    default: {
      dark: '#fff',
      light: '#000',
    },
    primary: {
      dark: '#679b9b',
      light: '#679b9b',
    },
    brand: {
      dark: '#637373',
      light: '#637373',
    },
    error: {
      light: '#EE634E',
      dark: '#EE634E',
    },
    placeholder: {
      light: '#A1AAB4',
      dark: '#FAFAFA',
    },
    text: {
      light: '#000',
      dark: '#fff',
    },
    cardBackground: {
      light: '#fff',
      dark: '#1c1c1c',
    },
    opposite: (mode: string, type: string) => {
      // @ts-ignore
      const themeAttribute: IColor = theme.colors[type]
      const oppositeMode = mode === 'dark' ? 'light' : 'dark'
      if (!themeAttribute) return 'red'

      return themeAttribute[oppositeMode]
    },
  },
}
