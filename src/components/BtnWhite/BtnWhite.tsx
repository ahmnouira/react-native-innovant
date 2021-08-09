import * as React from 'react'
import { Text, TouchableOpacityProps } from 'react-native'
import { Loading } from '../Loading'
import { TouchableOpacity } from '../TouchableOpacity'
import { styles } from './styles'

export type BtnWhiteProps = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
  disabled?: boolean
  icon?: string
}

export const BtnWhite: React.FC<BtnWhiteProps> = ({
  title,
  isLoading = false,
  disabled = false,
  icon,
  ...props
}: BtnWhiteProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, disabled ? { opacity: 0.5 } : { opacity: 1 }]}
      {...props}>
      {isLoading ? (
        <Loading size='small' center style={{ flex: 1, backgroundColor: undefined }} />
      ) : (
        <Text style={styles.label}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}
