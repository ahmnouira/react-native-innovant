import * as React from 'react'
import { Switch, View, Text, SwitchProps, StyleSheet } from 'react-native'
import { useTheme } from '../..'

type SwitchFieldProps = SwitchProps & {
  label: string
}

export const SwitchField: React.FC<SwitchFieldProps> = ({ label, ...props }: SwitchFieldProps) => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme?.sizes.sm,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    label: {
      color: theme?.colors.black,
      lineHeight: 20,
      textAlign: 'left',
      letterSpacing: -0.24,
      fontFamily: theme?.fonts.secondary.medium,
      fontSize: 15,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ marginRight: -8 }}>
        <Switch
          trackColor={{ false: '#E2E2E2', true: '#172B4DA0' }}
          thumbColor={props.value ? theme?.colors.primary : '#D1D1D1'}
          shouldRasterizeIOS
          isTVSelectable
          {...props}
        />
      </View>
    </View>
  )
}
