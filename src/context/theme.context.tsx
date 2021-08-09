import * as React from 'react'
import { ThemeType, theme as defaultTheme } from '../shared/theme'

export type ThemeContextProps = {
  theme?: ThemeType
}

export type ThemeProvideProps = ThemeContextProps & {}

export const ThemeContext: React.Context<ThemeContextProps> = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

export const ThemeConsumer: React.Consumer<ThemeContextProps> = ThemeContext.Consumer

export const ThemeProvider = ({ children, theme = defaultTheme }: React.PropsWithChildren<ThemeProvideProps>) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}
