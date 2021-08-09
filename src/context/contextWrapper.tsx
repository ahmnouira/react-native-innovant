import * as React from 'react'
import { theme } from '../shared/theme'
import { ThemeProvider } from './theme.context'
import { UtilsProvider } from './utils.context'

export const ContextWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <UtilsProvider>{children}</UtilsProvider>
    </ThemeProvider>
  )
}
