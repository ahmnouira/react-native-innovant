export type ThemeType = {
  fonts: {
    primary: {
      regular: string
      bold: string
    }

    secondary: {
      regular: string
      bold: string
      medium: string
    }
  }
  colors: {
    primary: string
    light: string
    secondary: string
    tertiary: string
    black: string
    white: string
  }
  sizes: {
    xm: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
  }
}

export const theme: ThemeType = {
  fonts: {
    primary: {
      regular: 'Poppins-Regular',
      bold: 'Poppins-Bold',
    },
    secondary: {
      regular: 'Montserrat-Regular',
      bold: 'Montserrat-Bold',
      medium: 'Montserrat-Medium',
    },
  },
  colors: {
    primary: '#ED1E46',
    light: '#F68955',
    secondary: 'rgba(0, 0, 0, .5)',
    tertiary: 'rgba(0, 0, 0, .2)',
    black: '#151515',
    white: '#FFF',
  },
  sizes: {
    xm: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
}
