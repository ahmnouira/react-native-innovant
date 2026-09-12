import * as React from 'react'
import { MiscField } from './MiscField'
import { render } from '@testing-library/react-native'

describe('MiscField', () => {
  it('should render correctly', async () => {
    const { container } = await render(<MiscField label='allow notifications' />)
    expect(container).toBeDefined()
  })

  it('should render correctly with value and primary', async () => {
    const { container } = await render(<MiscField label='allow notifications' value={'enabled'} primary />)
    expect(container).toBeDefined()
  })
})
