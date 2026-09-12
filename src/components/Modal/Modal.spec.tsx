import * as React from 'react'
import { Modal } from './Modal'
import { render } from '@testing-library/react-native'

describe('Modal', () => {
  test('render Modal', async () => {
    const onClose = jest.fn()
    const { container } = await render(<Modal visible center={false} onClose={onClose} />)
    expect(container).toBeDefined()
  })

  test('render centered Modal', async () => {
    const onClose = jest.fn()
    const { container } = await render(<Modal center visible onClose={onClose} height={100} width={100} />)
    expect(container).toBeDefined()
  })
})
