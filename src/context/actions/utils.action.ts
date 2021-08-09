import * as React from 'react'
import { ImageModalType, SnackbarType, ToastType } from '../../types'

export type SetToastAction = {
  type: 'SET_TOAST'
  payload: ToastType
}

export type SetSnackbarAction = {
  type: 'SET_SNACKBAR'
  payload: SnackbarType
}

export type SetImageModalAction = {
  type: 'SHOW_IMAGE_MODAL'
  payload: ImageModalType
}

export type CloseImageModalAction = {
  type: 'CLOSE_IMAGE_MODAL'
}

export type UtilsAction = SetToastAction | SetSnackbarAction | SetImageModalAction | CloseImageModalAction

export const doToast = (dispatch: React.Dispatch<UtilsAction>, payload: ToastType) => {
  dispatch({ type: 'SET_TOAST', payload })
}

export const doSnackbar = (dispatch: React.Dispatch<UtilsAction>, payload: SnackbarType) => {
  dispatch({ type: 'SET_SNACKBAR', payload })
}

export const showImageModal = (dispatch: React.Dispatch<UtilsAction>, payload: ImageModalType) => {
  dispatch({ type: 'SHOW_IMAGE_MODAL', payload })
}

export const closeImageModal = (dispatch: React.Dispatch<UtilsAction>) => {
  dispatch({ type: 'CLOSE_IMAGE_MODAL' })
}
