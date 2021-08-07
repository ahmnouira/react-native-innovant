import * as React from 'react';
import RNSnackbar, { SnackbarComponentProps } from 'react-native-snackbar-component';

type SnackbarProps = SnackbarComponentProps & {};

export const Snackbar: React.FC<SnackbarProps> = ({ visible, textMessage }: SnackbarProps) => {
  return (
    <RNSnackbar
      visible={visible}
      //SnackBar visibility control
      textMessage={textMessage}
      //autoHidingTime={8000}

      //Text on SnackBar
    />
  );
};
