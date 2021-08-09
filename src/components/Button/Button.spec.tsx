import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Button } from './Button'

describe('Button', () => {
  it('should render BtnWhite', () => {
    const { container } = render(<Button title='next' disabled onPress={() => {}} />)
    expect(container).toBeDefined()
  })

  it('should render  BtnWhite with loading', () => {
    const { container } = render(<Button title='next' disabled={false} onPress={() => {}} isLoading />)
    expect(container).toBeDefined()
  })
})
