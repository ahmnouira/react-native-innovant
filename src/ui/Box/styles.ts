import { StyleSheet } from 'react-native'
import { theme } from '../../shared/theme'
import { windowWidth } from '../../helpers/paltfrom'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    margin: 4,
    borderRadius: 10,
  },

  instrumentView: {
    flex: 1,
    height: windowWidth / 3 - 12,
    width: windowWidth / 3 - 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 4,
  },

  text: {
    fontFamily: theme?.fonts.secondary.regular,
    fontSize: 17,
    textTransform: 'capitalize',
    textAlign: 'center',
    lineHeight: 22,
    color: '#151515',
  },
})
