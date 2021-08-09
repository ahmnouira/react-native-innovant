import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

type PillProps = {
  title: string
  isChecked: boolean
  handlePress: () => void
}

export const Pill: React.FC<PillProps> = ({ title, isChecked, handlePress }: PillProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      testID={`title-${title}`}
      onPress={handlePress}
      style={[styles.pill, isChecked && styles.checked]}>
      <Text style={[styles.pillText, { color: isChecked ? '#151515' : '#FFF' }]}>{title}</Text>
    </TouchableOpacity>
  )
}
