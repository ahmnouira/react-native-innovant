import * as React from 'react'
import { render } from '@testing-library/react-native'
import { KeyboardAvoiding } from './KeyboardAvoiding'

describe('KeyboardAvoiding', () => {
  
  test('render KeyboardAvoiding', () => {
    const { container } = render(<KeyboardAvoiding />)
    expect(container).toBeDefined()
  })
})
