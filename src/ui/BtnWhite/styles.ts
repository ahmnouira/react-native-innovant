import { StyleSheet } from 'react-native'
import { theme } from '../../shared/theme'
import { commonStyles } from '../../shared/styles'

export const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    ...commonStyles.shadow3,
  },

  gmail: {
    resizeMode: 'contain',
    width: 27,
    height: 27,
  },

  label: {
    fontFamily: theme?.fonts.primary.regular, // Mont
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: theme?.colors.black,
  },
})
