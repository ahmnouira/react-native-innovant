import { useContext } from 'react'
import { UtilsContext } from '../context/utils.context'

export const useUtils = () => useContext(UtilsContext)
