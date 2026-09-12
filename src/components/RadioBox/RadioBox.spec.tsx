import * as React from 'react'
import { render } from '@testing-library/react-native'
import { RadioBox } from './RadioBox'

describe('RadioBox', () => {
  it('render checked RadioBox', async () => {
    const { container } = await render(<RadioBox checked color='red' />)
    expect(container).toBeDefined()
  })

  it('render unchecked RadioBox', async () => {
    const { container } = await render(<RadioBox color='blue' />)
    expect(container).toBeDefined()
  })
})
