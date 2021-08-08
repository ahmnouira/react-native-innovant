import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Badge } from './Badge'
import { theme } from '../../theme/theme'
import faker from 'faker'

describe('Badge ', () => {
  it('should render Badge correctly', () => {
    const { container } = render(<Badge image={{
      source: {
        uri: faker.internet.avatar()
      }
    }} text='Muisic' textColor={theme?.colors.black} bgColor={theme?.colors.white} />)
    expect(container).toBeDefined()
  })

  it('should render Badge without image and textColor correctly', () => {
    const { container } = render(<Badge text='Muisic' bgColor={theme?.colors.white} />)
    expect(container).toBeDefined()
  })
})
