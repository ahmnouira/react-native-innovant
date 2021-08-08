import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from './styles'

type IconButtonProps = {
  icon: any
  onPress: () => void
  color?: string
  size?: number
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onPress, color, size = 18 }: IconButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress} style={styles.iconView}>
      <Icon name={icon} color={color} size={size} />
    </TouchableOpacity>
  )
}
