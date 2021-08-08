import * as React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { isIOS } from '../../helpers/paltfrom';
import { useTheme } from '../../hooks/useTheme';

export const Status: React.FC<StatusBarProps> = (props: StatusBarProps) => {
  const theme = useTheme();
  return (
    <StatusBar
      hidden={false}
      translucent={false}
      barStyle={isIOS ? 'dark-content' : 'light-content'}
      backgroundColor={theme?.colors.primary}
      showHideTransition='slide'
      animated={isIOS}
      {...props}
    />
  );
};
