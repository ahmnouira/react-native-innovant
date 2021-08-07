import React, { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

type ContainerProps = ViewProps & {
  secondary?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  secondary,
  children,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.colors.primary,
    },
    secondary: {
      backgroundColor: 'white',
    },
  });

  return (
    <SafeAreaView style={[styles.container, secondary ? styles.secondary : null]} {...rest}>
      {children}
    </SafeAreaView>
  );
};
