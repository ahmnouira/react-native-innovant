import * as React from 'react'
import { ColorValue } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from '../TouchableOpacity'
import { styles } from './styles'

export type RadioBoxProps = {
  color: ColorValue
  checked?: boolean
}

export const RadioBox = ({ checked = false, color }: RadioBoxProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { borderEndColor: color }, checked ? { backgroundColor: color } : null]}>
      {checked ? <Icon name='check' style={[styles.checkIcon]} /> : null}
    </TouchableOpacity>
  )
}
