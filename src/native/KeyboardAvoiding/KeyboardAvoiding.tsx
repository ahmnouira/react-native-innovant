import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import { isIOS } from '../../helpers/paltfrom';

type KeyboardAvoidingProps = {};

export const KeyboardAvoiding: React.FC<KeyboardAvoidingProps> = ({
  children,
  ...rest
}: PropsWithChildren<KeyboardAvoidingProps>) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={isIOS ? (hasNotch() ? 90 : 64) : 0}
      behavior={isIOS ? 'padding' : undefined}
      style={{ flex: 1 }}>
      {children}
    </KeyboardAvoidingView>
  );
};
