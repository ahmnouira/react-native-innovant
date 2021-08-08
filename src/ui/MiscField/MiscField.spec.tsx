import * as React from 'react'
import { MiscField } from './MiscField'
import { render } from '@testing-library/react-native'

describe('MiscField', () => {
  it('should render correctly', () => {
    const { container } = render(<MiscField label='allow notifications' />)
    expect(container).toBeDefined()
  })
})
