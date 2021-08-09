import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Box } from './Box'
import { INSTRUMENTS } from '../../utils/consts'

describe('Box', () => {
  test('should render checked Box', () => {
    const randomInstrument = INSTRUMENTS[Math.floor(Math.random() * INSTRUMENTS.length)]
    const {} = render(
      <Box isChecked={true} pic={randomInstrument.icon} title={randomInstrument.title} handlePress={console.log} />
    )
  })

  test('should render unchecked Box', () => {
    const randomInstrument = INSTRUMENTS[Math.floor(Math.random() * INSTRUMENTS.length)]
    const {} = render(
      <Box isChecked={false} pic={randomInstrument.icon} title={randomInstrument.title} handlePress={console.log} />
    )
  })
})
