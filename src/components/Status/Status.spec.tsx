import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Status } from './Status'

describe('Status', () => {
  test('render Status', async () => {
    const { container } = await render(<Status barStyle='light-content' />)
    expect(container).toBeDefined()
  })
})
