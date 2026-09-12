import React, { PropsWithChildren } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { isIOS } from '../../helpers/paltfrom'

type KeyboardAvoidingProps = {
  hasNotch?: boolean
}

export const KeyboardAvoiding: React.FC<PropsWithChildren<KeyboardAvoidingProps>> = ({
  hasNotch,
  children,
}: PropsWithChildren<KeyboardAvoidingProps>) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={isIOS ? (hasNotch ? 90 : 64) : 0}
      behavior={isIOS ? 'padding' : undefined}
      style={{ flex: 1 }}>
      {children}
    </KeyboardAvoidingView>
  )
}
