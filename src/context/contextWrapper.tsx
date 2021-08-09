import * as React from 'react'
import { Setup } from '../components/Setup'
import { theme } from '../shared/theme'
import { ThemeProvider } from './theme.context'
import { UtilsProvider } from './utils.context'

export const ContextWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <UtilsProvider>
          <Setup />
        {children}
        </UtilsProvider>
    </ThemeProvider>
  )
}
 