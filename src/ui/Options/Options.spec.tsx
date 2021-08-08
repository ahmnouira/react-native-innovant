import React from 'react'
import { Options } from './Options'
import { render } from '@testing-library/react-native'

describe('Options', () => {
  test('it render empty Options', () => {
    const { container} = render(<Options options={[]} />)
    expect(container).toBeDefined()
  })
})
