import { useContext } from 'react'
import { ThemeContext } from '../theme/theme.context'

export const useTheme = () => useContext(ThemeContext).theme
