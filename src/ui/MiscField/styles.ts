import { StyleSheet } from 'react-native'
import { isIOS } from '../../helpers/paltfrom'
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  label: {
    color: theme.colors.black,
    lineHeight: 20,
    textAlign: 'left',
    letterSpacing: -0.24,
    fontFamily: theme.fonts.secondary.medium,
    fontSize: 15,
  },
  colored: {
    color: theme.colors.primary,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: isIOS ? 8 : 0,
    marginBottom: isIOS ? 16 : 8,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
})
