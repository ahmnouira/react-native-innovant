import * as React from 'react'
import { ColorValue, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign'

export type CheckBoxProps = {
  color: ColorValue
  checked?: boolean
}

export const CheckBox: React.FC<CheckBoxProps> = ({ checked = false, color }: CheckBoxProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[styles.container, checked ? { backgroundColor: color } : null, { borderColor: color }]}>
      {checked ? <Icon name='check' style={[styles.checkIcon]} /> : null}
    </TouchableOpacity>
  )
}
