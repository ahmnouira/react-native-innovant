import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Badge } from './Badge'
import { theme } from '../../theme/theme'

describe('Badge ', () => {
  it('render Badge ', () => {
    const { container } = render(<Badge text='Muisic' textColor={theme.colors.black} bgColor={theme.colors.white} />)

    expect(container).toBeDefined()
  })

  it('render Badge without image and textColor', () => {
    const { container } = render(<Badge text='Muisic' bgColor={theme.colors.white} />)
    expect(container).toBeDefined()
  })
})
