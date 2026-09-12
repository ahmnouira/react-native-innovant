import * as React from 'react'
import { StatusBar, StatusBarProps } from 'react-native'
import { isIOS } from '../../helpers/paltfrom'

export const Status: React.FC<StatusBarProps> = (props: StatusBarProps) => {
  return (
    <StatusBar
      hidden={false}
      barStyle={isIOS ? 'dark-content' : 'light-content'}
      showHideTransition='slide'
      animated={isIOS}
      {...props}
    />
  )
}
