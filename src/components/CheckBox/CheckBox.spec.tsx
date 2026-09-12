import * as React from 'react'
import { render } from '@testing-library/react-native'
import { CheckBox } from './CheckBox'

describe('CheckBox', () => {
  test('render checked CheckBox', async () => {
    const { container } = await render(<CheckBox checked color='red' />)
    expect(container).toBeDefined()
  })

  test('render unchecked CheckBox', async () => {
    const { container } = await render(<CheckBox color='yellow' />)
    expect(container).toBeDefined()
  })
})
