import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Bold } from './Bold'

describe('Bold', () => {
  it('should render Bold', () => {
    render(<Bold />)
  })

  it('render secondary Bold', () => {
    render(<Bold variant="secondary" />)
  })
})
