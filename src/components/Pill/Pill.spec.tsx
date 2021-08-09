import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Pill } from './Pill'

describe('Pill', () => {
  test('should render Pill', () => {
    const {} = render(<Pill title='Pill' isChecked handlePress={() => console.log('pressed')} />)
  })

  test('should render unchecked Pill', () => {
    const {} = render(<Pill title='Pill' isChecked={false} handlePress={() => console.log('pressed')} />)
  })
})
