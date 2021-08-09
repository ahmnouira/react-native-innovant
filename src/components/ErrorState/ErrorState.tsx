import * as React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useTheme } from '../..'
import { errorHandler } from '../../utils/errorHandler'
import { styles } from './styles'

type ErrorStateType = {
  title?: string
  subtitle?: string
  context?: 'network' | 'any'
}

type ErrorStateProps = {
  error: any
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error }: ErrorStateProps) => {
  const [errorState, setErrorState] = useState<ErrorStateType>({})

  const [loading, setLoading] = useState<boolean>(false)

  const theme = useTheme()

  React.useEffect(() => {
    setLoading(true)
    errorHandler(error, {
      onNetwork: () =>
        setErrorState({
          title: 'Connect to the internet',
          subtitle: "You're offline. Check your connection",
          context: 'network',
        }),
      onAnyError: () =>
        setErrorState({
          title: `Something went wrong`,
          subtitle: `${error}`,
          context: 'any',
        }),
    })
    setLoading(false)
  }, [])

  if (loading) return <React.Fragment />

  return (
    <View style={styles.container}>
      <View style={[styles.view]}>
        {errorState && errorState.context ? (
          <View testID='icon' style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 8 }}>
            <Icon
              name={errorState.context === 'network' ? 'wifi' : 'exclamationcircleo'}
              size={60}
              color={theme?.colors.primary}
            />
          </View>
        ) : null}
        <View style={{ marginVertical: 8 }}>
          <Text style={styles.text} testID='content'>
            {errorState.title}
          </Text>
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={styles.text} testID='subContent'>
            {errorState.subtitle}
          </Text>
        </View>
      </View>
    </View>
  )
}
