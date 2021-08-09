import * as React from 'react'
import { Toast } from '../Toast'
import { Snackbar } from '../Snackbar'
import { Status } from '../Status'
import { useUtils } from '../../hooks/useUtils'

export const Setup = (_props: any) => {
  const { toast, snackbar, dispatch } = useUtils()

  React.useEffect(() => {
    dispatch({
      type: 'SET_TOAST',
      payload: {
        postion: 'bottom',
        message: '',
        visible: false,
      },
    })
  }, [toast?.visible])

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          ...snackbar,
          visible: false,
        },
      })
    }, 5000)
  }, [snackbar?.visible])

  return (
    <React.Fragment>
      <Status />
      <Snackbar {...snackbar} />
      <Toast visible={toast?.visible} message={toast?.message ? toast.message : ''} position={toast?.postion} />
    </React.Fragment>
  )
}
