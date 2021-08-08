import * as React from 'react'
import { styles } from './styles'
import { TouchableOpacity, Text, Image, ColorValue, View, ImageProps } from 'react-native'

export type BadgeProps = {
  text: string
  bgColor: ColorValue
  textColor?: ColorValue
  image?: ImageProps
}

export const Badge: React.FC<BadgeProps> = ({ text, bgColor, textColor = 'white', image }: BadgeProps) => {
  return (
    <TouchableOpacity style={[styles.badge, { backgroundColor: bgColor }]} activeOpacity={0.75}>
      {image ? (
        <View style={{ flexWrap: 'wrap' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={image} style={styles.icon} />
            <Text style={[styles.text, { marginLeft: 4, color: textColor }]}>{text}</Text>
          </View>
        </View>
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}
