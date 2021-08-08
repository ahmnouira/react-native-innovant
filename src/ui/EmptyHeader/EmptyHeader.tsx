import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const EmptyHeader: React.FC<any> = () => {
  return <TouchableOpacity disabled activeOpacity={1} style={styles.button} />
}
