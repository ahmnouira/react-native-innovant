import * as React from 'react'
import { TouchableOpacityProps, TouchableOpacity as RNTouchableOpacity } from 'react-native'

export const TouchableOpacity: React.FC<React.PropsWithChildren<TouchableOpacityProps>> = ({
  children,
  ...props
}: React.PropsWithChildren<TouchableOpacityProps>) => {
  return (
    <RNTouchableOpacity activeOpacity={0.75} {...props}>
      {children}
    </RNTouchableOpacity>
  )
}
