import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'

export const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2,
    paddingHorizontal: 8,
    minHeight: 30,
  },

  text: {
    lineHeight: 22,
    fontSize: 17,
    fontFamily: theme?.fonts.secondary.regular,
    letterSpacing: -0.41,
    textTransform: 'capitalize',
  },

  icon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
  },
})
