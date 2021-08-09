import * as React from 'react'
import { Modal } from './Modal'
import { render } from '@testing-library/react-native'

describe('Modal', () => {
  test('render Modal', () => {
    const onClose = jest.fn()
    const { container } = render(<Modal visible center={false} onClose={onClose} />)
    expect(container).toBeDefined()
  })

  test('render centered Modal', () => {
    const onClose = jest.fn()
    const { container } = render(<Modal center visible onClose={onClose} height={100} width={100} />)
    expect(container).toBeDefined()
  })
})
