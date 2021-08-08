import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Empty } from './Empty'

describe('Empty', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty message='No data to show' />)
    expect(container).toBeDefined()
  })
})
