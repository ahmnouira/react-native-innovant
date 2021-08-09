export type ToastType = {
  message: string
  visible: boolean
  postion?: 'bottom' | 'top'
}

export type ImageModalType = {
  image: string
  visible: boolean
}

export type SnackbarType = {
  visible: boolean
  textMessage?: string
  context?: 'offline' | 'networkFailed'
}
