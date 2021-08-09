import * as React from 'react'
import SimpleToast from 'react-native-simple-toast'
//Imperative hack#
//The ToastAndroid API is imperative, but there is a way to expose a declarative component from it
type ToastProps = {
  visible: boolean
  message: string
  position?: 'bottom' | 'top'
}

export const Toast: React.FC<ToastProps> = ({ visible, message, position = 'top' }: ToastProps) => {
  if (visible) {
    SimpleToast.showWithGravity(message, SimpleToast.LONG, position === 'top' ? SimpleToast.TOP : SimpleToast.BOTTOM, [
      'UIAlertController',
    ])
  }
  return null
}
