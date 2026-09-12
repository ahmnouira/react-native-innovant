import * as React from 'react'
import { render } from '@testing-library/react-native'
import { SwitchField } from './SwitchField'

describe('SwitchField', () => {
  it('should render SwitchField', async () => {
    const { container } = await render(<SwitchField label='Swicth Field' />)
    expect(container).toBeDefined()
  })
})
