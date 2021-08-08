import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  view: {
    marginBottom: 120,
  },

  image: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },

  text: {
    textAlign: 'center',
    fontFamily: theme.fonts.secondary.medium,

    fontSize: 17,
    color: theme.colors.primary,
  },
})
