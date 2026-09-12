import * as React from 'react'
import { StyleSheet, TextProps as RNTextProps } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

type Font = 'bold' | 'regular' | 'light' | 'medium'

type TextProps = RNTextProps & {
  font?: Font
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
  if (!theme) {
    return (
      <Text style={[style]} {...props}>
        {children}
      </Text>
    )
  }

  const styles = StyleSheet.create({
    font: {
      fontFamily: theme.fonts.primary[font],
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
