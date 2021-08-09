import * as React from 'react'
import { render } from '@testing-library/react-native'
import { TouchableOpacity } from './TouchableOpacity'

describe('TouchableOpacity ', () => {
  test('render TouchableOpacity ', () => {
    const { container } = render(<TouchableOpacity />)
    expect(container).toBeDefined()
  })
})
