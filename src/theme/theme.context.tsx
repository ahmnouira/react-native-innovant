import * as React from 'react';
import { ThemeType } from './theme';

export type ThemeContextProps = {
  theme: ThemeType;
};

export type ThemeProvideProps = ThemeContextProps & {};

export const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children, theme }: React.PropsWithChildren<ThemeProvideProps>) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
