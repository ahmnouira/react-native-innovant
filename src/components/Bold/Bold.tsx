import * as React from 'react'
import { StyleSheet, TextProps } from 'react-native'
import { Text } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

type BoldProps = TextProps & {
  variant?: 'primary' | 'secondary'
}

export const Bold: React.FC<BoldProps> = ({ variant, children, ...props }: React.PropsWithChildren<BoldProps>) => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    boldPirmary: {
      fontFamily: theme?.fonts.primary.bold,
    },

    boldSecondary: {
      fontFamily: theme?.fonts.secondary.bold,
    },
  })

  return (
    <Text style={variant === 'secondary' ? styles.boldSecondary : styles.boldPirmary} {...props}>
      {children}
    </Text>
  )
}
