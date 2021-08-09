import React from 'react'
import { render } from '@testing-library/react-native'
import { EmptyHeader } from './EmptyHeader'

describe('EmptyHeader', () => {
  test('render primary EmptyHeader', () => {
    const {} = render(<EmptyHeader />)
  })
})
