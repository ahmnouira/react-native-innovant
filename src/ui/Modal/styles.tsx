import { StyleSheet } from 'react-native'
// import { commonStyles } from '../../../shared/styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
   // ...commonStyles.shadow5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  roundView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeView: {
    backgroundColor: '#08080806',
  },



  icon: {
    resizeMode: 'contain',
  },

  details: {
    flex: 1,
  },
})
