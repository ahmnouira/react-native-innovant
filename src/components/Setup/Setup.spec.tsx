import * as React from 'react'
import { Setup } from './Setup'
import { render, cleanup } from '@testing-library/react-native'
import { UtilsProvider } from '../../context/utils.context'

describe('Setup', () => {
  test('render Setup with init store', () => {
    const { container} = render(
      <UtilsProvider>
        <Setup />
      </UtilsProvider>
    )
    expect(container).toBeDefined()
  })
  afterEach(() => cleanup())
})
