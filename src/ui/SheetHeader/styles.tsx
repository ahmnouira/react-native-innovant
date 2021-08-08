import { StyleSheet } from 'react-native'
import { commonStyles } from '../../shared/styles'

const { sheetCloseBtn, sheetCloseIcon, sheetTitle, sheetOkBtn, sheetOkLabel } = commonStyles

export const styles = StyleSheet.create({
  closeBtn: sheetCloseBtn,
  closeIcon: sheetCloseIcon,
  title: sheetTitle,
  okBtn: sheetOkBtn,
  ok: sheetOkLabel,

  icon: {
    resizeMode: 'contain',
  },

  empty: {
    ...sheetOkBtn,
    backgroundColor: 'transparent',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
  },
})
