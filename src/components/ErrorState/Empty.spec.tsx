import * as React from 'react'
import { ErrorState } from './ErrorState'
import { render } from '@testing-library/react-native'

describe('ErrorState', () => {
  test('render ErrorState', async () => {
    const { findByTestId } = render(<ErrorState error={'error fake'} />)
    const content = await findByTestId('content')
    expect(content).toBeTruthy()
    expect(content).toBeDefined()
  })
})
