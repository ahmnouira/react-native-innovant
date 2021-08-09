import { StyleSheet } from 'react-native'
import { theme } from '../../shared/theme'

export const styles = StyleSheet.create({
  title: {
    color: '#646464',
    fontFamily: theme?.fonts.secondary.regular,
    textTransform: 'uppercase',
    fontSize: 12,
  },

  main: {},

  row: {
    flex: 1,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  text: {
    marginLeft: 8,
    color: theme?.colors.black,
    fontFamily: theme?.fonts.secondary.regular,
    fontSize: 13,
  },

  icon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },

  bold: {
    fontFamily: theme?.fonts.secondary.bold,
  },
})
