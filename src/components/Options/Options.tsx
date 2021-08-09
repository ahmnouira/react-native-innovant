import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from './styles'

export type OptionType = {
  title: string
  onPress: () => void
  icon?: string
}

export type OptionsProps = {
  options: OptionType[]
}

export const Options: React.FC<OptionsProps> = ({ options }: OptionsProps) => {
  return (
    <View style={styles.main}>
      {options &&
        options.map((option: OptionType, index: number) => (
          <TouchableOpacity key={index} onPress={option.onPress} activeOpacity={0.75} style={styles.row}>
            {option.icon ? <Icon name={option.icon} size={25} /> : <View style={{ height: 25 }} />}
            <Text style={[styles.text]}>{option.title}</Text>
          </TouchableOpacity>
        ))}
    </View>
  )
}
