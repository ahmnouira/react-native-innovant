import * as React from 'react'
import { render } from '@testing-library/react-native'
import { SheetHeader } from './SheetHeader'

describe('SheetHeader', () => {
  it('should render SheetHeader', () => {
    const { container } = render(<SheetHeader title='sheet title' onConfirm={() => {}} onClose={() => {}} okDisabled />)
    expect(container).toBeDefined()
  })

  it('should render SheetHeader', () => {
    const { container } = render(<SheetHeader title='sheet title' onClose={() => {}} />)
    expect(container).toBeDefined()
  })
})
