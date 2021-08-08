import * as React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { styles } from './styles'

type MiscFieldProps = TouchableOpacityProps & {
  label: string
  value?: string
  primary?: boolean
}

export const MiscField: React.FC<MiscFieldProps> = ({ label, primary, value, ...props }: MiscFieldProps) => {
  const theme = useTheme()

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.row} {...props}>
      <Text style={[styles.label, primary ? { color: theme?.colors.primary } : null]}>{label}</Text>
      {value ? <Text style={styles.label}>{value}</Text> : null}
    </TouchableOpacity>
  )
}
