import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Loading } from './Loading'

describe('Loading', () => {
  it('should render a centered Loading', async () => {
    const { container } = await render(<Loading size='large' center />)
    expect(container).toBeDefined()
  })

  it('should render Loading', async () => {
    const { container } = await render(<Loading size='small' center={false} />)
    expect(container).toBeDefined()
  })
})
