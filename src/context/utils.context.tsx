/** accounting for freelancers **/
import * as React from 'react'
import { ImageModalType, SnackbarType, ToastType } from '../types'
import { UtilsAction } from './actions/utils.action'
import { initialUtilsState, utilsReducer } from './reducers/utils/utils.reducer'

type UtilsContextProps = {
  toast: ToastType
  snackbar: SnackbarType
  imageModal: ImageModalType
  dispatch: React.Dispatch<UtilsAction>
}

export const UtilsContext: React.Context<UtilsContextProps> = React.createContext<UtilsContextProps>(
  {} as UtilsContextProps
)

export const UtilsProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = React.useReducer(utilsReducer, initialUtilsState)
  return (
    <UtilsContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </UtilsContext.Provider>
  )
}
