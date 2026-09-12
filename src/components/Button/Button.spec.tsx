import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Button } from './Button'

describe('Button', () => {
  it('should render BtnWhite', async () => {
    const { container } = await render(<Button title='next' onPress={() => {}} />)
    expect(container).toBeDefined()
  })

  it('should render BtnWhite with loading', async () => {
    const { container } = await render(<Button title='next' disabled={false} onPress={() => {}} isLoading />)
    expect(container).toBeDefined()
  })
})
