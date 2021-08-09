import * as React from 'react'
import { Sheet } from './Sheet'
import { render } from '@testing-library/react-native'
import { Options } from '../Options'

describe('Sheet', () => {
  test('render Sheet', () => {
    const { container } = render(
      <Sheet title='Options' onClose={() => {}} onConfirm={() => {}}>
        <Options options={[]} />
      </Sheet>
    )
    expect(container).toBeDefined()
  })
})
