import * as React from 'react'
import { Setup } from '../components/Setup'
import { UtilsProvider } from './utils.context'

export const ContextWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <UtilsProvider>
      <Setup />
      {children}
    </UtilsProvider>
  )
}
