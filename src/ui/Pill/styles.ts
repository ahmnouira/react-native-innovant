import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'

export const styles = StyleSheet.create({
  pill: {
    backgroundColor: 'rgba(255, 255, 255,.2)',
    height: 40,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
  },
  pillText: {
    textAlign: 'center',
    fontFamily: theme.fonts.secondary.regular,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.041,
  },

  checked: {
    backgroundColor: theme.colors.white,
  },
})
