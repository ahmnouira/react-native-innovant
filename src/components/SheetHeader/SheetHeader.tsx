import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from './styles'

type SheetHeaderProps = {
  title: string
  onClose: () => void
  onConfirm?: () => void
  okDisabled?: boolean
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({
  title,
  onClose,
  onConfirm,
  okDisabled,
}: SheetHeaderProps) => {
  return (
    <View style={{ marginVertical: 12 }}>
      <View style={[styles.row, !onConfirm && { paddingRight: 24 }]}>
        <TouchableOpacity activeOpacity={0.75} style={styles.closeBtn} onPress={onClose}>
          <Icon name='close' color={'black'} size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {onConfirm ? (
          <TouchableOpacity
            activeOpacity={0.75}
            style={[styles.okBtn, !okDisabled ? { opacity: 0.8 } : null]}
            onPress={onConfirm}
            disabled={!okDisabled}>
            <Text style={styles.ok}>Ok</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.empty} />
        )}
      </View>
    </View>
  )
}
