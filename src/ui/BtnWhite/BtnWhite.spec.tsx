import * as React from 'react'
import { render } from '@testing-library/react-native'
import { BtnWhite } from './BtnWhite'

describe('BtnWhite', () => {
  it('should render BtnWhite', () => {
    const { container } = render(<BtnWhite title='next' disabled onPress={() => {}} />)
    expect(container).toBeDefined()
  })

  it('should render  BtnWhite with loading', () => {
    const { container } = render(<BtnWhite title='next' disabled onPress={() => {}} isLoading />)
    expect(container).toBeDefined()
  })
})
