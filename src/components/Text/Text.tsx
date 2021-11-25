import * as React from 'react'
import { StyleSheet, TextProps as RNTextProps } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

type TextProps = RNTextProps & {
  font?: 'bold' | 'regular' | 'light' | 'medium'
  size?: number
}

export const Text: React.FC<TextProps> = ({
  font = 'regular',
  size,
  children,
  style,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    font: {
      fontFamily: theme?.fonts.primary[font],
      fontSize: theme?.sizes.md,
      color: theme?.colors.black,
    },
  })

  return (
    <Text style={[styles.font, style]} {...props}>
      {children}
    </Text>
  )
}
