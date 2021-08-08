import { StyleSheet } from 'react-native'
import { commonStyles } from '../../shared/styles'

const { sheetDraggableIcon, sheetWrapper, sheetContainer } = commonStyles

export const styles = StyleSheet.create({
  sheetContainer,
  sheetWrapper,
  sheetDraggableIcon,

  container: {
    marginHorizontal: 8,
    marginTop: 8,
  },

  scroll: {
    borderTopWidth: 1,
    borderTopColor: '#00000029',
    marginHorizontal: -8,
  },
  main: {
    padding: 20,
    paddingRight: 23,
  },
})
