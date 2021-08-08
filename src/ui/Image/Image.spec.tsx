import React from 'react'
import { Image } from './Image'
import { render } from '@testing-library/react-native'
import faker from 'faker'

describe('Image', () => {
  test('render Image', () => {
    const {} = render(<Image source={{ uri: faker.internet.avatar() }} />)
  })
})
