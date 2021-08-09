import * as React from 'react'
import { FlatList, FlatListProps, View } from 'react-native'
import { Box } from '../Box'

export type BoxListProps<T = any> = Omit<FlatListProps<T>, 'data' | 'renderItem'> & {
  items: T[]
  selectedItems: T[]
  handleChange: (item: T) => void
}

export const BoxList: React.FC<BoxListProps> = ({ items, selectedItems, handleChange, ...props }: BoxListProps) => {
  const renderItems = ({ item: { title, icon } }) => {
    return (
      <Box isChecked={selectedItems.includes(title)} handlePress={() => handleChange(title)} title={title} pic={icon} />
    )
  }
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      columnWrapperStyle={{ flex: 1, alignItems: 'center', marginHorizontal: 4 }}
      data={items}
      renderItem={renderItems}
      ListFooterComponent={<View style={{ height: 80 }}></View>}
      numColumns={3}
    />
  )
}
