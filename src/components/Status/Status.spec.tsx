import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Status } from './Status'

describe('Status', () => {
  test('render Status', () => {
    const { container } = render(<Status backgroundColor={'#313242'} barStyle='light-content' />)
    expect(container).toBeDefined()
  })
})
