import React, { PropsWithChildren, forwardRef, ReactNode } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { SheetHeader } from '../SheetHeader/SheetHeader'
import { windowHeight } from '../../helpers/paltfrom'

type SheetProps = {
  title: string
  onClose: () => void
  onConfirm?: () => void
  temp?: any
  height?: 1 | 1.1 | 1.2 | 1.5 | 2 | 3 | 4 | number
  children: ReactNode
}

export const Sheet = forwardRef(
  ({ children, temp, height = 1.5, ...rest }: PropsWithChildren<SheetProps>, ref: any) => (
    <RBSheet
      ref={ref}
      height={height > 4 ? height : windowHeight / height}
      animationType='slide'
      closeOnDragDown
      closeOnPressMask
      keyboardAvoidingViewEnabled
      customStyles={{
        container: styles.sheetContainer,
        wrapper: styles.sheetWrapper,

        draggableIcon: styles.sheetDraggableIcon,
      }}>
      <SafeAreaView>
        <View style={styles.container}>
          <SheetHeader okDisabled={temp ? true : false} {...rest} />

          <ScrollView
            style={[styles.scroll, { marginBottom: 60 }]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'>
            <View style={styles.main}>{children}</View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </RBSheet>
  )
)
