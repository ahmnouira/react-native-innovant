import * as React from 'react';
import { SafeAreaView, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { styles } from './styles';

type LoadingProps = ActivityIndicatorProps & {
  size?: number | 'small' | 'large' | undefined;
  center?: boolean;
};

export const Loading: React.FC<LoadingProps> = ({ size, center = false, ...props }: LoadingProps) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={center ? styles.container : { marginTop: theme?.sizes.lg }}>
      <ActivityIndicator size={size} color={theme?.colors.primary} {...props} />
    </SafeAreaView>
  );
};
