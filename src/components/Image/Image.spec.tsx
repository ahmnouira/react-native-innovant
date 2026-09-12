import React from 'react'
import { Image } from './Image'
import { render } from '@testing-library/react-native'

describe('Image', () => {
  test('render Image', async () => {
    const {} = await render(<Image source={{ uri: '' }} />)
  })
})
