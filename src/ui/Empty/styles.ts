import { StyleSheet } from 'react-native'
import { theme } from '../..'
import { isTall } from '../../helpers/paltfrom'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },

  view: {
    marginBottom: isTall ? 100 : 50,
  },

  image: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },

  text: {
    textAlign: 'center',
    fontFamily: theme.fonts.secondary.regular,
    fontSize: 17,
    lineHeight: 19,
    letterSpacing: 0.32,
    color: 'rgba(0, 0, 0, .5)',
  },
})
