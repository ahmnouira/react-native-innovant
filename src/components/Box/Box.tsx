import * as React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from '../TouchableOpacity'
import { styles } from './styles'

type BoxProps = {
  title: string
  pic: any
  isChecked: boolean
  handlePress: () => void
}

export const Box: React.FC<BoxProps> = ({ title, pic, isChecked, handlePress }: BoxProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, isChecked ? { backgroundColor: 'white' } : {}]}>
        <View style={[styles.instrumentView]}>
          <Image style={[styles.icon, { tintColor: isChecked ? '#151515' : '#FFF' }]} source={pic} />
          <Text style={[styles.text, isChecked ? { color: '#151515' } : { color: '#FFF' }]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
