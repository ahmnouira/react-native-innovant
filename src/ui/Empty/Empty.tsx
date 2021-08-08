import * as React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const Empty = ({ message, subMessage = 'Try Exploring or Creatting', searching = false }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.view, searching ? { marginBottom: 8 } : {}]}>
      
        <View style={{ marginVertical: 15 }}>
          <Text style={styles.text}>{message}</Text>
          {searching ? null : <Text style={styles.text}>or Workshops</Text>}
        </View>
        <View style={{ marginVertical: 15 }}>
          <Text style={styles.text}>{subMessage}</Text>
          <Text style={styles.text}>JAMS & Workshops</Text>
        </View>
      </View>
    </View>
  )
}
