import * as React from 'react'
import { View } from 'react-native'
import { Pill } from '../Pill'
import { styles } from './styles'

export type PillListProps<T = any> = {
  items: T[]
  selectedItems: T[]
  handleChange: (item: T) => void
}

export const PillList: React.FC<PillListProps> = ({ items, selectedItems, handleChange }: PillListProps) => {
  return (
    <View style={styles.main}>
      <View style={styles.genresView}>
        {items.map((item, index) => (
          <Pill
            key={index}
            title={item}
            isChecked={selectedItems.includes(item)}
            handlePress={() => handleChange(item)}
          />
        ))}
      </View>
    </View>
  )
}
