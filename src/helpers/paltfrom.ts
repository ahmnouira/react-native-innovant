import { Dimensions, Platform } from 'react-native'

export const deviceVersion: string | number = Platform.Version

export const windowHeight: number = Dimensions.get('window').height
export const windowWidth: number = Dimensions.get('window').width

export const isBig: boolean = windowWidth > 380
export const isTall: boolean = windowHeight > 640

export const isIOS: boolean = Platform.OS === 'ios'

export const isAndroid: boolean = Platform.OS === 'android'
